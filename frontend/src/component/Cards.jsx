import React from "react";
import Card from "react-bootstrap/Card";
import OneCard from "./OneCard";
import { useState } from "react";
import { Grow } from "@material-ui/core";

function Cards() {
  const [list, setList] = useState([
    {
      id: 1,
      question: "ww",
      projecturl: "www",
      language: "Swift"
    },
    {
      id: 2,
      question: "ww",
      projecturl: "www",
      language: "Swift"
    },
    {
      id: 3,
      question: "ww",
      projecturl: "www",
      language: "Swift"
    },
    {
      id: 4,
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
