import React from "react";
import "./List.css";
import Card from './Card'

function List(props) {
  return (
    <section class='List'>
      <header>{props.header}</header>
      <div class='List-cards'>
        {props.cardIds.map(id => <Card />)}
      </div>
    </section>
  );
}

export default List;
