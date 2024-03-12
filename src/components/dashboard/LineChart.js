/* src/components/dashboard/LineChart.js */

import React from 'react';
import FusionCharts from 'fusioncharts/core';
import charts from 'fusioncharts/viz/line';
import { LineChartConfig } from './chartConfigs'; // Configuración de la gráfica de línea

// Registrar los gráficos
charts(FusionCharts);

const LineChart = ({ data }) => {
    const chartData = {
        ...LineChartConfig,
        data: data.slice(1).map(row => ({
            label: row[0], // El primer elemento de cada fila es el tiempo
            Tx: parseFloat(row[1]), // El segundo elemento es el valor Tx
            Rx: parseFloat(row[2]), // El tercer elemento es el valor Rx
        })),
    };
    return (
        <div>
            <h2>Gráfico de Línea</h2>
            <FusionCharts
                type="line"
                width="100%"
                height="400"
                dataFormat="json"
                dataSource={chartData}
            />
        </div>
    );
};

export default LineChart;