import React, { useRef, useLayoutEffect } from "react";

import Chart from "chart.js/auto";

import { IDayForecast } from "../../App";

const LineChart: React.FC<Props> = props => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  useEffect(, [gameInfo.correctAnswer, gameInfo.incorrectAnswer] );
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  useLayoutEffect(() => {
    const chart = new Chart(canvas.current!, config);
  });

  return <canvas ref={canvas}></canvas>;
};

export default LineChart;

interface Props {
  data: IDayForecast[];
}
