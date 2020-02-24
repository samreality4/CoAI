import React from "react";
import SearchIcon from '@material-ui/icons/Search';

function Search () {
    
return <div className="col-md-6 center">
 <form className="center" action="" method="post">
 <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Language</option>
                                <option>Javascript</option>
                                <option>Swift</option>
                                <option>Kotlin</option>
                                <option>Java</option>
                            </select>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 p-0">
                            <input type="text" class="form-control search-slt" placeholder="Enter any keywords"/>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 p-0">
                            <button type="button" className="btn btn-danger wrn-btn"><SearchIcon/></button>
                        </div>
                    </div>
                </div>
            </div>

</form>
</div>

}

export default Search;