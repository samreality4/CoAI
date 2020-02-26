import React from "react";
import { Modal, Container, Form, Col } from "react-bootstrap";
import { Fab } from "@material-ui/core";

function AddForm() {
  return (
    <Modal show={true} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="Header">Add a new entry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group controlId="formGridIssue">
              <Form.Label>What was the issue?</Form.Label>
              <Form.Control placeholder="Enter a question" />
            </Form.Group>

            <Form.Group controlId="formGridIssue">
              <Form.Label>Keywords</Form.Label>
              <Form.Control placeholder="Keywords" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridUrl">
                <Form.Label>Project Url</Form.Label>
                <Form.Control type="url" placeholder="Enter github url" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control as="select" className="option">
                  <option>Javascript</option>
                  <option>Kotlin</option>
                  <option>Swift</option>
                  <option>Java</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridCode">
              <Form.Label>Code</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Solution Code"
              />
            </Form.Group>

            <Fab variant="primary" type="submit">
              Submit
            </Fab>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Fab>Close</Fab>
      </Modal.Footer>
    </Modal>
  );
}

export default AddForm;
