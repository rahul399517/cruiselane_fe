import { Card } from "react-bootstrap";
import IntroTrucksCard from "../cards/introtruckscard";
const IntroTrucks = () => {
  return (
    <div>
      <Card className="m-2" style={{ border: "none" }}>
        <Card.Title>
          <br></br>
          UNLEASH YOUR THRILL || Explore Our Stunning Truck Collection
        </Card.Title>
        <div className="row">
          <div className="col-6 p-3">
            <IntroTrucksCard />
          </div>
          <div className="col-6 p-3">
            <IntroTrucksCard />
          </div>
        </div>
        <div className="row">
          <div className="col-6 p-3">
            <IntroTrucksCard />
          </div>
          <div className="col-6 p-3">
            <IntroTrucksCard />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default IntroTrucks;
