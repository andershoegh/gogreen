import React from 'react';
import Navbar from '../Components/NavBar/Navbar';
import { Redirect } from 'react-router-dom';


const Products = (props) => {
    if(props.authUser){
        return ( 
            <div>
               <Navbar title={'Real time data'}/>
            </div>
         );
    }
    else{
        return(
            <Redirect to="/signin"></Redirect>
        );
    }
   
}
 
export default Products;