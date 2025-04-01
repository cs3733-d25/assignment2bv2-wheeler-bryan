import React from 'react';

const Table1: React.FC = ()=>{
    return (
        <table className="collapse">
            <caption>Popular Ski Destinations</caption>
            <tr>
                <th>Location</th>
                <th>Country</th>
                <th>Peak Elevation</th>
            </tr>
            <tr>
                <td>Whistler Blackcomb</td>
                <td>Canada</td>
                <td>2,284 m</td>
            </tr>
            <tr>
                <td>Chamonix</td>
                <td>France</td>
                <td>3,275 m</td>
            </tr>
            <tr>
                <td>Park City</td>
                <td>USA</td>
                <td>3,050 m</td>
            </tr>
            <tr>
                <td>Hakuba Valley</td>
                <td>Japan</td>
                <td>1,831 m</td>
            </tr>
        </table>
    );
};

export default Table1;
