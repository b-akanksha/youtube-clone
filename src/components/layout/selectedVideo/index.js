import React from "react";
import "./selectedVideo.css";

const SelectedVideo = ({ item }) => {
  const decodeHtmlEntity = function (str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  };
  return (
    <div className="selected-video">
      <iframe
        frameBorder={0}
        className="selected-video-iframe"
        key={item?.id?.videoId}
        src={`https://www.youtube.com/embed/${item?.id?.videoId}`}
        title={item?.snippet?.title}
      />
      <h3>{decodeHtmlEntity(item?.snippet?.title)}</h3>{" "}
    </div>
  );
};

export default SelectedVideo;
