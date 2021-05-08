import React, { useState, useEffect } from "react";
import Card from "../components/card.component";
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
    <div className="cardList">
      {users?.map((u) => (
        <Card user={u} />
      ))}
    </div>
  );
};
export default CardList;
