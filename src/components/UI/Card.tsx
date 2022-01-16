import React from "react";
import styles from "./Card.module.css";

const Card: React.FC<Props> = props => {
  const { children, className: externalClasses, ...cardAttributes } = props;
  return (
    <div className={`${styles["card"]} ${externalClasses}`} {...cardAttributes}>
      {children}
    </div>
  );
};

export default Card;

interface Props {
  children: React.ReactNode;
  [x: string]: any;
}
