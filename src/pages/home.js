import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./home.css"; // Import custom CSS file
import intro from "../images/intro.gif";
import intro2 from "../images/intro2.gif";
import intro3 from "../images/intro3.gif";
import add1 from "../images/add1.png";
import add2 from "../images/add2.png";
import { Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          {" "}
          <Col>
            <Carousel interval={8000}>
              {/* Slide 1 */}
              <Carousel.Item>
                <img
                  className={"d-block w-100"}
                  src={intro}
                  alt="First slide"
                />
              </Carousel.Item>

              {/* Slide 2 */}
              <Carousel.Item>
                <img
                  className={"d-block w-100"}
                  src={intro2}
                  alt="First slide"
                />
              </Carousel.Item>

              {/* Slide 3 */}
              <Carousel.Item>
                <img
                  className={"d-block w-100"}
                  src={intro3}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>
        <div className="col-md-7 col-sm-12">
          {/* ADDS HERE PLEASE */}
          <Col>
            <Carousel fade interval={8000}>
              {/* Slide 1 */}
              <Carousel.Item>
                <img className={"d-block w-100"} src={add1} alt="First slide" />
              </Carousel.Item>

              {/* Slide 2 */}
              <Carousel.Item>
                <img className={"d-block w-100"} src={add2} alt="First slide" />
              </Carousel.Item>

              {/* Slide 3 */}
              <Carousel.Item>
                <img className={"d-block w-100"} src={add1} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>
      </div>

      {/* Featured Vehicles */}
      <div className="row mt-5">
        <h2 className="new-arrivals-heading">New Arrivals in Market</h2>
        <div className="col-md-4 col-sm-12">
          <Card className="car-card m-2">
            <div className="car-image">
              <Card.Img variant="top" style={{ height: "150px" }} src={add1} />
            </div>
            <Card.Body>
              <Card.Title className="car-model">Car Model</Card.Title>
              <Card.Text className="car-description">
                Description of the car and its features. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </Card.Text>

              <div className="car-info row">
                <div className="car-price col-6 ">
                  <span class="badge rounded-pill text-bg-primary">
                    View Details
                  </span>
                </div>

                <div className="car-rating col-6">
                  <span className="badge rounded-pill text-bg-dark">
                    {" "}
                    Rating: 4.5
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-sm-12">
          <Card className="car-card m-2">
            <div className="car-image">
              <Card.Img variant="top" style={{ height: "150px" }} src={add2} />
            </div>
            <Card.Body>
              <Card.Title className="car-model">Car Model</Card.Title>
              <Card.Text className="car-description">
                Description of the car and its features. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </Card.Text>

              <div className="car-info row">
                <div className="car-price col-6 ">
                  <span class="badge rounded-pill text-bg-primary">
                    View Details
                  </span>
                </div>

                <div className="car-rating col-6">
                  <span className="badge rounded-pill text-bg-dark">
                    {" "}
                    Rating: 4.5
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-sm-12">
          <Card className="car-card m-2">
            <div className="car-image">
              <Card.Img variant="top" style={{ height: "150px" }} src={add1} />
            </div>
            <Card.Body>
              <Card.Title className="car-model">Car Model</Card.Title>
              <Card.Text className="car-description">
                Description of the car and its features. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </Card.Text>

              <div className="car-info row">
                <div className="car-price col-6 ">
                  <span class="badge rounded-pill text-bg-primary">
                    View Details
                  </span>
                </div>

                <div className="car-rating col-6">
                  <span className="badge rounded-pill text-bg-dark">
                    {" "}
                    Rating: 4.5
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Add more featured vehicle cards here */}
      </div>
    </div>
  );
};

export default HomePage;
