import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
  if(props.auth){
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
  else{
      return(
          <Redirect to="/signin"></Redirect>
      );
  }
    
}
 
export default Dashboard;