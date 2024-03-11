import React, {useState,useEffect} from "react";
import DashboardCard from './DashboardCard';
import LineChart from './LineChart';
import getSpreadsheetData from '../../services/googleSheetsApi';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getSpreadsheetData();
                setData(responseData.values); // Assuming that responseData.values contains your data
            } catch (error) {
                console.error('Error fetching spreadsheet data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>
            <LineChart data={data} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DashboardCard title="Valor más alto" value={Math.max(...data)} />
            <DashboardCard title="Valor más bajo" value={Math.min(...data)} />
            <DashboardCard title="Promedio" value={calculateAverage(data)} />
            </div>
        </div>
        );
    };
    
    // Función para calcular el promedio de los datos
    const calculateAverage = (data) => {
        const sum = data.reduce((acc, curr) => acc + curr, 0);
        return sum / data.length;
    };
    
    export default Dashboard;