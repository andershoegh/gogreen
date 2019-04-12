import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import IndividualGraph from "../Components/IndividualGraph/individualgraph";
import SmallCard from "../Components/SmallCard/SmallCard";
import { Row, Col, Container } from "react-grid-system";
import H1 from "../Components/H1/H1";
import H2 from "../Components/H2/H2";
import "./pages.scss";
import washMachine from "../images/washMachine.png";
import Icon from "../Components/Icon/Icon";
import forecastIcon from "../images/forecastIcon.png";

const Dashboard = props => {
  if (props.authUser) {
    return (
      <div>
        <div>
          <H1>GoForGreen</H1>
          <H2>Shift to green energy now</H2>
        </div>
        <Container className="container">
          <Row>
            <Col xs={6}>
              <NavLink to="/myusage">
                {
                  <SmallCard
                    className="card"
                    header="Mit forbrug"
                    tileContent={<IndividualGraph />}
                  />
                }
              </NavLink>
            </Col>
            <Col xs={6}>
              <NavLink to="/community">
                {
                  <SmallCard
                    className="card"
                    header="Fælles forbrug"
                    tileContent={<IndividualGraph />}
                  />
                }
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <NavLink to="/realtime">
                {
                  <SmallCard
                    className="card"
                    header="Real-tids data"
                    tileContent={<Icon icon={forecastIcon} />}
                  />
                }
              </NavLink>
            </Col>
            <Col xs={6}>
              <NavLink to="/products">
                {
                  <SmallCard
                    className="card"
                    header="Produkter"
                    tileContent={<Icon icon={washMachine} />}
                  />
                }
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Dashboard;
