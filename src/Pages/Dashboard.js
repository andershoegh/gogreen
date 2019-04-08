import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return ( 
        <div>  
            <ul>
                <li><NavLink to='/myusage'>My Usage</NavLink></li>
                <li><NavLink to='/community'>Community usage</NavLink> </li>
                <li><NavLink to='/realtime'>Real time data</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
            </ul>
        </div>
     );
}
 
export default Dashboard;