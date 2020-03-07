import React from "react";
import OneCard from "./OneCard";
import Grow from "@material-ui/core/Grow";

function Cards(props) {
  return (
    <div className="container mx-auto">
      <div className="d-flex row justify-content-start">
        
          {props.list.map(item => {
            return (
              <Grow in={item ? true : false}>
              <OneCard
                key={item._id}
                id={item._id}
                language={item.codeLanguage}
                question={item.question}
                projecturl={item.projectUrl}
                keyword={item.keyword}
                code={item.code}
              />
               </Grow>
            );
          })}
       
      </div>
    </div>
  );
}

export default Cards;
