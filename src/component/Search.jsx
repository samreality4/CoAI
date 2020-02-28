import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { Zoom, Fab } from "@material-ui/core";
import { Form, Col } from "react-bootstrap";
import AddForm from "./AddForm";
import { useState } from "react";
import Cards from "./Cards";

function Search() {
  function getList() {}

  const [click, setClickState] = useState(false);



  function add(value) {
  
  }

  return (
    <div>
      <Zoom in={true}>
        <div>
          <h1 className="text-center" style={{ marginTop: "200px" }}>
            Hi User! Today is productive day!
          </h1>

          <div
            className="container col-md-6 mx-auto rounded shadow p-3 mb-5 bg-white"
            style={{ postion: "relative", top: "20px" }}
          >
            <Form>
              <Form.Row className="col-sm-12">
                <Col sm={3}>
                  <Form.Control as="select" className="option">
                    <option>Javascript</option>
                    <option>Kotlin</option>
                    <option>Swift</option>
                    <option>Java</option>
                  </Form.Control>
                </Col>
                <Col sm={8}>
                  <Form.Control
                    as="input"
                    type="text"
                    placeholder="Enter any keywords"
                  />
                </Col>
                <Col sm={1}>
                  <button
                    onClick={getList}
                    type="button"
                    className="btn btn-danger wrn-btn"
                  >
                    <SearchIcon />
                  </button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </div>
      </Zoom>
     <Cards />
      <Zoom in={true}>
        <Fab
        onClick={add}
        color="primary"
          style={{ position: "fixed", bottom: "50px", right: "50px" }}
        
        >
          <AddIcon />
        </Fab>
      </Zoom>
    />
    </div>
  );
}

export default Search;
