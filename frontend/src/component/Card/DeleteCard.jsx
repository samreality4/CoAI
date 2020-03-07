import React from "react";
import { Fab } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { resetData } from "../../actions";

function DeleteCard(props) {
  function handleYesClick() {
    console.log(props.id);
    axios
      .post("/api/delete", { id: props.id })
      .then(function(response) {
        props.resetData();
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
function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, { resetData })(DeleteCard);
