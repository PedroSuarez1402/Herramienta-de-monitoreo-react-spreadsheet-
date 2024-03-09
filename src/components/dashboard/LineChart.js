import React from 'react';
import FusionCharts from 'react-fusioncharts';
import FusionChartsComponent from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { LineChartConfig } from './chartConfigs'; // Configuración de la gráfica de línea

// Aplicar tema fusion
FusionChartsComponent.fcRoot(FusionCharts, FusionTheme);

const LineChart = ({ data }) => {
    const chartData = {
    chart: LineChartConfig,
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
