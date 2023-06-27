import { Card } from "react-bootstrap";
import add1 from "../images/add1.png";
import add2 from "../images/add2.png";
import IntroBikesCard from "../cards/introbikescard";
const IntroBikes = () => {
  return (
    <div>
      <Card className=" m-2 shadow">
        <Card.Title>
          <br></br>
          UNLEASH YOUR THRILL || Explore Our Stunning Bike Collection
        </Card.Title>
        <div className="row">
          <div className="col-6 p-3">
            <IntroBikesCard />
          </div>
          <div className="col-6 p-3">
            <IntroBikesCard />
          </div>
        </div>
        <div className="row">
          <div className="col-6 p-3">
            <IntroBikesCard />
          </div>
          <div className="col-6 p-3">
            <IntroBikesCard />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default IntroBikes;
