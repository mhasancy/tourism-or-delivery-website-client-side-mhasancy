//imported file
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//booking component
const Review = () => {
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
      ?.post("http://localhost:5000/orders", {
        ...data,
        serviceTitle: matchedService?.title,
        serviceId: [serviceId],
        status: "Pending",
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
    <div className="container shadow radius-card py-1 my-5 py-5">
      <h1 className="fw-bold text-center ms-md-4 p-md-2 mx-auto">
        Book Your
        <span className="gradient-txt"> Service</span>.
      </h1>
      <h2 className="fw-bold fs-2">{matchedService?.title}</h2>
      <h4 className="fw-light lh-base py-3 px-4 text-start">
        {matchedService?.intro}
      </h4>
      {!matchedService && (
        <h4 className="fw-light pb-3">
          Please click home and find a service and then click on respective book
          now .
        </h4>
      )}
      <Link to="/">
        <button className="btn btn-primary gradient-btn rounded-pill px-3 fw-bold">
          Home
        </button>
      </Link>

      {matchedService && (
        <a className="ms-2" href="mailto:info@floralcare.ac.uk">
          <button className="btn btn-primary gradient-btn rounded-pill px-3 fw-bold">
            Send Email
          </button>
        </a>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          defaultValue={user?.displayName}
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          type="email"
          defaultValue={user?.email}
          {...register("email", { required: true })}
        />
        <input type="number" {...register("number", { required: true })} />
        <input
          className="d-none"
          defaultValue="pending "
          type="text"
          {...register("status", { required: true })}
        />
        <textarea {...register("address", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Review;
