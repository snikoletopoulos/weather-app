import { Chart } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { IDayForecast } from "../../App";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface Props {
	data: IDayForecast[];
}

const LineChart: React.FC<Props> = props => {
	const labels = ["January", "February", "March", "April", "May", "June"];

	const data = {
		labels: labels,
		datasets: [
			{
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [0, 10, 5, 2, 20, 30, 45],
			},
		],
	};

	return <Line data={data} />;
};

export default LineChart;
