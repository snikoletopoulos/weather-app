import React from "react";

const Icon = (props: Props) => {
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt=""
      />
    </div>
  );
};

export default Icon;

interface Props {
  icon: string;
}
