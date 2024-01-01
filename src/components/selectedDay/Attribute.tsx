import styles from "./Attribute.module.css";

interface Props {
	attribute: AttributeInterface;
}

export interface AttributeInterface {
	title: string;
	value: string | number;
}

const Attribute: React.FC<Props> = ({ attribute }) => {
	return (
		<article className={styles.attribute}>
			<p className={styles["attribute__title"]}>{attribute.title}</p>
			<p className={styles["attribute__value"]}>{attribute.value}</p>
		</article>
	);
};

export default Attribute;
