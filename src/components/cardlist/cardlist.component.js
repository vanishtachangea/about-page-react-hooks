import React, { useState, useEffect } from "react";
import Card from "../card/card.component";
import { CardListContainer } from "./cardlist.styles";

const CardList = (props) => {
  console.log("props in Cardlist", props);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchFunction = async () => {
      let response = await fetch(
        `https://randomuser.me/api/?results=${props.numberCards}`
      );
      let json = await response.json();
      setUsers(json.results);
    };
    fetchFunction();
  }, [props.numberCards]);
  return (
    <CardListContainer>
      {users?.map((u) => (
        <Card user={u} />
      ))}
    </CardListContainer>
  );
};
export default CardList;
