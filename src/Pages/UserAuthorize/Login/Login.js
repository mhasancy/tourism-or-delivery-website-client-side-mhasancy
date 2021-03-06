//imported file
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

//log in component
const Login = () => {
  //auth context firebase
  const { firebaseContext } = useAuth();
  //destructuring
  const { googleSignIn, setError } = firebaseContext;
  //location redirectUri
  const location = useLocation();
  const history = useHistory();
  const redirectUri = location.state?.from || "/";
  //googleSignIn handle
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        history.push(redirectUri);
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="row row-cols-1  h-100 row-cols-md-2 p-0 container mx-auto my-5 radius-card overflow-hidden">
      <div
        style={{
          background: `url("https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-background-1.png?id=125")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center",
        }}
        className="col col-md-7 container bg-white py-4"
      >
        <h3 className="fw-bold fs-1 text-center ms-md-4 p-md-2 mx-auto mt-5">
          Login to your account.
        </h3>
        <p className="mb-5">
          Please login with your google account to stay connected with us !!
        </p>
        <img
          style={{ cursor: "pointer" }}
          className="img-fluid"
          onClick={handleGoogleLogin}
          src="./google-signin.png"
          alt=""
        />

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
