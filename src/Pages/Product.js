import React from 'react';
import { Redirect } from 'react-router-dom';


const Products = (props) => {
    if(props.authUser){
        return ( 
            <div>
               
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