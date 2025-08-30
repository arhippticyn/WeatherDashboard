import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

Chart.defaults.font = {
  family: "Montserrat, sans-serif",
  weight: 500,
};

if (window.innerWidth >= 1440) {
  Chart.defaults.font.size = 11;
} else {
  Chart.defaults.font.size = 10;
}

Chart.defaults.color = "rgba(0, 0, 0, 1)";

export default function Graph({ data }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: [
          "",
          "11 pm",
          "12 pm",
          "1 am",
          "2 am",
          "3 am",
          "4 am",
          "5 am",
          "6 am",
          "7 am",
          "8 am",
          "9 am",
          "10 am",
          "11 am",
          "12 am",
          "1 pm",
          "2 pm",
          "3pm",
          "4 pm",
          "5 pm",
          "6 pm",
          "",
        ],
        datasets: [
          {
            backgroundColor: "rgba(255, 179, 108, 0.3)",
            borderColor: "rgba(255, 179, 108, 1)",
            borderWidth: 3,
            tension: 0.3,
            data: data,
            pointRadius: 0,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            position: "top",

            ticks: {
              align: "center",
            },
          },

          y: {
            offset: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, [data]);

  return (
    <div className="graph__container">
      <h2 className="graph__title">Hourly forecast</h2>
      <div className="graph" width={3000}>
        <canvas
          id="tempGraph"
          ref={canvasRef}
          className="graph__canvas"
          width={0}
        ></canvas>
      </div>
    </div>
  );
}
