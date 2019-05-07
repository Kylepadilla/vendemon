import React from 'react';

const Alerts = props =>

<div>

<div>
    <table>
        <thead>
            <tr>
                <th data-field="id">
                    ID
</th>
                <th data-field="team_id">
                    Team_ID
</th>
                <th data-field="Location">
                    Location
</th>
                <th data-field="Location">
                    est_Cost
</th>
                <th data-field="Location">
                    Job_type
</th>
                <th data-field="Location">
                    Description
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    {props.id}
                </td>
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