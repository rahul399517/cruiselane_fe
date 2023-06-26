import { Card } from "react-bootstrap";
import IntroHomeWheelCard from "../cards/introhomewheel";
const IntroHomeWheel = () => {
  return (
    <div>
      <Card className="shadow m-2">
        <Card.Title>
          <br></br>
          UNLEASH YOUR THRILL || Explore Our Stunning Motor-Home Collection
        </Card.Title>
        <div className="row">
          <div className="col-6 p-3">
            <IntroHomeWheelCard />
          </div>
          <div className="col-6 p-3">
            <IntroHomeWheelCard />
          </div>
        </div>
        <div className="row">
          <div className="col-6 p-3">
            <IntroHomeWheelCard />
          </div>
          <div className="col-6 p-3">
            <IntroHomeWheelCard />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default IntroHomeWheel;
