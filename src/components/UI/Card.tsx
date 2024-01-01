import styles from "./Card.module.css";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
	const { children, className: externalClasses, ...cardAttributes } = props;
	return (
		<div className={`${styles["card"]} ${externalClasses}`} {...cardAttributes}>
			{children}
		</div>
	);
};

export default Card;
