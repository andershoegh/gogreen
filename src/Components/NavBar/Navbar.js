import React from 'react';
import { Link } from 'react-router-dom'
import {firebase} from '../../Utils/Firebase'

const Navbar = (props) => {
    let title = props.title;

    return ( 
        <div>
            <Link to='/'>Dashboard-logo </Link>
            <span> {title}  </span>
            <Link onClick={firebase.doSignOut} to='/signin'>Log out</Link>
        </div>
     );
}
 
export default Navbar;