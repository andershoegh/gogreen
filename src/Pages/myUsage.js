import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Icon from "../Components/Icon/Icon";
import { Container, Row } from "react-grid-system";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import { Progress } from "antd";
import Carousel from "../Components/Carousel/Carousel";
import "./myUsage.css";
import IndividualGraph from "../Components/IndividualGraph/individualgraph";

class MyUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      greenEnergy: "  ",
      product: "",
      productPercent: 0
    };
  }

  chooseProductFirst = product => {
    const products = [
      "washingMachine",
      "dryer",
      "vacuum",
      "entertainment",
      "dishwasher"
    ];

    this.setState({
      product: products[product]
    });
  };

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (
      oldProps !== newProps &&
      newProps.user.data &&
      newProps.user !== oldProps.user
    ) {
      this.updateGraph();
    }
  }
  componentDidMount() {
    this.chooseProductFirst(0);

    if (this.props.user) {
      this.updateGraph();
    }
  }

  updateGraph = () => {
    const user = this.props.user.data;

    const greenEnergy = (user.totalGreenEnergy / user.totalEnergy) * 100;
    const energy = 100 - greenEnergy;

    this.setState(
      {
        graphData: [greenEnergy.toFixed(0), energy.toFixed(0)],
        greenEnergy: greenEnergy.toFixed(0)
      },
      () => this.handleSlide(0)
    );
  };
  handleSlide = product => {
    const products = [
      "washingMachine",
      "dryer",
      "vacuum",
      "entertainment",
      "dishwasher"
    ];
    const greenEnergy = this.props.user.data.products[products[product]][
      "greenEnergy"
    ];
    const totalEnergy = this.props.user.data.products[products[product]][
      "totalEnergy"
    ];
    this.setState({
      product: products[product],
      productPercent: ((greenEnergy / totalEnergy) * 100).toFixed(0)
    });
  };

  render() {
    const color = this.props.isGreen ? "circleGreen" : "circleRed";
    document.body.style.backgroundImage = ``;

    if (this.props.authUser) {
      return (
        <Container className="upperContainer">
          <div className={`circle ${color}`} />
          <div className="toggle-data">
            <Icon icon={userIcon} />
            <Link to="/community">
              <Icon icon={communityIcon} />
            </Link>
          </div>
          <div className="indi-graph">
            <WideCardSideText
              header="Green Electricity consumption"
              graph={<IndividualGraph graphData={this.state.graphData} />}
              sideText={
                this.state.greenEnergy +
                "% af alt strøm du bruger er grøn energi."
              }
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "120px"
              }}
            >
              <Progress
                type="circle"
                percent={parseInt(this.state.productPercent)}
                width={127}
                className="productCircle"
                showInfo={false}
                strokeColor="#89d09e"
              />
              <p>
                {this.state.product +
                  " er " +
                  this.state.productPercent +
                  "% grøn i gennemsnit"}
              </p>
            </div>
            <Row
              style={{
                justifyContent: "center",
                marginLeft: "-19px"
              }}
            >
              <Carousel handleSlide={this.handleSlide} />
            </Row>
          </div>
        </Container>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default MyUsage;
