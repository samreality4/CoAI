import React from "react";
import Card from "react-bootstrap/Card";

function OneCard(props) {
  return (
    <Card
      className="shadow m-3"
      bg="light"
      text="black"
      style={{ width: "18rem" }}
    >
      <Card.Header as="h5">{props.language}</Card.Header>
      <Card.Body>
        <Card.Text>{props.question}</Card.Text>
        <Card.Text>
          <a href={props.projecturl}>{props.projecturl}</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OneCard;
