import React from "react";
import { Link } from "react-router-dom";

const TeamMember = ({ teamDataSingle }) => {
  const { name, imgUrl, designation } = teamDataSingle;
  return (
    <div className="col container" style={{ width: "30rem" }}>
      <div
        className="card border-card h-100 radius-card overflow-hidden"
        id="hover-card"
      >
        <div className="row g-0">
          <div className="col-5">
            <img
              src={imgUrl}
              className="img-fluid"
              style={{ width: "200%", height: "100%" }}
              alt=""
            />
          </div>

          <div className="card-body col-7 text-start ps-5 pt-5">
            <h4 className="card-title">{name}</h4>
            <p className="card-title fs-5">{designation}</p>
            <div className="mb-3 fs-3 gradient-txt">
              <span>
                <Link to="/">
                  <i class="fab fa-twitter-square me-2"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i class="fab fa-linkedin me-2"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i class="fab fa-facebook-square me-2"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <i class="fab fa-instagram-square"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;