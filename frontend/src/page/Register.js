import React, { useState } from "react";
import { Zoom, Fab } from "@material-ui/core";
import { Form, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions";
import { withRouter } from "react-router-dom";
import { useSnackbar } from "notistack";

function Register({registerUser, history}) {
  const { enqueueSnackbar } = useSnackbar();

  const [registerState, setRegisterState] = useState({
    username: String,
    password: String,
    passwordConfirm: String,
    date: String(new Date())
  });

  function onChange(event) {
    const { name, value } = event.target;
    setRegisterState(preVal => {
      return { ...preVal, [name]: value };
    });
  }

  function onRegister() {
    if (registerState.password === registerState.passwordConfirm) {
      registerUser(registerState, history, enqueueSnackbar);
    } else {
      enqueueSnackbar("Password does not match!", { variant: "error" });
    }
  }

  return (
    <div>
      <Zoom in={true}>
        <div className="mt-5 text-center">
          <h1> Welcome! Register Today!</h1>
          <div className="container mt-5">
            <h1>Register</h1>
            <div className="row">
              <div className="col-lg-4 col-md-6 mx-auto">
                <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                  <Card.Body>
                    <Form>
                      <Form.Group
                        onChange={onChange}
                        value={registerState.userName}
                        required
                      >
                        <label for="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="username"
                        />
                      </Form.Group>
                      <Form.Group
                        onChange={onChange}
                        value={registerState.password}
                        required
                      >
                        <label for="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                        />
                      </Form.Group>
                      <Form.Group
                        onChange={onChange}
                        value={registerState.passwordConfirm}
                        required
                      >
                        <label for="password">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="passwordConfirm"
                        />
                      </Form.Group>

                      <Fab
                        onClick={onRegister}
                        color="secondary"
                        variant="extended"
                      >
                        Register
                      </Fab>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps, { registerUser })(Register));
