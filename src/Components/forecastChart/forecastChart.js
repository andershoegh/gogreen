import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  //XAxis,
  //YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import axios from "axios";

const gradientOffset = () => {
  const dataMax = 1000;
  const dataMin = -1000;

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class ForecastChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/64v6ocdx/";
  state = {
    data: []
  };

  render() {
    if (this.state.data.length < 1) {
      axios.get("https://go-greener.herokuapp.com/forecast").then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      });
    }

    return (
      <AreaChart
        width={375}
        height={256}
        data={this.state.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Minutes5DK" hide="true" />
        <YAxis dataKey="CO2Emission" hide="true" />

        <Tooltip />

        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="red" stopOpacity={1} />
            <stop offset={off} stopColor="green" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="CO2Emission"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    );
  }
}
