import React from "react";
import Card from "react-bootstrap/Card";
import { Modal } from "react-bootstrap";
import { Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "react-bootstrap/Button";
import EditIcon from "@material-ui/icons/Edit";
import EditCard from "./EditCard";
import { useState } from "react";
import DeleteCard from "./DeleteCard";

function ExpandedCard(props) {
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  function handleEditClick() {
    setEditState(!editState);
  }

  function handleDeleteClick() {
    setDeleteState(!deleteState);
  }

  return (
    <div>
      <Modal show={props.clickstate} onHide={props.handleclick}>
        <Modal.Header closeButton>
          {" "}
          <h1>{props.cardprops.language}</h1>
        </Modal.Header>
        <Card
          id={props.cardprops.id}
          className="shadow mx-auto col-auto"
          style={{ width: "50rem" }}
        >
          <Card.Body>
            <Card.Title>Question</Card.Title>
            <Card.Text>{props.cardprops.question}</Card.Text>
            <Card.Title>Github Link</Card.Title>
            <Card.Text>{props.cardprops.projecturl}</Card.Text>
            <Card.Title>Keywords</Card.Title>
            <Card.Text>{props.cardprops.keyword}</Card.Text>
            <Card.Title>Solution Code</Card.Title>
            <Card.Text></Card.Text>
            {props.cardprops.code}
          </Card.Body>
        </Card>
        <Modal.Footer className="container d-flex p-1">
          <Fab className="mr-4" onClick={handleEditClick} color="primary">
            <EditIcon />
          </Fab>
          <Fab color="secondary">
            <DeleteIcon onClick={handleDeleteClick} />
          </Fab>
        </Modal.Footer>
      </Modal>
      
      <EditCard
        handleclick={handleEditClick}
        clickstate={editState}
        cardprops={props.cardprops}
      />

      <DeleteCard
        handleclick={handleDeleteClick}
        clickstate={deleteState}
        id={props.cardprops.id}
        extendedcardclick={props.handleclick}
      />
    </div>
  );
}

export default ExpandedCard;
