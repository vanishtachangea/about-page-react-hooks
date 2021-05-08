import React from "react";
import CardList from "./cardlist.component";
const About = (props) => {
  const numberCards = 12;
  return (
    <div>
      <h1>About Page</h1>
      <CardList numberCards={numberCards} />
    </div>
  );
};
export default About;
