import styles from "./DetailCard.module.css";

import Icon from "@/components/UI/Icon";
import Attribute from "@/components/selectedDay/Attribute";

interface Props {
	forecast: number;
}

const DetailCard: React.FC<Props> = ({ forecast }) => {
	const today = new Date();

	return (
		<section className={styles["details-container"]}>
			<p>
				{today.toLocaleString("en-EN", {
					hour: "numeric",
					minute: "numeric",
					hour12: true,
				})}{" "}
				{today.toLocaleDateString("en-US", {
					weekday: "short",
					year: "numeric",
					month: "short",
					day: "numeric",
				})}
			</p>
			<Icon icon="10d" />
			<h2>{forecast}</h2>
			<h3>Cloudy</h3>
			<div className={styles["attributes-container"]}>
				<Attribute attribute={{ title: "Humidity", value: `45%` }} />
				<Attribute attribute={{ title: "Wind Speed", value: `19.2 km/j` }} />
			</div>
		</section>
	);
};

export default DetailCard;
