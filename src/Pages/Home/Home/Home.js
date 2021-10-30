//imported file
import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Team from "../Team/Team";
import TourPlans from "../TourPlans/TourPlans";

//home component
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPlans></TourPlans>
      <Blogs></Blogs>
      <Team></Team>
    </div>
  );
};

export default Home;
