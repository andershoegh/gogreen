import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Components/Icon/Icon";
import { Row, Container } from "react-grid-system";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import WideCard from "../Components/WideCard/WideCard";
import "./pages.scss";
import Carousel from "../Components/Carousel/Carousel";

const MyUsage = () => {
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
          <Carousel header={"Produkt % gennemsnitlig grøn"} />
        </Row>
      </Container>
    </div>
  );
};

export default MyUsage;
