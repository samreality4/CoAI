import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@material-ui/icons/Add';
import { Zoom, Fab } from "@material-ui/core";

function Search() {
  return (<div>
<Zoom in={true}>
      <div>
        <h1 className="text-center" style={{marginTop: "200px"}}>Hi User! Today is productive day!</h1>

        <div
          className="col-md-6 mx-auto rounded shadow p-3 mb-5 bg-white"
          style={{ postion: "relative", top: "50px" }}
        >
          <form action="" method="post">
            <div className="row mx-auto col-lg-12">
              <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                <select className="form-control search-slt">
                  <option>Select Language</option>
                  <option>Javascript</option>
                  <option>Swift</option>
                  <option>Kotlin</option>
                  <option>Java</option>
                </select>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-11 p-0">
                <input
                  type="text"
                  class="form-control search-slt"
                  placeholder="Enter any keywords"
                />
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 p-0">
                <button type="button" className="btn btn-danger wrn-btn">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Zoom>

    <Fab style={{position: "fixed", bottom: "50px", right:"50px" }}> <AddIcon /></Fab>
    </div>
  );
}

export default Search;