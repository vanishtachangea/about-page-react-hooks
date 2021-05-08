import React from "react";
import "../index.css";
const Card = (props) => {
  console.log("props in card: ", props);
  const { user } = props;

  return (
    <div className="card shadow p-3 mb-5 bg-pink rounded">
      <p>
        {user.name.first} {user.name.last}
      </p>
      <img
        className="aboutImage"
        src={user.picture.medium}
        alt={user.name.last}
      />
    </div>
  );
};
export default Card;
