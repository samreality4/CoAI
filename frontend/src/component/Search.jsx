import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { Zoom, Fab } from "@material-ui/core";
import { Form, Col } from "react-bootstrap";
import AddCard from "./Card/AddCard";
import { useState } from "react";
import Cards from "./Card/Cards";
import {connect} from "react-redux"

function Search() {


  function getList() {}

  const [clickState, setClickState] = useState(false);



  function handleClick(value) {
    setClickState(!clickState);

  };

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
                  <Form.Control name="language" as="select" className="option">
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
                    name="text"
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
        onClick={handleClick}
        color="primary"
          style={{ position: "fixed", bottom: "50px", right: "50px" }}
        
        >
          <AddIcon />
        </Fab>
      </Zoom>
    />
    <AddCard clickstate={clickState}
    clickfunction={handleClick}/>
    </div>
  );
}



export default Search;
