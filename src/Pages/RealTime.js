import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-grid-system";
import ForecastChart from "../Components/forecastChart/forecastChart";
import "./RealTime.css";

class RealTime extends Component {
  state = {
    data: [],
    hexagonInfo: 0,
    timePoint: ""
  };

  getData = (data, hexagonInfo, timePoint) => {
    this.setState({ data, hexagonInfo, timePoint });
  };

  render() {
    const color = this.props.isGreen ? "circleGreen" : "circleRed";
    if (this.props.authUser) {
      document.body.style.backgroundImage = ``;
      return (
        <Container className="containerClass">
          <div className={`circle ${color} realtimeCircle`} />
          <div className="hexaWhite">
            <p>{this.state.hexagonInfo}%</p>
          </div>
          <div className="forecastText">
            <p>Grøn el på tidspunktet {this.state.timePoint}</p>
          </div>
          <div className="forecastChart">
            <ForecastChart className="forecastChart" giveData={this.getData} />
          </div>
        </Container>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default RealTime;
