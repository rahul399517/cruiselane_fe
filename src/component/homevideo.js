import { Card } from "react-bootstrap";
import React from "react";
import YouTube from "react-youtube";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const HomeVideos = () => {
  const videoOptions1 = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId1 = "KTVlaMfldEM";
  const videoOptions2 = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId2 = "KTVlaMfldEM";
  const videoOptions3 = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId3 = "KTVlaMfldEM";
  const videoOptions4 = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId4 = "KTVlaMfldEM";
  //   for carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="row">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="row p-1">
            <div className="col-md-6  col-sm-12 ">
              <YouTube videoId={videoId1} opts={videoOptions1} />
            </div>
            <div className="col-md-6  col-sm-12 ">
              <YouTube videoId={videoId1} opts={videoOptions1} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row p-1">
            <div className="col-md-6  col-sm-12 ">
              <YouTube videoId={videoId3} opts={videoOptions3} />
            </div>
            <div className="col-md-6  col-sm-12 ">
              <YouTube videoId={videoId4} opts={videoOptions4} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default HomeVideos;
