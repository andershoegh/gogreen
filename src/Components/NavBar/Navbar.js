import React from 'react';
import { Link } from 'react-router-dom'
import {firebase} from '../../Utils/Firebase'

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
        case '/signin':
            title = 'Sign in';
            break;
        default:
            title= 'Dashboard';
    }

    if(props.authUser){
        return ( 
            <div>
                <Link to='/'>Dashboard-logo </Link>
                <span>{title}</span>
                <Link onClick={() => firebase.doSignOut()} to='/signin'> Log out</Link>
            </div>
         );
    }
    else{
        return null;
    }
}
export default Navbar;