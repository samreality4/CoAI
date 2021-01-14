import React from "react";
import { Fab } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { resetData } from "../../redux/actions";

function DeleteCard({
  id,
  resetData,
  handleDeleteClick,
  extendedCardClick,
  deleteState,
}) {
  function handleYesClick() {
    axios
      .post("/api/delete", { id: id })
      .then(() => {
        resetData();
      })
      .catch((error) => {
        console.log(error);
      });
    handleDeleteClick();
    extendedCardClick();
  }

  return (
    <Modal show={deleteState}>
      <Modal.Header>
        <Modal.Title>Delete confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>

      <Modal.Footer className="p-1">
        <Fab onClick={handleDeleteClick} className="mr-4">
          No
        </Fab>
        <Fab onClick={handleYesClick} color="secondary">
          Yes
        </Fab>
      </Modal.Footer>
    </Modal>
  );
}
function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, {resetData} )(DeleteCard);
