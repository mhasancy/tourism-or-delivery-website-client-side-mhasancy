//imported file
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
//navbar component
const Navbar = () => {
  const { firebaseContext } = useAuth();
  //destructuring
  const { user, logOut } = firebaseContext;

  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light fw-bold">
      <div className="container">
        <NavLink className="navbar-brand fs-1 fw-bold gradient-txt" to="/">
          Floral Care
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink aria-current="page" className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/booking/:serviceId">
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-orders">
                My Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-a-service">
                Add Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage-all-orders">
                All Orders
              </NavLink>
            </li>
            {user?.email ? (
              <>
                <li className="nav-item">
                  <NavLink to="" className="nav-link">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={logOut}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Log in
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
