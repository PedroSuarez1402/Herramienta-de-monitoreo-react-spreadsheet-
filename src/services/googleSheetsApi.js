import axios from 'axios';

const SPREADSHEET_ID = '1mIOo69_uvnxtw3GluZCFlOSOi7_LlINkhGCEUZi1ciU';
const API_KEY = 'AIzaSyALDE99h7nJJTLp9XNYZLOFK56Y9_G10Gw';

const getSpreadsheetData = async () => {
    try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values:batchGet`, {
            params: {
                ranges: 'Combined Values',
                majorDimension: 'ROWS',
                key: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching spreadsheet data:', error);
        throw error;
    }
};

export default getSpreadsheetData;
