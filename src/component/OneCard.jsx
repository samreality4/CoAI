import React from "react";
import Card from "react-bootstrap/Card";

function OneCard() {
  return (
    <Card className="shadow" bg="light" text="black" style={{ width: "18rem" }}>
      <Card.Header className="header">Javascript</Card.Header>
      <Card.Body>
        <Card.Text>What was the question?</Card.Text>
        <Card.Text><a href="https://github.com/samreality4/CoAI">https://github.com/samreality4/CoAI</a></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OneCard;
