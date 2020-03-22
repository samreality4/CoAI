import React from "react";
import Card from "react-bootstrap/Card";
import { CardActionArea } from "@material-ui/core";
import ExpandedCard from "./ExpandedCard";
import { useState } from "react";
import Grow from "@material-ui/core/Grow";

function OneCard(props) {
  const [clickState, setClickState] = useState(false);

  function handleClick() {
    setClickState(!clickState);
  }

  return (
    <div>
      <Grow in={true} {...{ timeout: 1000 }}>
        <CardActionArea onClick={handleClick}>
          <Card
            key={props.id}
            className="shadow m-4"
            bg="light"
            text="black"
            style={{ width: "20rem" }}
          >
            <Card.Header as="h5">{props.codeLanguage}</Card.Header>
            <Card.Body>
              <Card.Text>{props.question}</Card.Text>
              <Card.Text>
                <a
                  href={props.projectUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {props.projectUrl}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardActionArea>
      </Grow>
      <ExpandedCard
        clickState={clickState}
        cardProps={props}
        handleClick={handleClick}
      />
    </div>
  );
}

export default OneCard;
