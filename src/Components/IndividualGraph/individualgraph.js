import React from "react";
import H1 from "./../H1/H1";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
defaults.global.legend.display = false;

const IndividualGraph = props => {
  // This comp contains dummy data - should be replaced by connection with DB
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [30, 50, 1000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  return (
    <div className="graph">
      <Doughnut
        data={data}
        width={89}
        height={89}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default IndividualGraph;
