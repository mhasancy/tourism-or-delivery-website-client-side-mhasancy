//imported file
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//booking component
const ReviewBooking = () => {
  //dynamic route data set
  const { serviceId } = useParams();

  const { dataContext, firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { servicesData } = dataContext;
  const { register, handleSubmit, reset } = useForm();
  const matchedService = servicesData?.find(
    (serviceData) => serviceData?._id === serviceId
  );
  const onSubmit = (data) => {
    axios
      ?.post("https://morning-headland-33289.herokuapp.com/orders", {
        ...data,
        serviceTitle: matchedService?.title,
        serviceId: serviceId,
        status: "Pending",
        imgUrl: matchedService?.imgUrl,
      })
      .then((response) => {
        if (response?.data.acknowledged) {
          alert("data added");
          reset();
        } else {
          alert("data not added, please try again");
        }
      });
  };
  //dynamic route data load hook
  //adding matchedService data

  return (
    <div
      style={{
        background: `url("https://i.imgur.com/DTS7nNR.jpeg")`,
      }}
      className="container shadow radius-card py-1 my-5 py-5"
    >
      <h1 className="fw-bold text-center  mt-5 ">
        Book Your Tour
        <span className="gradient-txt">.</span>
      </h1>
      <p className="text-center w-50 mx-auto ">
        Add new tour plan by providing Name, Email, Number and Address.
      </p>
      <h2 className="fw-bold fs-2">{matchedService?.title}</h2>
      <h4 className="fw-light lh-base py-3 px-4 text-start">
        {matchedService?.intro}
      </h4>
      {matchedService ? (
        <div className="container mx-auto w-50">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <p className="text-start">Name</p>
              <input
                defaultValue={user?.displayName}
                {...register("name", { required: true, maxLength: 20 })}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <p className="text-start">Email</p>
              <input
                defaultValue={user?.email}
                {...register("email", { required: true })}
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <p className="text-start">Mobile No:</p>
              <input
                {...register("cell", { required: true })}
                type="telephone"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <p className="text-start">Address</p>
              <textarea
                {...register("address", { required: true })}
                type="text"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary gradient-btn">
              Place Order
            </button>
          </form>
        </div>
      ) : (
        <>
          <h4 className="fw-light pb-3">
            Please click home and find a tour plan and then click on respective
            book now .
          </h4>
          <Link to="/">
            <button className="btn btn-primary gradient-btn rounded-3 px-3 fw-bold">
              Home
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ReviewBooking;
