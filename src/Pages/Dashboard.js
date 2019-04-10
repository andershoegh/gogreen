import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import IndividualGraph from "../Components/IndividualGraph/individualgraph";
import SmallCard from "../Components/SmallCard/SmallCard";
import { Row, Col } from "react-grid-system";
import H1 from "../Components/H1/H1";
import H2 from "../Components/H2/H2";
import "./pages.scss";
import washMachine from "../images/washMachine.png";
import Icon from "../Components/Icon/Icon";
import forecastIcon from "../images/forecastIcon.png";


const Dashboard = (props) => {
  if(props.authUser){
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
            {
              <SmallCard
                header="Real-tids data"
                tileContent={<Icon icon={forecastIcon} />}
              />
            }
          </NavLink>

          <NavLink to="/products">
            {
              <SmallCard
                header="Produkter"
                tileContent={<Icon icon={washMachine} />}
              />
            }
          </NavLink>
        </Row>
      </Col>
    </div>
     );
  }
  else{
      return(
          <Redirect to="/signin"></Redirect>
      );
  }
}
 
export default Dashboard;