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
          style={{ backgroundColor: "rgba(0,0,0,0.4)", paddingTop: "80px" }}
          className="card-body"
        >
          <h3
            style={{ color: "#f8f9fa", height: "100px" }}
            className="d-none d-md-block card-title mb-4"
          >
            {title}
          </h3>
          <h3
            style={{ color: "#f8f9fa", height: "60px", fontSize: "30px" }}
            className="d-block d-md-none card-title mb-4"
          >
            {title}
          </h3>
          <p className="pb-1 d-none d-md-block">
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

          <p className="pb-1 d-block d-md-none">
            <small className="card-text text-white fs-6">
              <strong>$ {price}</strong>{" "}
              <span className="text-lighter">/ person</span>
            </small>{" "}
            <br />
            <small className="card-text text-white">
              <i className="far fa-calendar-alt me-2 ms-3"> </i>
              {""}
              {duration}
            </small>
          </p>
          <p
            style={{ height: "140px" }}
            className="card-text text-white d-block d-md-none"
          >
            {intro?.slice(0, 100)}
          </p>
          <p
            style={{ height: "100px" }}
            className="card-text text-white d-none d-md-block"
          >
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
