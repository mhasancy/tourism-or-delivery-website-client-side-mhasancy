//imported file
import React from "react";
import { Link } from "react-router-dom";

//TourPlan component
const TourPlan = ({ serviceData }) => {
  //destructuring props
  const { _id, title, intro, imgUrl, duration, price } = serviceData;
  return (
    <div className="col container" id="services">
      <div
        style={{
          background: `url(${imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "29rem",
        }}
        className="card border-card radius-card overflow-hidden"
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.4)", paddingTop: "100px" }}
          className="card-body"
        >
          <h3
            style={{ color: "#f8f9fa", height: "100px" }}
            className="card-title mb-4"
          >
            {title}
          </h3>
          <p className="pb-1">
            <small className="card-text text-white fs-6">
              <strong>$ {price}</strong>{" "}
              <span className="text-lighter">/ person</span>
            </small>
            <small className="card-text text-white">
              <i className="far fa-calendar-alt me-2 ms-3"> </i>
              {""}
              {duration}
            </small>
          </p>
          <p style={{ height: "100px" }} className="card-text text-white">
            {intro?.slice(0, 100)}
          </p>

          <Link to={`/review-booking/${_id}`}>
            <button className="btn btn-primary rounded-3 fw-bold px-3 gradient-btn">
              <i className="far fa-bookmark"></i> Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourPlan;
