import React from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "../Components/Icon/Icon";
import { Row, Container } from "react-grid-system";
import H2 from "../Components/H2/H2";
import dashIcon from "../images/dashIcon.png";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import WideCard from "../Components/WideCard/WideCard";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";
import { Carousel } from "react-materialize";
import "./pages.scss";

const MyUsage = () => {
  const dashStyle = {
    position: "absolute",
    width: "28px",
    height: "28px",
    left: "20px",
    top: "20px"
  };

  return (
    <div>
      <Container>
        <Row>
          <Link to="/">
            <Icon style={dashStyle} icon={dashIcon} />
          </Link>
          <H2>Mit forbrug</H2>
        </Row>
        <Row justify-content-center>
          <Icon icon={userIcon} />
          <Icon icon={communityIcon} />
        </Row>
        <Row />
        <Row>
          <WideCard
            header="Green Electricity consumption"
            graph={<CommunityGraph />}
          />
        </Row>
        <Row>
          <WideCard header="Grøn sort fordeling pr. dag" graph={<barGraph />} />
        </Row>

        <H2>ovn 75% grøn i gennemsnit</H2>
        <Row>
          <Carousel
            images={[
              "https://picsum.photos/200/300?image=0",
              "https://picsum.photos/200/300?image=1",
              "https://picsum.photos/200/300?image=2"
            ]}
          />
        </Row>
      </Container>
    </div>
  );
};

export default MyUsage;
