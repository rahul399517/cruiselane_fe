import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./home.css"; // Import custom CSS file
import intro from "../images/intro.gif";
import intro2 from "../images/intro2.gif";
import intro3 from "../images/intro3.gif";
import add1 from "../images/add1.png";
import add2 from "../images/add2.png";
import { Card } from "react-bootstrap";
import NewArrival from "../component/newarrival";
import TopSlide from "../component/topslide";
import IntroCars from "../component/introcars";
import IntroBikes from "../component/introbikes";
import IntroHomeWheel from "../component/introhomeWheel";
import IntroTrucks from "../component/introtrucks";
import HomeVideos from "../component/homevideo";

const HomePage = () => {
  return (
    <div className="home-page">
      <TopSlide />
      <NewArrival />
      <br></br>
      <hr></hr>
      <h1 className="mt-2">Discover an Exquisite Collection </h1>
      <div className="row p-1">
        <div className="col-md-6 col-sm-12">
          <IntroCars />
        </div>
        <div className="col-md-6 col-sm-12">
          <IntroBikes />
        </div>
      </div>
      <div className="row p-1">
        <div className="col-md-6 col-sm-12">
          <IntroHomeWheel />
        </div>
        <div className="col-md-6 col-sm-12">
          <IntroTrucks />
        </div>
      </div>
      <br></br>
      <h1>Check Out Our Jaw-Dropping Video Collection!</h1>
      <HomeVideos />
    </div>
  );
};

export default HomePage;
