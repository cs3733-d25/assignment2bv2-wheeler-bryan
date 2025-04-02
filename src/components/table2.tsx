import React from 'react';

const Table2: React.FC = ()=>{
    return (
        <table className="Bryan">
            <caption className="BryanHeader">Current Serie A Table</caption>
            <tr>
                <th>Team</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
            </tr>
            <tr>
                <td>Inter</td>
                <td>19</td>
                <td>7</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Napoli</td>
                <td>18</td>
                <td>7</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Atalanta</td>
                <td>17</td>
                <td>7</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Bologna</td>
                <td>14</td>
                <td>11</td>
                <td>4</td>
            </tr>
        </table>

    );
};

export default Table2;
