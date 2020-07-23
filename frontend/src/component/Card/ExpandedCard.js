import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditCard from "./EditCard";
import DeleteCard from "./DeleteCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      <Modal size="xl" show={props.clickState} onHide={props.handleClick}>
        <Modal.Header closeButton>
          <h1>{props.cardProps.codeLanguage}</h1>
        </Modal.Header>

        <Card
          id={props.cardProps.id}
          className="shadow mx-auto col-auto"
          style={{ width: "80rem" }}
        >
          <Card.Body>
            <Card.Title>Question</Card.Title>
            <Card.Text>{props.cardProps.question}</Card.Text>
            <Card.Title>Github Link</Card.Title>
            <Card.Text>
              <a
                href={props.cardProps.projectUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {props.cardProps.projectUrl}
              </a>
            </Card.Text>
            <Card.Title>Keywords</Card.Title>
            <Card.Text>{props.cardProps.keyword}</Card.Text>
            <Card.Title>Solution Code</Card.Title>
            <SyntaxHighlighter
              language={props.cardProps.codeLanguage}
              style={atomDark}
            >
              {props.cardProps.code}
            </SyntaxHighlighter>
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
        handleEditClick={handleEditClick}
        extendedCardClick={props.handleClick}
        editState={editState}
        cardProps={props.cardProps}
      />

      <DeleteCard
        handleDeleteClick={handleDeleteClick}
        deleteState={deleteState}
        id={props.cardProps.id}
        extendedCardClick={props.handleClick}
      />
    </div>
  );
}

export default ExpandedCard;
