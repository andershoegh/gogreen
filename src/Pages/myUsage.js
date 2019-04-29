import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Icon from "../Components/Icon/Icon";
import { Container } from "react-grid-system";
import userIcon from "../images/icons8_User_50px.png";
import communityIcon from "../images/icons8_People_100px_1.png";
import WideCardSideText from "../Components/WideCardSideText/WideCardSideText";
import { Progress } from "antd";
import CarouselUsage from "../Components/MyUsageCarousel/CarouselUsage";
import "./myUsage.css";
import IndividualGraph from "../Components/IndividualGraph/individualgraph";

class MyUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greenEnergy: "",
      product: "washingMachine",
      productDanish: "Vaskemaskine",
      productIndex: 0,
      productPercent: 0
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (
      oldProps !== newProps &&
      newProps.user !== undefined &&
      newProps.user.data !== undefined &&
      newProps.user !== oldProps.user
    ) {
      this.handleSlide(this.state.productIndex);
    }
  }
  componentDidMount() {
    if (
      this.props.user !== undefined &&
      this.props.user !== null &&
      this.props.user.data !== undefined
    ) {
      this.handleSlide(this.state.productIndex);
    }
  }

  handleSlide = product => {
    const products = [
      "washingMachine",
      "dryer",
      "vacuum",
      "dishwasher",
      "smartplug"
    ];
    const productsDanish = [
      "Vaskemaskine",
      "Tørretumbler",
      "Støvsuger",
      "Opvasker",
      "Smartplug"
    ];
    const greenEnergy = this.props.user.data.products[products[product]][
      "greenEnergy"
    ];
    const totalEnergy = this.props.user.data.products[products[product]][
      "totalEnergy"
    ];
    if (greenEnergy !== 0) {
      this.setState({
        product: products[product],
        productIndex: product,
        productDanish: productsDanish[product],
        productPercent: ((greenEnergy / totalEnergy) * 100).toFixed(0)
      });
    } else {
      this.setState({
        product: products[product],
        productIndex: product,
        productDanish: productsDanish[product],
        productPercent: 0
      });
    }
  };

  setPercentGreenEnergy = greenEnergy => {
    this.setState({
      greenEnergy
    });
  };

  render() {
    const color = this.props.isGreen ? "circleGreen" : "circleRed";
    document.body.style.backgroundImage = ``;

    if (this.props.authUser) {
      return (
        <Container className="upperContainer">
          <div className={`circle mCircle ${color}`} />
          <div className="toggle-data">
            <Icon icon={userIcon} />
            <Link to="/community">
              <Icon icon={communityIcon} />
            </Link>
          </div>
          <div className="indi-graph">
            <WideCardSideText
              header="Jeres husstands grønne elfordeling"
              graph={
                <IndividualGraph
                  user={this.props.user}
                  setPercentGreenEnergy={this.setPercentGreenEnergy}
                />
              }
              sideText={
                <p>
                  {this.state.greenEnergy +
                    "% af alt den strøm I har brugt er grønt."}
                </p>
              }
            />
            <div className="product-info-wrapper">
              <Progress
                type="circle"
                percent={parseInt(this.state.productPercent)}
                width={168}
                className="productCircle"
                showInfo={false}
                strokeColor="#89d09e"
              />
              <p>
                {this.state.productDanish +
                  " er " +
                  this.state.productPercent +
                  "% grøn i gennemsnit"}
              </p>
            </div>
            <div className="u-caro-wrapper">
              <CarouselUsage handleSlide={this.handleSlide} smartplug={true} />
            </div>
          </div>
        </Container>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default MyUsage;
