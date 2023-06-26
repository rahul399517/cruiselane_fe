import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../pages/home.css"; // Import custom CSS file
import intro from "../images/intro.gif";
import intro2 from "../images/intro2.gif";
import intro3 from "../images/intro3.gif";
import add1 from "../images/add1.png";
import add2 from "../images/add2.png";

const TopSlide = () => {
  return (
    <div>
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
    </div>
  );
};
export default TopSlide;
