import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import IndividualGraph from "../Components/IndividualGraph/individualgraph";
import SmallCard from "../Components/SmallCard/SmallCard";
import { Container } from "react-grid-system";
import H1 from "../Components/H1/H1";
import H2 from "../Components/H2/H2";
import washMachine from "../images/washing-machine.svg";
import Icon from "../Components/Icon/Icon";
import forecastIcon from "../images/forecastIcon.png";
import "./Dashboard.css";
import GreenBgImg from "../images/backgroundGreen.png";
import RedBgImg from "../images/backgroundRed.png";
import CommunityGraphContribution from "../Components/CommunityGraph/CommunityGraphContribution";

const Dashboard = props => {
  const gSubHead = "Energien er grøn nu";
  const rSubHead = "Energien er lige nu rød";

  const bgImg = props.isGreen ? GreenBgImg : RedBgImg;
  const subheader = props.isGreen ? gSubHead : rSubHead;

  if (props.authUser) {
    document.body.style.backgroundImage = `url(${bgImg})`;
    return (
      <Container>
        <div>
          <H1>Lumen</H1>
        </div>
        <div className="subHeader">
          <H2>{subheader}</H2>
        </div>
        <div className="navCards">
          <NavLink to="/myusage">
            <SmallCard
              header="Mit forbrug"
              tileContent={<IndividualGraph user={props.user} small={true} />}
            />
          </NavLink>
          <NavLink to="/community">
            <SmallCard
              header="Fælles forbrug"
              tileContent={
                <CommunityGraphContribution
                  community={props.community}
                  small={true}
                />
              }
            />
          </NavLink>
        </div>
        <div className="navCards">
          <NavLink to="/realtime">
            <SmallCard
              header="Forecasting"
              tileContent={<Icon icon={forecastIcon} />}
            />
          </NavLink>
          <NavLink to="/products">
            <SmallCard
              header="Log produkter"
              tileContent={<img src={washMachine} alt={""} />}
            />
          </NavLink>
        </div>
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Dashboard;
