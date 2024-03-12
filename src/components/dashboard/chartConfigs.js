/* src/components/dashboard/chartConfigs.js */

export const LineChartConfig = {
    type: 'line',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
        caption: 'Datos del Router',
        xAxisName: 'Tiempo',
        yAxisName: 'Valor',
        theme: 'fusion',
        },
        data: [],
    },
};
