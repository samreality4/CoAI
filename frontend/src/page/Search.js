import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { Zoom, Fab } from "@material-ui/core";
import { Form, Col } from "react-bootstrap";
import AddCard from "../component/Card/AddCard";
import Cards from "../component/Card/Cards";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import { resetData } from "../redux/actions";
import { useSnackbar } from "notistack";
import { HtmlToolTips } from "../component/util/HtmlToolTips";
import { useHistory } from "react-router-dom";

function Search({resetData, auth, fetchData, data}) {
  let history = useHistory();

  useEffect(() => {
    resetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      if (auth === true) {
        if (history.action === "POP") {
          history.push("/main");
        }
      }
    };
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
    fetchData(searchState, enqueueSnackbar);
  }

  const [addState, setAddState] = useState(false);

  function handleAddClick() {
    setAddState(!addState);
  }

  return (
    <div>
      <Zoom in={true}>
        <div>
          <h1 className="text-center mt-5">Hi! Today is a productive day!</h1>

          <div
            className="container col-md-6 col-11 mx-auto rounded shadow p-3 mb-5 bg-white"
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
                        {'Search keyword "react" to try!'}
                      </React.Fragment>
                    }
                  >
                    <button
                      onClick={getList}
                      type="button"
                      className="btn btn-danger"
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
      <Cards list={data} grow={true} />
      <Zoom in={true}>
        <Fab
          className="search-fab"
          onClick={handleAddClick}
          color="primary"
          style={{ position: "fixed", bottom: "50px", right: "40px" }}
        >
          <AddIcon />
        </Fab>
      </Zoom>

      <AddCard addState={addState} handleAddClick={handleAddClick} />
    </div>
  );
}

function mapStateToProps({ data, auth }) {
  return { data, auth };
}

export default connect(mapStateToProps, { fetchData, resetData })(Search);
