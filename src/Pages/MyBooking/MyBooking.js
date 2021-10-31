//imported file
import React from "react";
import useAuth from "../../hooks/useAuth";

// my booking component
const MyBooking = ({ myOrderedItem }) => {
  //destructuring useAuth
  const { dataContext } = useAuth();
  const { deleteBooking } = dataContext;
  const {
    _id,
    serviceTitle,
    status,
    name,
    email,
    address,
    cell,
    duration,
    price,
  } = myOrderedItem;

  return (
    <tr>
      <td>
        <h5 className="mx-auto text-center pb-2">
          <strong>{serviceTitle}</strong>
        </h5>
        <p>
          <small className="card-text fs-6">
            <strong>$ {price}</strong>{" "}
            <span className="text-lighter">/ person</span>
          </small>{" "}
          <br />
          <small className="card-text">
            <i className="far fa-calendar-alt me-2 ms-3"> </i>
            {""}
            {duration}
          </small>
        </p>
      </td>
      <td className="text-start ps-4">
        <strong>Name</strong>: {name} <br />
        <strong>Email</strong>: {email} <br />
        <strong>Cell</strong>: {cell}
        <br />
        <strong>Address</strong>: {address}
      </td>
      <td>{status}</td>
      <td>
        <button
          className="btn btn-primary gradient-btn"
          onClick={() => deleteBooking(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyBooking;
