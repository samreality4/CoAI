import React from "react";
import { Modal, Container, Form, Col } from "react-bootstrap";
import { Fab } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { resetData } from "../../redux/actions";

function EditCard(props) {
  const [form, setForm] = useState({
    id: props.cardProps.id,
    question: props.cardProps.question,
    keyword: props.cardProps.keyword,
    projectUrl: props.cardProps.projectUrl,
    codeLanguage: props.cardProps.codeLanguage,
    code: props.cardProps.code
  });

  function onChange(event) {
    const { name, value } = event.target;
    setForm(preVal => {
      return { ...preVal, [name]: value };
    });
  }

  function onSave() {
    axios
      .put("/api/edit", form)
      .then(() => {
        props.resetData();
      })
      .catch((error) => {
        console.log(error);
      });
    props.handleEditClick();
    props.extendedCardClick();
  }

  return (
    <Modal show={props.editState} size="lg">
      <Modal.Header>
        <Modal.Title className="header">Edit Entry</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>What was the issue?</Form.Label>
              <Form.Control
                onChange={onChange}
                name="question"
                value={form.question}
                placeholder="Enter a question"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                onChange={onChange}
                name="keyword"
                value={form.keyword}
                placeholder="Keywords"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group className="col-6">
                <Form.Label>Project Url</Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="projectUrl"
                  value={form.projectUrl}
                  type="url"
                  placeholder="Enter github url"
                />
              </Form.Group>

              <Form.Group className="col-6">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="codeLanguage"
                  value={form.codeLanguage}
                  as="select"
                  className="option"
                >
                  <option disabled selected value>
                    -- select an option --
                  </option>
                  <option>none</option>
                  <option>javascript</option>
                  <option>kotlin</option>
                  <option>swift</option>
                  <option>java</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group>
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

            <Fab onClick={onSave} variant="primary" color="primary">
              Save
            </Fab>
          </Form>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Fab color="secondary" onClick={props.handleEditClick}>
          Close
        </Fab>
      </Modal.Footer>
    </Modal>
  );
}
function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, { resetData })(EditCard);
