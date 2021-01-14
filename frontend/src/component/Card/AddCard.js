import React, {useState} from "react";
import { Modal, Container, Form} from "react-bootstrap";
import { Fab } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";
import { resetData } from "../../redux/actions";

function AddCard({handleAddClick, addState, resetData}) {
  const [form, setForm] = useState({
    question: String,
    keyword: String,
    projectUrl: String,
    codeLanguage: String,
    code: String,
    date: String(new Date()),
  });

  function onChange(event) {
    const { name, value } = event.target;
    setForm((preVal) => {
      return { ...preVal, [name]: value };
    });
  }

  function onSubmit() {
    axios
      .post("/api/add", form)
      .then(() => {
        resetData();
      })
      .catch((error) => {
        console.log(error);
      });
    handleAddClick();
    setForm({
      question: String,
      keyword: String,
      projectUrl: String,
      codeLanguage: String,
      code: String,
      date: String(new Date())
    });
  }

  return (
    <Modal show={addState} onHide={handleAddClick} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="header">Add a new entry</Modal.Title>
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
                  <option disabled defaultValue value>
                    -- Select An Option --
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

            <Fab onClick={onSubmit} variant="extended" color="primary">
              Submit
            </Fab>
          </Form>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Fab color="secondary" onClick={handleAddClick}>
          Close
        </Fab>
      </Modal.Footer>
    </Modal>
  );
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, { resetData })(AddCard);
