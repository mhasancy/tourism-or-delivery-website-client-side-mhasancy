//imported file
import React from "react";
import useAuth from "../../../hooks/useAuth";
import TourPlan from "../TourPlan/TourPlan";

//TourPlans component
const TourPlans = () => {
  //destructuring data set
  const { dataContext } = useAuth();
  const { servicesData } = dataContext;
  return (
    <div className=" container mx-auto my-5">
      <h1 className="fw-bold text-center ms-md-4 p-md-2  mt-5 mb-3">
        Go Exotic Places
        <span className="gradient-txt"> .</span>
      </h1>
      <p className="text-center w-50 mx-auto mb-5">
        When it comes to exploring exotic places, the choices are numerous.
        Whether you like peaceful destinations or vibrant landscapes, we have
        offers for you.
      </p>
      {servicesData?.length <= 0 ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
          {servicesData?.map((serviceData) => (
            <TourPlan
              key={serviceData?._id}
              serviceData={serviceData}
            ></TourPlan>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourPlans;
