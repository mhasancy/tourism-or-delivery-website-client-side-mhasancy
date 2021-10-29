import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddingServices = () => {
  const [addedService, setAddedService] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((response) => {
      setAddedService(response?.data);
    });
    alert("data added");
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} /> <br />
        <input type="text" {...register("imgUrl")} /> <br />
        <textarea {...register("intro")} /> <br />
        <input type="number" {...register("price")} /> <br />
        <input type="submit" />
      </form>

      {addedService?.insertedId && (
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      )}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingServices;
