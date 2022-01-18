import { Chart } from "react-chartjs-2";
import { IDayForecast } from "../../App";

const LineChart: React.FC<Props> = props => {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return <Chart type="line" data={data} />;
};

export default LineChart;

interface Props {
  data: IDayForecast[];
}
