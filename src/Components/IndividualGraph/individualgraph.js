import React from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import "./individualgraph.scss";
defaults.global.legend.display = false;

const IndividualGraph = ({ graphData }) => {
  // This comp contains dummy data - should be replaced by connection with DB

  const data = {
    labels: ["Rød", "Grøn", "Yellow"],
    datasets: [
      {
        data: graphData,
        backgroundColor: [
          "#ed6666",
          "#92ba80",
          "#E15555",
          "#2D2930",
          "#6E1616"
        ],
        hoverBackgroundColor: [
          "#ed6666",
          "#92ba80",
          "#E15555",
          "#2D2930",
          "#6E1616"
        ]
      }
    ]
  };

  return (
    <div className="indi-graph">
      <Doughnut data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
};

export default IndividualGraph;
