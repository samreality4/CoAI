import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { Zoom, Fab } from "@material-ui/core";
import { Form, Col } from "react-bootstrap";
import AddCard from "./Card/AddCard";
import { useState } from "react";
import Cards from "./Card/Cards";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import { resetData } from "../actions";
import { useSnackbar } from "notistack";
import { HtmlToolTips } from "./util/HtmlToolTips";

function Search(props) {
  useEffect(() => {
    props.resetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { enqueueSnackbar } = useSnackbar();

  const [searchState, setSearchState] = useState("");

  function onChange(e) {
    setSearchState(e.target.value);
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      getList();
    }
  }

  function getList(e) {
    props.fetchData(searchState, enqueueSnackbar);
  }

  const [clickState, setClickState] = useState(false);

  function handleClick() {
    setClickState(!clickState);
  }

  return (
    <div>
      <Zoom in={true}>
        <div>
          <h1 className="text-center" style={{ marginTop: "200px" }}>
            Hi! Today is a productive day!
          </h1>

          <div
            className="container col-md-6 mx-auto rounded shadow p-3 mb-5 bg-white"
            style={{ postion: "relative", top: "20px" }}
          >
            <Form>
              <Form.Row className="col-sm-12">
                <Col sm={11}>
                  <Form.Control
                    as="input"
                    type="text"
                    name="text"
                    value={searchState}
                    placeholder="Enter any keywords"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                  />
                </Col>
                <Col sm={1}>
                  <HtmlToolTips
                    arrow={true}
                    title={
                      <React.Fragment>
                        {"Click here to Search!"} <br />
                        {`Search keyword ${"'react'"} to try!`}
                      </React.Fragment>
                    }
                  >
                    <button
                      onClick={getList}
                      type="button"
                      className="btn btn-danger wrn-btn"
                    >
                      <SearchIcon />
                    </button>
                  </HtmlToolTips>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </div>
      </Zoom>
      <Cards list={props.data} grow={true} />
      <Zoom in={true}>
        <Fab
          onClick={handleClick}
          color="primary"
          style={{ position: "fixed", bottom: "50px", right: "50px" }}
        >
          <AddIcon />
        </Fab>
      </Zoom>

      <AddCard clickstate={clickState} clickfunction={handleClick} />
    </div>
  );
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, { fetchData, resetData })(Search);
