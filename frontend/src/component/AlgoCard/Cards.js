import React from "react";
import OneCard from "./OneCard";

function Cards({list}) {
  return (
    <div className="container mx-auto">
      <div className="d-flex row justify-content-start">
        {list.map(({videos}) => {
          return (
            <Card
              videos={videos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
