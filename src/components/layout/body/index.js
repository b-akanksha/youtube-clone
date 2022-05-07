import React from "react";
import { useSelector } from "react-redux";
import VideoTiles from "../videotiles";
import "./body.css";

const Body = () => {
  const { searchVideos, selectedVideo } = useSelector(
    (state) => state.youtubeify
  );
  return (
    <div className="body-container">
      {searchVideos && searchVideos.length > 0 ? (
        <>
          <div className="main-video" key="main-div">
            <VideoTiles
              item={selectedVideo}
              key={`selected-${selectedVideo?.id?.videoId}`}
            />
          </div>
          <div className="tiles" key="tiles">
            {searchVideos?.map((item) => (
              <VideoTiles item={item} key={item?.id?.videoId} />
            ))}
          </div>
        </>
      ) : (
        <div className="no-result">
          <img
            src="/assets/browsing.png"
            alt="browsing"
            className="no-result__img"
          />
          <div className="no-result__text">
            <p>Nothing to display :( Try searching maybe?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
