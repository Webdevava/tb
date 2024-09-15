// src/WinRateChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WinRateChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Win",
        data: [2, 2, 3, 2, 2],
        backgroundColor: "rgba(14, 217, 145, 1)",
        borderColor: "rgba(14, 217, 145, 1)",
        borderWidth: 1,
        stack: "Stack 0",
      },
      {
        label: "Loss",
        data: [-1, -3, -1, -1, -1],
        backgroundColor: "rgba(244, 76, 96, 1)",
        borderColor: "rgba(244, 76, 96, 1)",
        borderWidth: 1,
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: function (value) {
            return Math.abs(value);
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div style={{ width: "100%", marginBottom: 24 }}>
      <Card style={{ backgroundColor: "rgba(250, 247, 255, 1)" }}>
        <Card.Body>
          <Card.Title
            style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "500" }}
          >
            Win Rate
          </Card.Title>
          <Bar data={data} options={options} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default WinRateChart;
