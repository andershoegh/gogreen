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
      greenEnergy: "",
      small: false
    };
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (
      oldProps !== newProps &&
      newProps.user !== undefined &&
      newProps.user !== null &&
      newProps.user !== oldProps.user &&
      newProps.user.data
    ) {
      this.updateGraph();
    }
  }
  componentDidMount() {
    this.setState({ small: this.props.small });
    if (
      this.props.user !== undefined &&
      this.props.user !== null &&
      this.props.user.data !== undefined
    ) {
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
      labels: ["Grøn Energi", "Rød Energi"],
      datasets: [
        {
          data: this.state.graphData,
          backgroundColor: ["#92ba80", "#ed6666"],
          hoverBackgroundColor: ["#92ba80", "#ed6666"]
        }
      ]
    };
    if (this.props.small !== undefined) {
      return (
        <div className="indi-graph">
          <Doughnut
            data={data}
            options={{ maintainAspectRatio: this.props.small }}
          />
        </div>
      );
    } else {
      return (
        <div className="indi-graph">
          <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </div>
      );
    }
  }
}

export default IndividualGraph;
