/* src/components/dashboard/DashboardCard.js */

import React from 'react';

const DashboardCard = ({ title, value }) => {
    return (
    <div style={{ border: '1px solid black', padding: '10px', width: '30%' }}>
        <h2>{title}</h2>
        <p>{value}</p>
    </div>
    );
};

export default DashboardCard;
