import React from "react";
import { useSelector } from "react-redux";
import VideoTiles from "../videotiles";
import img from "../../../assets/browsing.png";
import "./body.css";
import SelectedVideo from "../selectedVideo";

const Body = () => {
  const { searchVideos, selectedVideo } = useSelector(
    (state) => state.youtubeify
  );
  return (
    <div className="body-container">
      {searchVideos && searchVideos.length > 0 ? (
        <>
          <div className="main-video" key="main-div">
            <SelectedVideo
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
          <img src={img} alt="browsing" className="no-result__img" />
          <div className="no-result__text">
            <p>Nothing to display :( Try searching maybe?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
