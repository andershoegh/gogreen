import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import userIcon from "../images/icons8_User_100px_1.png";
import communityIcon from "../images/icons8_People_50px.png";
import Icon from "../Components/Icon/Icon";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import { Link } from "react-router-dom";
import CommunityGraph from "../Components/CommunityGraph/CommunityGraph";
import { Progress } from "antd";
import "./Community.css";
import prizeIcon from "../images/prize.svg";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalGraphData: [],
      greenEnergy: "",
      whoIsBestGraphData: [],
      whoIsBestNames: []
      goal: 80 //sets the goal for the achievement bar
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (
      oldProps !== newProps &&
      newProps.community &&
      newProps.community !== oldProps.community
    ) {
      if (this.props.community) {
        this.updateGraph();
      }
    }
  }
  componentDidMount() {
    if (this.props.community) {
      this.updateGraph();
    }
  }
  updateGraph = () => {
    this.totalGraph();
    this.whoIsBestGraph();
  };
  totalGraph = () => {
    let greenEnergy = 0;
    let totalEnergy = 0;
    this.props.community.forEach(user => {
      greenEnergy += user.data.totalGreenEnergy;
      totalEnergy += user.data.totalEnergy;
    });
    const percentGreenEnergy = ((greenEnergy / totalEnergy) * 100).toFixed(0);
    const percentTotalEnergy = 100 - percentGreenEnergy;
    this.setState({
      totalGraphData: [percentGreenEnergy, percentTotalEnergy],
      greenEnergy: percentGreenEnergy
    });
  };

  whoIsBestGraph = () => {
    let whoIsBestGraphDataRaw = [];
    let whoIsBestNames = [];
    let whoIsBestGraphData = [];

    this.props.community.forEach(user => {
      const energyPercent = (
        (user.data.totalGreenEnergy / user.data.totalEnergy) *
        100
      ).toFixed(0);
      let tempData = [...whoIsBestGraphDataRaw, energyPercent];
      let tempNames = [...whoIsBestNames, user.data.firstName];

      whoIsBestGraphDataRaw = tempData;
      whoIsBestNames = tempNames;
    });

    let sum = 0;
    whoIsBestGraphDataRaw.forEach(value => {
      sum += parseInt(value);
    });

    if (sum) {
      whoIsBestGraphDataRaw.forEach(value => {
        const dataPercent = ((value / sum) * 100).toFixed(0);
        let tempData = [...whoIsBestGraphData, dataPercent];
        whoIsBestGraphData = tempData;
      });
    }
    this.setState({
      whoIsBestNames,
      whoIsBestGraphData
    });
  };

  componentWillReceiveProps() {}
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
              graph={<CommunityGraph graphData={this.state.totalGraphData} />}
              sideText={
                this.state.greenEnergy +
                "% af alt strøm I bruger er grøn energi."
              }
            />
          </div>
          <div>
            <WideCardSideText
              graph={
                <CommunityGraph graphData={this.state.whoIsBestGraphData} />
              }
              header="Bidrag til fællesskabet"
              sideText={
                <ul>
                  <li>
                    {this.state.whoIsBestNames[0] +
                      " " +
                      this.state.whoIsBestGraphData[0] +
                      "%"}
                  </li>
                  <li>
                    {this.state.whoIsBestNames[1] +
                      " " +
                      this.state.whoIsBestGraphData[1] +
                      "%"}
                  </li>
                  <li>
                    {this.state.whoIsBestNames[2] +
                      " " +
                      this.state.whoIsBestGraphData[2] +
                      "%"}
                  </li>
                </ul>
              }
            />
          </div>
          <p>Ugens fællesmål: {this.state.goal}% samlet grøn strøm</p>
          <Row className="progressRow">
            <Col xs={2}>
              <Icon class="prizeIcon" icon={prizeIcon} />
            </Col>
            <Col xs={8}>
              <Progress
                percent={(
                  (this.state.greenEnergy / this.state.goal) *
                  100
                ).toFixed(0)}
                strokeWidth={12}
                status="active"
                strokeColor="#6ecd96"
              />
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default Community;
