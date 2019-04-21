import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import IndividualGraph from "../Components/IndividualGraph/individualgraph";
import SmallCard from "../Components/SmallCard/SmallCard";
import { Container } from "react-grid-system";
import H1 from "../Components/H1/H1";
import H2 from "../Components/H2/H2";
import washMachine from "../images/washMachine.png";
import Icon from "../Components/Icon/Icon";
import forecastIcon from "../images/forecastIcon.png";
import "./Dashboard.css";
import GreenBgImg from "../images/backgroundGreen.png";
import RedBgImg from "../images/backgroundRed.png";

const Dashboard = props => {
  const gSubHead = "Shit to green energy now";
  const rSubHead = "Wait to use energy till it is green";

  const bgImg = props.isGreen ? GreenBgImg : RedBgImg;
  const subheader = props.isGreen ? gSubHead : rSubHead;

  if (props.authUser) {
    document.body.style.backgroundImage = `url(${bgImg})`;
    return (
      <Container>
        <div>
          <H1>GoForGreen</H1>
        </div>
        <div className="subHeader">
          <H2>{subheader}</H2>
        </div>
        <div className="navCards">
          <NavLink to="/myusage">
            <SmallCard header="Mit forbrug" tileContent={<IndividualGraph />} />
          </NavLink>
          <NavLink to="/community">
            <SmallCard
              header="Fælles forbrug"
              tileContent={<IndividualGraph />}
            />
          </NavLink>
        </div>
        <div className="navCards">
          <NavLink to="/realtime">
            <SmallCard
              header="Real-tids data"
              tileContent={<Icon icon={forecastIcon} />}
            />
          </NavLink>
          <NavLink to="/products">
            <SmallCard
              header="Produkter"
              tileContent={<Icon icon={washMachine} />}
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
