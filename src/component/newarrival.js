import NewArrivalCard from "../cards/newarrivalcard";
const NewArrival = () => {
  return (
    <div>
      {/* Featured Vehicles */}
      <div className="row mt-5">
        <h2 className="new-arrivals-heading">New Arrivals in Market</h2>
        <div className="col-md-4 col-sm-12">
          <NewArrivalCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <NewArrivalCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <NewArrivalCard />
        </div>

        {/* Add more featured vehicle cards here */}
      </div>
      <div className="row mt-2">
        <div className="col-md-4 col-sm-12">
          <NewArrivalCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <NewArrivalCard />
        </div>
        <div className="col-md-4 col-sm-12">
          <NewArrivalCard />
        </div>

        {/* Add more featured vehicle cards here */}
      </div>
    </div>
  );
};
export default NewArrival;
