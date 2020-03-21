import React, { useState } from "react";
import { Zoom, Fab } from "@material-ui/core";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { logInUser } from "../actions";
import { withRouter } from "react-router-dom";
import { useSnackbar } from "notistack";

function LogIn(props) {
  const { enqueueSnackbar } = useSnackbar();

  const [logInState, setLogInState] = useState({
    userName: String,
    password: String
  });

  function onChange(event) {
    const { name, value } = event.target;
    setLogInState(preVal => {
      return { ...preVal, [name]: value };
    });
  }

  function onLogin() {
    props.logInUser(logInState, props.history, enqueueSnackbar);
  }

  return (
    <Zoom in={true}>
      <div className="mt-5 text-center">
        <h1> Welcome! Sign in to get started!</h1>
        <div className="container mt-5">
          <h1>Login</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto">
              <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                  <Form>
                    <Form.Group onChange={onChange} value={logInState.userName}>
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="username"
                        required
                      />
                    </Form.Group>
                    <Form.Group onChange={onChange} value={logInState.password}>
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        required
                      />
                    </Form.Group>

                    <Fab onClick={onLogin} color="primary">
                      Login
                    </Fab>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps, { logInUser })(LogIn));
