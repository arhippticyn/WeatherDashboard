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

export default function Graph({ data, labels, city }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `Temperature in ${city}`, 
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
            display: true, 
          },
        },
      },
    });
  }, [data, labels, city]);

  return (
    <div className="graph__container">
      <h2 className="graph__title">Hourly forecast for {city}</h2>
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
