import React from "react";
import Card from "react-bootstrap/Card";
import { CardActionArea } from '@material-ui/core';
import ExpandedCard from "./ExpandedCard";
import { useState } from "react";

function OneCard(props) {

const [clickState, setClickState] = useState(false);

  function showDetail(){
    setClickState(!clickState);

  }

  return (
    <Card
      key={props.id}
      className="shadow m-3"
      bg="light"
      text="black"
      style={{ width: "18rem" }}
    >
      <Card.Header as="h5">{props.language}</Card.Header>
      <CardActionArea onClick={showDetail}>
      <Card.Body>
        <Card.Text>{props.question}</Card.Text>
        <Card.Text>
          <a href={props.projecturl}>{props.projecturl}</a>
        </Card.Text>
      </Card.Body>
       </CardActionArea>
    </Card>
  );
}

export default OneCard;
