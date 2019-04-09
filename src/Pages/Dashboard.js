import React from "react";
import { NavLink } from "react-router-dom";
import IndividualGraph from "../Components/IndividualGraph/individualgraph";
import SmallCard from "../Components/SmallCard/SmallCard";
import { Row, Col } from "react-grid-system";
import H1 from "../Components/H1/H1";
import H2 from "../Components/H2/H2";
import "./pages.scss";

const columnStyle = {
  paddingLeft: "25px",
  paddingRight: "25px"
};

const Dashboard = () => {
  return (
    <div>
      <div>
        <H1>GoForGreen</H1>
        <H2>Shift to green energy now</H2>
      </div>
      <Col style={columnStyle}>
        <Row>
          <NavLink to="/myusage">
            {
              <SmallCard
                header="Mit forbrug"
                tileContent={<IndividualGraph />}
              />
            }
          </NavLink>

          <NavLink to="/community">
            {
              <SmallCard
                header="Fælles forbrug"
                tileContent={<IndividualGraph />}
              />
            }
          </NavLink>
        </Row>
        <Row>
          <NavLink to="/realtime">
            {<SmallCard header="Real-tids data" />}
          </NavLink>

          <NavLink to="/products">
            {
              <SmallCard
                header="Produkter"
                tileContent={
                  <img src="../images/washMachine.png" alt="Washing machine" />
                }
              />
            }
          </NavLink>
        </Row>
      </Col>
    </div>
  );
};

export default Dashboard;
