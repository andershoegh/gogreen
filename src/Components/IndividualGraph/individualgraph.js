import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import "./individualgraph.scss";
defaults.global.legend.display = false;

class IndividualGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      greenEnergy: "  "
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (
      oldProps !== newProps &&
      newProps.user !== null &&
      newProps.user !== oldProps.user &&
      newProps.user.data
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
      graphData: [greenEnergy.toFixed(0), energy.toFixed(0)]
    });
    if (this.props.setPercentGreenEnergy !== undefined) {
      this.props.setPercentGreenEnergy(greenEnergy.toFixed(0));
    }
  };

  render() {
    const data = {
      labels: ["Grøn", "Rød"],
      datasets: [
        {
          data: this.state.graphData,
          backgroundColor: ["#92ba80", "#ed6666"],
          hoverBackgroundColor: ["#92ba80", "#ed6666"]
        }
      ]
    };
    return (
      <div className="indi-graph">
        <Doughnut data={data} options={{ maintainAspectRatio: true }} />
      </div>
    );
  }
}

export default IndividualGraph;
