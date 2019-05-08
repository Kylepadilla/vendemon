import React from 'react'



const AlertContainer = props => 

<div>

<div>
    <table>
        <thead>
            <tr>
                <th data-field="team_id">
                    Type
</th>
                <th data-field="address">
                    Address
</th>
                <th data-field="city">
                    City
</th>
                <th data-field="bedrooms">
                    Bedrooms
</th>
                <th data-field="bath">
                    Bath
</th>
                <th data-field="pool">
                    Pool
</th>
                <th data-field="sqft">
                    sqft
</th>
                <th data-field="realtor">
                    Realtor
</th>
                <th data-field="phone">
                    Phone
</th>
                <th data-field="price">
                    Price
</th>
                <th data-field="postDate">
                    Post Date
</th>
            </tr>
        </thead>
        <tbody>
            <tr>
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
                {props.Bedroom}
                </td>
                <td>
                {props.Bath}  
                </td>
                <td>
                {props.Pool}  
                </td>
                <td>
                {props.sqft}  
                </td>
                <td>
                {props.realtor}  
                </td>
                <td>
                {props.phone}  
                </td>
                <td>
                {props.price}  
                </td>
                <td>
                {props.post_date}  
                </td>
                <button  type="button" className="btn btn-primary" onClick = {()=>props.onclick(props.id)}>Remove</button>
            </tr>
        </tbody>
    </table>
    </div>
    <div>
        </div>
        </div>

export default AlertContainer