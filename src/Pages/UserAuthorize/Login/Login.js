//imported file
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

//log in component
const Login = () => {
  //auth context
  const { firebaseContext, services } = useAuth();
  //destructuring
  const { googleSignIn } = firebaseContext;
  //location redirectUrl
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";
  //googleSignIn handle
  const handleGoogleLogin = () => {
    googleSignIn().then(() => {
      history.push(redirectUrl);
    });
  };

  return (
    <div className="row row-cols-1 h-100 row-cols-md-2 p-0 shadow gradient-bg bg-primary container mx-auto my-5 radius-card overflow-hidden">
      <div className="col col-md-7 container bg-white py-4">
        <h2 className="fw-bold text-center ms-md-4 p-md-2 mx-auto my-5">
          Please
          <span className="gradient-txt"> Login</span>
        </h2>

        <button
          className="rounded-pill btn btn-primary gradient-btn fw-bold"
          onClick={handleGoogleLogin}
        >
          <i className="fab fa-google"></i> Login with Google
        </button>
        <br />
      </div>
    </div>
  );
};

export default Login;
