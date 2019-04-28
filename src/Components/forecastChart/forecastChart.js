import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import axios from "axios";

export default class ForecastChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/64v6ocdx/";
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, data: [], greenLimitPercent: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleClick = () => {
    if (
      document.getElementsByClassName("recharts-tooltip-item-value")[0] !==
        undefined &&
      document.getElementsByClassName("recharts-tooltip-label")[0] !== undefined
    ) {
      let CO2Emission = document.getElementsByClassName(
        "recharts-tooltip-item-value"
      )[0].textContent;
      let timePoint = document.getElementsByClassName(
        "recharts-tooltip-label"
      )[0].textContent;

      this.props.giveData(this.state.data, CO2Emission, timePoint);
    }
  };

  handleTouch = () => {
    if (
      document.getElementsByClassName("recharts-tooltip-item-value")[0] !==
        undefined &&
      document.getElementsByClassName("recharts-tooltip-label")[0] !== undefined
    ) {
      let CO2Emission = document.getElementsByClassName(
        "recharts-tooltip-item-value"
      )[0].textContent;

      let timePoint = document.getElementsByClassName(
        "recharts-tooltip-label"
      )[0].textContent;

      this.props.giveData(this.state.data, CO2Emission, timePoint);
    }
  };

  render() {
    if (this.state.data.length < 1) {
      axios
        .get(
          /*"https://go-greener.herokuapp.com/forecast"*/ "http://localhost:4000/forecast"
        )
        .then(res => {
          this.setState({
            data: res.data.emission,
            greenLimitPercent: parseInt(res.data.greenLimitPercent)
          });
          this.props.giveData(
            res.data.emission,
            res.data.emission[0].CO2Emission,
            res.data.emission[0].Minutes5DK
          );
        });
    }
    const gradientOffset = () => {
      // const dataMax = Math.max(...this.state.data.map(i => i.CO2Emission));
      // const dataMin = Math.min(...this.state.data.map(i => i.CO2Emission));

      const dataMax = 100;
      const dataMin = -100;

      if (dataMax <= 0) {
        return 0;
      }
      if (dataMin >= 0) {
        return 1;
      }

      //return dataMax / (dataMax - dataMin);
      return 1 - this.state.greenLimitPercent / 100;
    };

    const off = gradientOffset();

    return (
      <div onTouchMove={this.handleTouch} onClick={this.handleClick}>
        <AreaChart
          width={this.state.width}
          height={300}
          data={this.state.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Minutes5DK" hide={true} />
          <YAxis dataKey="CO2Emission" hide={true} />

          <Tooltip />

          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="CO2Emission"
            stroke="#000"
            fill="url(#splitColor)"
          />
        </AreaChart>
      </div>
    );
  }
}
