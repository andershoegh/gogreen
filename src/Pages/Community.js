import React from "react";
import { Row, Container } from "react-grid-system";
import userIcon from "../images/icons8_User_100px_1.png";
import communityIcon from "../images/icons8_People_50px.png";
import Icon from "../Components/Icon/Icon";
import WideCard from "../Components/WideCard/WideCard";
import IndividualGraph from "../Components/CommunityGraph/CommunityGraph";
import { Link } from "react-router-dom";

const Community = () => {
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
          <WideCard
            header="Grønt el-forbrug: <Fælleskab>"
            graph={<IndividualGraph />}
          />
        </Row>
        <Row>
          <WideCard
            graph={<IndividualGraph />}
            header="Bidrag til fællesskabet"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Community;
