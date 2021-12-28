import React from "react";

const DetailCard = () => {
  const today = new Date();

  return (
    <section>
      <p>
        {today.toLocaleDateString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <h2></h2>
    </section>
  );
};

export default DetailCard;
