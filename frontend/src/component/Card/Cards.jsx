import React from "react";
import Card from "react-bootstrap/Card";
import OneCard from "./OneCard";
import { useState } from "react";
import { Grow } from "@material-ui/core";

function Cards() {
  const [list, setList] = useState([
    {
      id: 1,
      question: "What was the problem",
      projecturl: "wwww.github.com/coAI",
      language: "Swift",
      keyword: "shit",
      code: "fdlajfldajklfdjklajfdkljsafldjsalkfjdklsajfldsajfdljlfdjkalfjdlkajfldajlkfdjsalfjkdlajfldsajfldsjalfdjasfldjasfldalfjdsaklfjdlsajfldsajfkldjsaklfdsjal"
    },
    {
      id: 2,
      question: "How to add pass props to child onclick?",
      projecturl: "www.github.com/CoAI",
      language: "Swift",
      key: "fuck shit",
      code: "fdlajfldajklfdjklajfdkljsafldjsalkfjdklsajfldsajfdljlfdjkalfjdlkajfldajlkfdjsalfjkdlajfldsajfldsjalfdjasfldjasfldalfjdsaklfjdlsajfldsajfkldjsaklfdsjal"
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
        <div className="d-flex row justify-content-start">
          {list.map(item => {
            return (
              <OneCard
                language={item.language}
                question={item.question}
                projecturl={item.projecturl}
                keyword={item.keyword}
                code={item.code}
              />
            );
          })}
        </div>
      </div>
    </Grow>
  );
}

export default Cards;
