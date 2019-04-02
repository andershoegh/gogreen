import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Dashboard = () => {
    return ( 
        <div>
            <div>
                <Link to='/'>Dashboard</Link>
                <h4>Dashboard</h4>
            </div>
            
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