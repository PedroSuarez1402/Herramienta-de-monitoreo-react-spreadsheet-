import React from 'react';
import FusionCharts from 'react-fusioncharts';
import { LineChartConfig } from './chartConfigs'; // Configuración de la gráfica de línea

// Aplicar tema fusion
const LineChart = ({ data }) => {
    // Aplicar tema directamente a la configuración del gráfico
    const chartConfigWithTheme = {
        ...LineChartConfig,
        chart: {
            ...LineChartConfig.chart,
            theme: 'fusion',
        },
    };

    const chartData = {
        ...chartConfigWithTheme,
        data: data.map((value, index) => ({ label: `Data ${index + 1}`, value }))
    };

    return (
        <div>
            <h2>Gráfico de Línea</h2>
            <FusionCharts {...chartData} />
        </div>
    );
};
export default LineChart;
