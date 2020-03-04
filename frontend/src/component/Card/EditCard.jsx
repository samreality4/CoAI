import React from "react";
import { Modal, Container, Form, Col } from "react-bootstrap";
import { Fab } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";


function EditForm(props) {


  const [form, setForm] = useState({
    id:props.cardprops.id,
    question: props.cardprops.question,
    keyword: props.cardprops.keyword,
    projectUrl: props.cardprops.projecturl,
    language: props.cardprops.language,
    code: props.cardprops.code
  });

  function onChange(event) {
    const { name, value } = event.target;
    setForm(preVal => {
      return { ...preVal, [name]: value };
    });
  }

  function onSave() {
    axios
      .post("/api/edit", form)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    props.handleclick();
  }


  return (
    <Modal show={props.clickstate} size="lg">
      <Modal.Header>
        <Modal.Title className="header">Edit Entry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form action="/" method="post">
            <Form.Group controlId="formGridIssue">
              <Form.Label>What was the issue?</Form.Label>

              <Form.Control
                onChange={onChange}
                name="question"
                value={form.question}
                placeholder="Enter a question"
              />
            </Form.Group>

            <Form.Group controlId="formGridIssue">
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                onChange={onChange}
                name="keyword"
                value={form.keyword}
                placeholder="Keywords"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridUrl">
                <Form.Label>Project Url</Form.Label>

                <Form.Control
                  onChange={onChange}
                  name="projectUrl"
                  value={form.projectUrl}
                  type="url"
                  placeholder="Enter github url"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="language"
                  value={form.language}
                  as="select"
                  className="option"
                >
                  <option disabled selected value>
                    -- select an option --
                  </option>
                  <option>None</option>
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
                onChange={onChange}
                name="code"
                value={form.code}
                as="textarea"
                rows="5"
                placeholder="Solution Code"
              />
            </Form.Group>

            <Fab
              onClick={onSave}
              variant="primary"
              color="primary"
            >
             Save
            </Fab>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Fab color="secondary" onClick={props.handleclick}>
          Close
        </Fab>
      </Modal.Footer>
    </Modal>
  );
}

export default EditForm;
