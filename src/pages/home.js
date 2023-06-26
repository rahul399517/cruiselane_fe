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

const HomePage = () => {
  return (
    <div className="home-page">
      <TopSlide />
      <NewArrival />
    </div>
  );
};

export default HomePage;
