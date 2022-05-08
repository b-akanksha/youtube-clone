import React from "react";
import "./videotiles.css";

const VideoTiles = ({ item, handleClick }) => {
  return (
    <div className="video-tiles" role="button" onClick={handleClick}>
      <img
        src={item?.snippet?.thumbnails?.high?.url}
        alt={item?.snippet?.title}
        className="video-thumbail"
      />
    </div>
  );
};

export default VideoTiles;
