import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-grid-system";
import { firebase } from "../Utils/Firebase";
import userIcon from "../images/icons8_User_100px_1.png";
import communityIcon from "../images/icons8_People_50px.png";
import Icon from "../Components/Icon/Icon";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import IndividualGraph from "../Components/CommunityGraph/CommunityGraph";
import { Link } from "react-router-dom";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      greenEnergy: ""
    };
    this.updateGraph();
  }

  updateGraph = () => {
    let greenEnergy = 0;
    let totalEnergy = 0;
    firebase.getUsers().then(snapshot => {
      snapshot.forEach(doc => {
        greenEnergy += doc.data().totalGreenEnergy;
        totalEnergy += doc.data().totalEnergy;
      });
      const percentGreenEnergy = ((greenEnergy / totalEnergy) * 100).toFixed(0);
      const percentTotalEnergy = 100 - percentGreenEnergy;
      this.setState({
        graphData: [percentGreenEnergy, percentTotalEnergy],
        greenEnergy: percentGreenEnergy
      });
    });
  };

  render() {
    if (this.props.authUser) {
      return (
        <Container>
          <div className="toggle-data">
            <Link to="/myusage">
              <Icon icon={userIcon} />
            </Link>
            <Icon icon={communityIcon} />
          </div>
          <div>
            <WideCardSideText
              header="Grønt el-forbrug: <Fælleskab>"
              graph={<CommunityGraph graphData={this.state.graphData} />}
              sideText={
                this.state.greenEnergy +
                "% af alt strøm I bruger er grøn energi."
              }
            />
          </div>
          <div>
            <WideCardSideText
              graph={<IndividualGraph graphData={this.state.graphData} />}
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
  }
}

export default Community;
