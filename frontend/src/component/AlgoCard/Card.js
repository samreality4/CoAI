import React from "react";
import YouTube from "react-youtube";

function Card({ videos, articles, notes }) {
  return (
    <div>
      {videos.map(({ videoID, links, notes }) => {
        return <YouTube videoID={videoID}></YouTube>;
      })}
    </div>
  );
}

export default Card;
