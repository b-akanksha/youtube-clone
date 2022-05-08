import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedVideo } from "../../../redux/actions";
import SelectedVideo from "../selectedVideo";
import VideoTiles from "../videotiles";
import "./body.css";

const Body = () => {
  const { searchVideos, selectedVideo } = useSelector(
    (state) => state.youtubeify
  );

  const dispatch = useDispatch();

  const handleClick = (item) => dispatch(setSelectedVideo(item));

  return (
    <div className="body-container">
      {searchVideos && searchVideos.length > 0 ? (
        <div className="video-container">
          <div className="main-video" key="main-div">
            <SelectedVideo
              item={selectedVideo}
              key={`selected-${selectedVideo?.id?.videoId}`}
            />
          </div>
          <div className="tiles" key="tiles">
            {searchVideos?.map((item) => (
              <VideoTiles
                item={item}
                key={`thumbnail-${item?.id?.videoId}`}
                handleClick={() => handleClick(item)}
              />
            ))}
          </div>
        </div>
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
