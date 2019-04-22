import React from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import "./CommunityGraph.css";
defaults.global.legend.display = false;

const CommunityGraph = ({ graphData }) => {
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: graphData,
        backgroundColor: [
          "#ed6666",
          "#92ba80",
          "#2D2930",
          "#E15555",
          "#6E1616"
        ],
        hoverBackgroundColor: [
          "#CFD2CE",
          "#86BC79",
          "#2D2930",
          "#E15555",
          "#6E1616"
        ]
      }
    ]
  };

  return (
    <div className="graph">
      <Doughnut data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default CommunityGraph;
