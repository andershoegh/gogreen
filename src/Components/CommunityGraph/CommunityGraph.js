import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import "./CommunityGraph.css";
defaults.global.legend.display = false;

class CommunityGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalGraphData: []
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
        this.totalGraph();
      }
    }
  }
  componentDidMount() {
    if (this.props.community) {
      this.totalGraph();
    }
  }

  totalGraph = () => {
    let greenEnergy = 0;
    let totalEnergy = 0;
    this.props.community.forEach(user => {
      greenEnergy += user.data.totalGreenEnergy;
      totalEnergy += user.data.totalEnergy;
    });
    const percentGreenEnergy = Math.round((greenEnergy / totalEnergy) * 100);
    const percentTotalEnergy = 100 - percentGreenEnergy;
    this.setState({
      totalGraphData: [percentGreenEnergy, percentTotalEnergy]
    });

    if (this.props.setPercentGreenEnergy !== undefined) {
      this.props.setPercentGreenEnergy(percentGreenEnergy);
    }
  };

  render() {
    const data = {
      labels: ["Green", "Red"],
      datasets: [
        {
          data: this.state.totalGraphData,
          backgroundColor: ["#92ba80", "#ed6666"],
          hoverBackgroundColor: ["#92ba80", "#ed6666"]
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

export default CommunityGraph;
