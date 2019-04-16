import React from "react";
import { Redirect } from "react-router-dom";
import Carousel from "../Components/Carousel/Carousel";
import { Container } from "react-grid-system";

const Products = ({ user, authUser }) => {
  if (authUser) {
    return (
      <Container>
        <div>
          <Carousel />
        </div>
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Products;
