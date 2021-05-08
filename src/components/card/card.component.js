import React from "react";

import { CardContainer, ImageContainer } from "./card.styles.js";
const Card = (props) => {
  console.log("props in card: ", props);
  const { user } = props;

  return (
    <CardContainer>
      <p>
        {user.name.first} {user.name.last}
      </p>
      <ImageContainer src={user.picture.medium} alt={user.name.last} />
    </CardContainer>
  );
};
export default Card;
