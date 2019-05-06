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
                    {props.team_id}
                </td>
                <td>
                    {props.location}
                </td>
                <td>
                    {props.est_Cost}
                </td>
                <td>
                    {props.job_Type}
                </td>
                <td>
                    {props.job_Description}
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div>
        <button className = "btn btn primary" onClick={()=>props.alerts_Refresh()}></button>
        </div>
        </div>
export default Alerts