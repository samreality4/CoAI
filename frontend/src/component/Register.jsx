import React, {useState} from "react";
import { Zoom, Fab } from "@material-ui/core";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {connect} from "react-redux"
import {registerUser} from "../actions";


function Register(props) {
  const [registerState, setRegisterState] = useState({
    userName: String,
    password: String,
    passwordConfirm: String
  });

  function onChange(event) {
    const { name, value } = event.target;
    setRegisterState(preVal => {
      return { ...preVal, [name]: value };
    });
  }

  function onRegister() {
    if (registerState.password === registerState.passwordConfirm) {
      props.registerUser(registerState);
    } else {
      console.log(registerState);
      alert("password doesn't not match!");
    };
  };

  return (
    <div className="mt-5 text-center">
      <h1> Welcome! Register Today!</h1>
      <div className="container mt-5">
        <h1>Register</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 mx-auto">
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Form>
                  <Form.Group onChange={onChange} value={registerState.userName}>
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                  
                    />
                  </Form.Group>
                  <Form.Group onChange={onChange} value={registerState.password}>
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                
                    />
                  </Form.Group>
                  <Form.Group
                    onChange={onChange}
                    value={registerState.passwordConfirm}
                  >
                    <label for="password">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      
                    />
                  </Form.Group>
                  <Zoom in={true}>
                    <Fab
                      onClick={onRegister}
                      color="secondary"
                      variant="extended"
                    >
                      Register
                    </Fab>
                  </Zoom>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({user}) {

  return {user};
}


export default connect(mapStateToProps, {registerUser}) (Register);
