import { Card } from "react-bootstrap";
import add1 from "../images/add1.png";
import add2 from "../images/add2.png";
const NewArrivalCard = () => {
  return (
    <div>
      <Card className="car-card m-2 shadow">
        <div className="car-image">
          <Card.Img variant="top" style={{ height: "150px" }} src={add1} />
        </div>
        {/* product brand name  */}
        <span
          className="badge rounded-pill text-bg-light shadow"
          style={{ position: "absolute", top: "10px", left: "3px" }}
        >
          BMW
        </span>
        <Card.Body>
          <div className="car-info row">
            <div className="car-price col-4 ">
              <Card.Title
                className="car-model mt-1"
                style={{ fontSize: "small", fontWeight: "700" }}
              >
                BMW M4 Coupe
              </Card.Title>
            </div>

            <div className="car-rating col-4">
              <span className="badge rounded-pill text-bg-light shadow">
                <i
                  className="fa-solid fa-heart"
                  style={{ color: "#ff0000" }}
                ></i>
                &nbsp; likes &nbsp; 77k
              </span>
            </div>
            <div className="car-price col-4 ">
              <span className="badge rounded-pill text-bg-primary shadow">
                View Details
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default NewArrivalCard;
