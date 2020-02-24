import React from "react";

function LogIn() {
  return (
    <div className="mt-5 text-center" >
      <h1> Welcome! Sign in to get started!</h1>
      <div className="container mt-5">
        <h1>Login</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 center">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <form action="/login" method="POST">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="username" />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
