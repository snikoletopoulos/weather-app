import styles from "./DayCards.module.css";

import { ICountryForecast } from "@/types/api-types";
import { IDayForecast } from "@/App";
import { isToday } from "@/helpers/date.helpers";

import DayCard from "@/components/detailArea/DayCard";

interface Props {
	forecasts: IDayForecast[];
}

const DayCards: React.FC<Props> = ({ forecasts }) => (
	<div className={`${styles["summary"]}`}>
		{forecasts.map((forecast: IDayForecast) => {
			return (
				<DayCard
					key={`${forecast.date.getMonth()}-${forecast.date.getDate()}`}
					date={new Date()}
					humidity={forecast.humidity}
				/>
			);
		})}
		<DayCard date={new Date()} humidity={23} />
		<DayCard date={new Date()} humidity={23} />
		<DayCard date={new Date()} humidity={23} />
		<DayCard date={new Date()} humidity={23} />
		<DayCard date={new Date()} humidity={23} />
	</div>
);

export default DayCards;
