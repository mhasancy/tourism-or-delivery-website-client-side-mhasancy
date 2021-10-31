//imported file
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//ReviewBooking component
const ReviewBooking = () => {
  //dynamic route data set
  const { serviceId } = useParams();
  //react hook form
  const { register, handleSubmit, reset } = useForm();
  //destructuring with auth and context
  const { dataContext, firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { servicesData } = dataContext;
  //matchedService
  const matchedService = servicesData?.find(
    (serviceData) => serviceData?._id === serviceId
  );
  //data post to server
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
          alert("Tour booked successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container radius-card mt-5 pt-1 pb-5 px-5">
      <h1 className="fw-bold text-center  mt-5 ">
        Book Your Tour
        <span className="gradient-txt">.</span>
      </h1>
      <p className="text-center w-50 mx-auto pb-5">
        Add new tour plan by providing Name, Email, Number and Address.
      </p>

      {matchedService ? (
        <div className="row row-cols-1 row-cols-md-2 mx-auto ">
          <div className="col">
            <div class="card border-card">
              <img
                style={{ height: "25rem" }}
                src={matchedService?.imgUrl}
                class="card-img-top img-fluid"
                alt=""
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">{matchedService?.title}</h4>
                <p class="card-text fs-5 fw-light">{matchedService?.intro}.</p>
                <p class="card-text fs-3">
                  {" "}
                  Booking Price: <strong>$ {matchedService?.price}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <h5 className="text-center mx-auto pb-3 w-75 fw-bold">
              Fill up the form and submit to complete the booking.
            </h5>
            <div className="container mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <p className="text-start">Name</p>
                  <input
                    defaultValue={user?.displayName}
                    {...register("name", { required: true, maxLength: 20 })}
                    type="text"
                    className="form-control border-card"
                  />
                </div>
                <div className="mb-3">
                  <p className="text-start">Email</p>
                  <input
                    defaultValue={user?.email}
                    {...register("email", { required: true })}
                    type="email"
                    className="form-control border-card"
                  />
                </div>
                <div className="mb-3">
                  <p className="text-start">Mobile No:</p>
                  <input
                    {...register("cell", { required: true })}
                    type="telephone"
                    className="form-control border-card"
                  />
                </div>
                <div className="mb-3">
                  <p className="text-start">Address</p>
                  <textarea
                    {...register("address", { required: true })}
                    type="text"
                    className="form-control border-card"
                  />
                </div>
                <button type="submit" className="btn btn-primary gradient-btn">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h5 className="fw-light pb-5">
            Please click home and find a tour plan and then click on respective
            book now .
          </h5>
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
