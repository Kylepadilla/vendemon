import React from 'react';

const Alerts = props =>

<div>

<div>
    <table>
        <thead>
            <tr>
                <th data-field="id">
                    Team_ID
</th>
                <th data-field="team_id">
                    Type
</th>
                <th data-field="Location">
                    Address
</th>
                <th data-field="Location">
                    City
</th>
                <th data-field="Location">
                    Description
</th>
                <th data-field="Location">
                    Date
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                {props.Team_ID}
                </td>
                <td>
                {props.Type}
                </td>
                <td>
                {props.Address}
                </td>
                <td>
                {props.City}
                </td>
                <td>
                {props.Description}
                </td>
                <td>
                {props.post_date}  
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div>
        </div>
        </div>
        
export default Alerts