//imported file
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

//adding tour services component
const AddingTourPlan = () => {
  //destructuring use_form
  const { register, reset, handleSubmit } = useForm();
  //posting form data to server
  const onSubmit = (data) => {
    axios
      ?.post("https://morning-headland-33289.herokuapp.com/services", data)
      .then((response) => {
        if (response?.data.insertedId) {
          alert("Tour plan added successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="radius-card container mt-5 pt-1">
      <h1 className="fw-bold d-none d-md-block text-center  mt-5 ">
        Add A Tour
        <span className="gradient-txt">.</span>
      </h1>
      <h1
        style={{ fontSize: "2.5rem" }}
        className="fw-bold d-block d-md-none text-center  mt-5 "
      >
        Add A Tour
        <span className="gradient-txt">.</span>
      </h1>
      <p className="text-center w-75 mx-auto ">
        Add new tour plan by providing valid information.
      </p>

      <div className="mb-3 row row-cols-1 pb-5  row-cols-md-2 p-0   container mx-auto my-5  overflow-hidden">
        <div className="container mx-auto w-75">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <p className="text-start">Title</p>
              <input
                {...register("title", { required: true })}
                type="text"
                className="form-control border-card"
              />
            </div>

            <div className="mb-3">
              <p className="text-start">Short Description</p>
              <textarea
                {...register("intro", { required: true })}
                type="text"
                className="form-control border-card"
              />
            </div>

            <div className="mb-3">
              <p className="text-start">Image URL</p>
              <input
                {...register("imgUrl", { required: true })}
                type="url"
                className="form-control border-card"
              />
            </div>
            <div className="mb-3">
              <p className="text-start">Price</p>
              <input
                {...register("price", { required: true })}
                type="number"
                className="form-control border-card"
              />
            </div>

            <button type="submit" className="btn btn-primary gradient-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddingTourPlan;
