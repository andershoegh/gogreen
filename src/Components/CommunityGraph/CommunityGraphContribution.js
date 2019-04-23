import React from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import "./CommunityGraph.css";
defaults.global.legend.display = false;

const CommunityGraphContribution = ({ graphData }) => {
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: graphData,
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

  return (
    <div className="graph">
      <Doughnut data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default CommunityGraphContribution;
