import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Icon from "../Components/Icon/Icon";
import { Row, Container } from "react-grid-system";
import H2 from "../Components/H2/H2";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import WideCard from "../Components/WideCard/WideCard";
import { Carousel } from "react-materialize";
import "./pages.scss";

const MyUsage = (props) => {
    if(props.authUser){
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

        <H2>ovn 75% grøn i gennemsnit</H2>
        <Row>
          <Carousel
            width="50px"
            height="50px"
            style={{ width: "50px", height: "50px" }}
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
    }
    else{
        return(
            <Redirect to="/signin"></Redirect>
        );
    }
   
}
 
export default MyUsage;
