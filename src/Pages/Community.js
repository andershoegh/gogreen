import React from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-grid-system";
import userIcon from "../images/icons8_User_100px_1.png";
import communityIcon from "../images/icons8_People_50px.png";
import Icon from "../Components/Icon/Icon";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import IndividualGraph from "../Components/CommunityGraph/CommunityGraph";
import { Link } from "react-router-dom";
import "./myUsage.css";

const Community = ({ community, authUser, isGreen }) => {
  const color = isGreen ? "circleGreen" : "circleRed";

  if (authUser) {
    document.body.style.backgroundImage = ``;
    return (
      <Container>
        <div className={`circle cCircle ${color}`} />
        <div className="toggle-data">
          <Link to="/myusage">
            <Icon icon={userIcon} />
          </Link>
          <Icon icon={communityIcon} />
        </div>
        <div>
          <WideCardSideText
            header="Grønt el-forbrug: <Fælleskab>"
            graph={<IndividualGraph />}
            sideText="60% af alt strøm I bruger er grøn energi."
          />
        </div>
        <div>
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
        </div>
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Community;
