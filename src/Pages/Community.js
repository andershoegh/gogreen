import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-grid-system";
import userIcon from "../images/icons8_User_100px_1.png";
import communityIcon from "../images/icons8_People_50px.png";
import Icon from "../Components/Icon/Icon";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import { Link } from "react-router-dom";
import "./myUsage.css";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";
import CommunityGraphContribution from "../Components/CommunityGraph/CommunityGraphContribution";
import { Progress } from "antd";
import "./Community.css";
import prizeIcon from "../images/prize.svg";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whoIsBestGraphData: [],
      graphNames: [],
      goal: 80 //sets the goal for the achievement bar
    };
  }

  setGraphDataAndNames = (graphData, graphNames) => {
    this.setState({
      whoIsBestGraphData: graphData,
      graphNames
    });
  };

  setPercentGreenEnergy = percentGreenEnergy => {
    this.setState({
      greenEnergy: percentGreenEnergy
    });
  };

  render() {
    const color = this.props.isGreen ? "circleGreen" : "circleRed";
    document.body.style.backgroundImage = ``;

    if (this.props.authUser) {
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
              header="Grønt el-forbrug:"
              graph={
                <CommunityGraph
                  community={this.props.community}
                  setPercentGreenEnergy={this.setPercentGreenEnergy}
                />
              }
              sideText={
                this.state.greenEnergy +
                "% af alt strøm I bruger er grøn energi."
              }
            />
          </div>
          <div>
            <WideCardSideText
              graph={
                <CommunityGraphContribution
                  community={this.props.community}
                  setGraphDataAndNames={this.setGraphDataAndNames}
                />
              }
              header="Bidrag til fællesskabet"
              sideText={
                <ul>
                  <li style={{ color: "#283593" }}>
                    {this.state.graphNames[0] +
                      " " +
                      this.state.whoIsBestGraphData[0] +
                      "%"}
                  </li>
                  <li style={{ color: "#FF8A65" }}>
                    {this.state.graphNames[1] +
                      " " +
                      this.state.whoIsBestGraphData[1] +
                      "%"}
                  </li>
                  <li style={{ color: "#263238" }}>
                    {this.state.graphNames[2] +
                      " " +
                      this.state.whoIsBestGraphData[2] +
                      "%"}
                  </li>
                </ul>
              }
            />
          </div>
          <div className="achieve-wrapper">
            <p>Ugens fællesmål: {this.state.goal}% samlet grøn strøm</p>
            <div className="progressRow">
              <div className="prizeIcon">
                <img className="img-wrapper" src={prizeIcon} alt="" />
              </div>
              <div className="prgbar">
                <Progress
                  percent={parseInt(
                    ((this.state.greenEnergy / this.state.goal) * 100).toFixed(
                      0
                    )
                  )}
                  strokeWidth={12}
                  status="active"
                  strokeColor="#6ecd96"
                  showInfo={false}
                />
              </div>
            </div>
          </div>
        </Container>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default Community;
