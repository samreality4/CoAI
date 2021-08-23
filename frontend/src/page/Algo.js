import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

function Algo({auth}) {
    switch (auth) {
      case false:
        return <Redirect to="/login" />;
      default:
        return (
          <div className="container-fluid">
            
          
          </div>
        );
    }
  }
  
  function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps)(Algo);
  