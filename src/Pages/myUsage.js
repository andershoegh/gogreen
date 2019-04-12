import React from "react";
import { Redirect, Link } from "react-router-dom";
import Icon from "../Components/Icon/Icon";
import { Col, Row, Container } from "react-grid-system";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import WideCard from "../Components/WideCard/WideCard";
import CarouselWrapper from "../Components/Carousel/Carousel";
import "./pages.scss";

const MyUsage = props => {
  if (props.authUser) {
    return (
      <div>
        <Container>
          <Row style={{ justifyContent: "space-evenly" }}>
            <Icon icon={userIcon} />
            <Link to="/community">
              <Icon icon={communityIcon} />
            </Link>
          </Row>

          <Row>
            <WideCardSideText
              header="Green Electricity consumption"
              graph={<CommunityGraph />}
              sideText={<p>60% af alt strøm du bruger er grøn energi.</p>}
            />
          </Row>
          <Row>
            <WideCard header="Grøn sort fordeling pr. dag" />
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col xs={12}>
              <CarouselWrapper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default MyUsage;
