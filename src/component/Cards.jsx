import React from "react";
import Card from "react-bootstrap/Card";
import OneCard from "./OneCard"
import { useState } from "react";
import { Grow } from '@material-ui/core';


function Cards () {

    const [list, setList] = useState([]);
    
    

return <Grow>
{list.map(item => {


    // <OneCard/>
})}
</Grow>


}

export default Cards;