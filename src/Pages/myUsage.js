import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Icon from "../Components/Icon/Icon";
import { Container } from "react-grid-system";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import Carousel from "../Components/Carousel/Carousel";
import "./myUsage.css";
import IndividualGraph from "../Components/IndividualGraph/individualgraph";

class MyUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      greenEnergy: "  ",
      product: "washer",
      productPercent: null
    };
  }

  handleSlide = product => {
    const products = ["washer", "oven", "vacuum"];

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
    if (this.props.user) {
      this.updateGraph();
    }
  }

  updateGraph = () => {
    const user = this.props.user.data;

    const greenEnergy = (user.totalGreenEnergy / user.totalEnergy) * 100;
    const energy = 100 - greenEnergy;

    this.setState({
      graphData: [greenEnergy.toFixed(0), energy.toFixed(0)],
      greenEnergy: greenEnergy.toFixed(0)
    });
  };

  render() {
    if (this.props.authUser) {
      return (
        <Container>
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
          </div>

          <div>
            <Carousel handleSlide={this.handleSlide} />
          </div>
        </Container>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default MyUsage;
