import React from "react";
import Card from "react-bootstrap/Card";
import { CardActionArea } from "@material-ui/core";
import ExpandedCard from "./ExpandedCard";
import { useState } from "react";

function OneCard(props) {
  const [clickState, setClickState] = useState(false);

  function handleClick() {
    setClickState(!clickState);
  }

  return (
    <div>
      <CardActionArea onClick={handleClick}>
        <Card
          key={props.id}
          className="shadow m-4"
          bg="light"
          text="black"
          style={{ width: "20rem" }}
        >
          <Card.Header as="h5">{props.language}</Card.Header>
          <Card.Body>
            <Card.Text>{props.question}</Card.Text>
            <Card.Text>
              <a href={props.projecturl}>{props.projecturl}</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardActionArea>
      <ExpandedCard
        clickstate={clickState}
        cardprops={props}
        handleclick={handleClick}
      />
    </div>
  );
}

export default OneCard;
