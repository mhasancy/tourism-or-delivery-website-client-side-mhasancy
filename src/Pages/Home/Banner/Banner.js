//imported file
import React from "react";

//banner component
const Banner = () => {
  return (
    <div className="mx-auto row img-fluid hero-bg text-start align-items-center container-fluid ps-md-5">
      <div className=" ps-md-5 my-5">
        <h1 className="col-12 col-md-6 text-white fw-bold">
          Start Your Journey
          <span className="gradient-txt"> .</span>
        </h1>
        <p className="col-12 col-md-6 fw-light mt-5 text-white fs-4 text-start lh-base ">
          A journey of a 1000 miles starts with a single step. Import the full
          demo content with 1 click and create a head-turning website for your
          travel agency.
        </p>
        <span className="text-start ">
          <a
            href="#services"
            className="btn btn-primary fw-bold gradient-btn rounded-3 px-3 mt-3"
          >
            <i className="far fa-bookmark"></i> Book Now
          </a>
        </span>
      </div>
    </div>
  );
};

export default Banner;
