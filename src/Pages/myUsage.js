import React from "react";
import { Redirect, Link } from "react-router-dom";
import Icon from "../Components/Icon/Icon";
import { Container } from "react-grid-system";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import CarouselWrapper from "../Components/Carousel/Carousel";
import "./myUsage.css";

const MyUsage = ({ authUser, user }) => {
  if (authUser) {
    return (
      <Container>
        <div className="toggle-data">
          <Icon icon={userIcon} />
          <Link to="/community">
            <Icon icon={communityIcon} />
          </Link>
        </div>

        <div className="indi-graph">
          <WideCardSideText
            header="Green Electricity consumption"
            graph={<CommunityGraph />}
            sideText="60% af alt strøm du bruger er grøn energi."
          />
        </div>

        <div className="carousel-wrapper">
          <CarouselWrapper />
        </div>
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default MyUsage;
