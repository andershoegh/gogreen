import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import "./CommunityGraph.css";
defaults.global.legend.display = false;

class CommunityGraphContribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      graphNames: []
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
    let graphDataRaw = [];
    let graphNames = [];
    let graphData = [];

    this.props.community.forEach(user => {
      const energyPercent = (
        (user.data.totalGreenEnergy / user.data.totalEnergy) *
        100
      ).toFixed(0);
      let tempData = [...graphDataRaw, energyPercent];
      let tempNames = [...graphNames, user.data.firstName];

      graphDataRaw = tempData;
      graphNames = tempNames;
    });

    let sum = 0;
    graphDataRaw.forEach(value => {
      sum += parseInt(value);
    });

    if (sum) {
      graphDataRaw.forEach(value => {
        const dataPercent = ((value / sum) * 100).toFixed(0);
        const tempData = [...graphData, dataPercent];
        graphData = tempData;
      });
    }

    this.setState({
      graphData,
      graphNames
    });

    if (this.props.setGraphDataAndNames !== undefined) {
      this.props.setGraphDataAndNames(graphData, graphNames);
    }
  };
  render() {
    const data = {
      labels: [
        this.state.graphNames[0],
        this.state.graphNames[1],
        this.state.graphNames[2]
      ],
      datasets: [
        {
          data: this.state.graphData,
          backgroundColor: [
            "#283593",
            "#FF8A65",
            "#263238",
            "#E15555",
            "#6E1616"
          ],
          hoverBackgroundColor: [
            "#283593",
            "#FF8A65",
            "#263238",
            "#E15555",
            "#6E1616"
          ]
        }
      ]
    };

    if (this.props.small !== undefined) {
      return (
        <div className="graph">
          <Doughnut
            data={data}
            options={{ maintainAspectRatio: this.props.small }}
          />
        </div>
      );
    } else {
      return (
        <div className="graph">
          <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </div>
      );
    }
  }
}

export default CommunityGraphContribution;
