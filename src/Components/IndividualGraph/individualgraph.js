import React from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
defaults.global.legend.display = false;

const IndividualGraph = props => {
  // This comp contains dummy data - should be replaced by connection with DB
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [50, 40, 300, 100],
        backgroundColor: [
          "#CFD2CE",
          "#86BC79",
          "#E15555",
          "#2D2930",
          "#6E1616"
        ],
        hoverBackgroundColor: [
          "#CFD2CE",
          "#86BC79",
          "#E15555",
          "#2D2930",
          "#6E1616"
        ]
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
