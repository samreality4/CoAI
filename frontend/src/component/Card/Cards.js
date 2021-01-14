import React from "react";
import OneCard from "./OneCard";

function Cards({list}) {
  return (
    <div className="container mx-auto">
      <div className="d-flex row justify-content-start">
        {list.map(({_id, codeLanguage, question, projectUrl, keyword, code}) => {
          return (
            <OneCard
              key={_id}
              id={_id}
              codeLanguage={codeLanguage}
              question={question}
              projectUrl={projectUrl}
              keyword={keyword}
              code={code}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
