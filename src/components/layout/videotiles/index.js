import React from "react";

const VideoTiles = ({ item }) => {
  return (
    <div>
      <iframe
        key={item?.id?.videoId}
        src={`https://www.youtube.com/embed/${item?.id?.videoId}`}
        title={item?.snippet?.title}
      />
    </div>
  );
};

export default VideoTiles;
