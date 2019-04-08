
import React from "react";
import { Link, NavLink } from "react-router-dom";
import barGraph from "../Components/barGraph/barGraph";

const Products = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <h4>Products</h4>

      <barGraph />
    </div>
  );
};

export default Products;
