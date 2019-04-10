import React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Container } from "react-grid-system";
import userIcon from "../images/icons8_User_100px_1.png";
import communityIcon from "../images/icons8_People_50px.png";
import Icon from "../Components/Icon/Icon";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import IndividualGraph from "../Components/CommunityGraph/CommunityGraph";
import { Link } from "react-router-dom";

const Community = (props) => {
    if(props.authUser){
        return ( 
            <div>
      <Container>
        <Row style={{ justifyContent: "space-evenly" }}>
          <Link to="/myusage">
            <Icon icon={userIcon} />
          </Link>
          <Icon icon={communityIcon} />
        </Row>
        <Row>
          <WideCardSideText
            header="Grønt el-forbrug: <Fælleskab>"
            graph={<IndividualGraph />}
            sideText={<p>60% af alt strøm I bruger er grøn energi.</p>}
          />
        </Row>
        <Row>
          <WideCardSideText
            graph={<IndividualGraph />}
            header="Bidrag til fællesskabet"
            sideText={
              <ul>
                <li>Fred 30%</li>
                <li>Anders 25%</li>
                <li>Emil 20%</li>
                <li>Andreas 15%</li>
                <li>Lasse 10%</li>
              </ul>
            }
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
 
export default Community;