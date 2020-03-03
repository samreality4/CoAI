import React from "react";
import { Fab } from "@material-ui/core";
import { Modal } from "react-bootstrap";

function DeleteCard(props) {
  function handleYesClick() {
    props.handleclick();

    props.extendedcardclick();
  }

  return (
    <Modal show={props.clickstate}>
      <Modal.Header>
        <Modal.Title>Delete confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>

      <Modal.Footer className="p-1">
        <Fab onClick={props.handleclick} className="mr-4">
          No
        </Fab>
        <Fab onClick={handleYesClick} color="secondary">
          Yes
        </Fab>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteCard;
