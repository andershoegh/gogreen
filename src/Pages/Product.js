import React from "react";
import { Redirect } from "react-router-dom";
import Carousel from "../Components/Carousel/Carousel";
import { Container, Row } from "react-grid-system";

const Products = ({ user, authUser }) => {
  if (authUser) {
    return (
      <div>
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Carousel />
          </Row>
        </Container>
      </div>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Products;
