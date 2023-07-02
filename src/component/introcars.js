import { Card } from "react-bootstrap";
import IntroCarsCard from "../cards/introcarscard";
const IntroCars = () => {
  return (
    <div>
      <Card className="m-2" style={{ border: "none" }}>
        <Card.Title>
          <br></br>
          UNLEASH YOUR THRILL || Explore Our Stunning Car Collection
        </Card.Title>
        <div className="row">
          <div className="col-6 p-3">
            <IntroCarsCard />
          </div>
          <div className="col-6 p-3">
            <IntroCarsCard />
          </div>
        </div>
        <div className="row">
          <div className="col-6 p-3">
            <IntroCarsCard />
          </div>
          <div className="col-6 p-3">
            <IntroCarsCard />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default IntroCars;
