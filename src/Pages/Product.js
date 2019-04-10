import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import { Container, Row } from "react-grid-system";

const Products = () => {
  return (
    <div>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Carousel />
        </Row>
      </Container>
    </div>
  );
};

export default Products;
