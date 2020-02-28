import React from "react";
import Card from "react-bootstrap/Card";
import OneCard from "./OneCard";
import { useState } from "react";
import { Grow } from "@material-ui/core";

function Cards() {
  const [list, setList] = useState([
    {
      question: "ww",
      projecturl: "www",
      language: "Swift"
    },
    {
      question: "ww",
      projecturl: "www",
      language: "Swift"
    },
    {
      question: "ww",
      projecturl: "www",
      language: "Swift"
    },
    {
      question: "ww",
      projecturl: "www",
      language: "Swift"
    }
  ]);

  return (
    <Grow in={true} timeout="10000">
      <div className="container mx-auto">
        <div className="d-flex row justify-content-center">
          {list.map(item => {
            return (
              <OneCard
                language={item.language}
                question={item.question}
                projecturl={item.projecturl}
              />
            );
          })}
        </div>
      </div>
    </Grow>
  );
}

export default Cards;
