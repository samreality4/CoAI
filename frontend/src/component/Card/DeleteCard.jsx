import React from "react";
import { Fab } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import axios from "axios";

function DeleteCard(props) {

  console.log(props.id);
  function handleYesClick() {
    axios
      .post("/api/delete", props.id)
      .then(function(response) {
        console.log(response);
        
      })
      .catch(function(error) {
        console.log(error);
      });

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
