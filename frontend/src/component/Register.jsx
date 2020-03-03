import React from "react";
import { Zoom, Fab } from "@material-ui/core";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";


function Register() {



  return (
    <div className="mt-5 text-center">
      <h1> Welcome! Register Today!</h1>
      <div className="container mt-5">
        <h1>Register</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 mx-auto">
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Form action="/login" method="POST">
                  <Form.Group>
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="username"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label for="password">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </Form.Group>
                  <Zoom in={true}>
                    <Fab color="secondary" type="submit" variant="extended">
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

export default Register;
