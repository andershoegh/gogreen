import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';

const Dashboard = (props) => {
  if(props.authUser){
    return (
        <div>
            <Navbar title={'Dashboard'}/>
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