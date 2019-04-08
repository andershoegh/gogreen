import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    let title = "";
    switch(props.location.pathname){
        case '/community':
            title = 'Community data';
            break;
        case '/myusage':
            title = 'My Usage';
            break;
        case '/realtime':
            title = 'Real time data';
            break;
        case '/products':
            title = 'Products';
            break;
        default:
            title= 'Dashboard';
    }
    
    return ( 
        <div>
            <Link to='/'>Dashboard-logo </Link>
            <span> {title}  </span>
            <Link to=''>Log out</Link>
        </div>
     );
}
 
export default Navbar;