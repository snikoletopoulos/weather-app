import styles from "./DayCards.module.css";

import { isToday } from "@/helpers/date.helpers";

import Card from "@/components/UI/Card";
import Icon from "@/components/UI/Icon";

interface Props {
	date: Date;
	humidity: number;
}

const DayCard: React.FC<Props> = ({ humidity, date }) => {
	let title = date.toLocaleString("en-EN", {
		month: "short",
		day: "numeric",
	});

	if (isToday(date)) title = "Today";

	return (
		<Card
			className={`${styles["summary__card"]} ${
				isToday(date) ? styles["summary__card--active"] : ""
			}`}
		>
			<div>{title}</div>
			<Icon icon="10d" />
			<p>Humidity</p>
			<p>{humidity.toFixed(1)}%</p>
		</Card>
	);
};

export default DayCard;
