import React from "react";
import Card from "react-bootstrap/Card";

function ExpandedCard() {
  return (
    <Card className="shadow mx-auto col-auto" style={{ width: "50rem" }}>
      <Card.Body>

 <Card.Title>Issue</Card.Title>
    <Card.Text>
    How to add something?
    </Card.Text>
    <Card.Title>Github Link</Card.Title>
    <Card.Text>
      www.github.com
    </Card.Text>
    <Card.Title>Keywords</Card.Title>
    <Card.Text>
      For loop
    </Card.Text>
    <Card.Title>Solution Code</Card.Title>
    <Card.Text>

    </Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Body>
    </Card>
  );
}

export default ExpandedCard;
