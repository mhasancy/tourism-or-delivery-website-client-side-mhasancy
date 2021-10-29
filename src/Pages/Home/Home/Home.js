//imported file
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

//home component
const Home = () => {
  const { firebaseContext, services } = useAuth();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
