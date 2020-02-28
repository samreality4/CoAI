import React from "react";
import { Modal, Container, Form, Col } from "react-bootstrap";
import { Fab } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

function AddForm(props) {

    //TODO need to change the state when Fab is click in parent
   
    console.log(props.clickstate);
  const [clickState, setClickState] = useState(false);

  if(props.clickstate===true){

    setClickState(true);
  } 
  
  const [form, setForm] = useState({
    question: String,
    keyword: String,
    projectUrl: String,
    language: String,
    code: String
  });

  function onChange(event) {
    const { name, value } = event.target;
    setForm(preVal => {
      return { ...preVal, [name]: value };
    });
  }

  function onSubmit () {

    axios.post("/addform", form).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });;
    setClickState(false);

  }

  function onClick() {
    setClickState(false);
  }

  return (
    <Modal show={clickState} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="Header">Add a new entry</Modal.Title>
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
              onClick={onSubmit}
              variant="primary"
              color="primary"
          
            >
              Submit
            </Fab>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Fab color="secondary" onClick={onClick}>
          Close
        </Fab>
      </Modal.Footer>
    </Modal>
  );
}

export default AddForm;
