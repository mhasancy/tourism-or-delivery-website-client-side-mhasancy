//imported file
import React from "react";
import useAuth from "../../hooks/useAuth";

//managing single booking component
const ManageBooking = ({ orderData }) => {
  //destructuring
  const { dataContext } = useAuth();
  const { deleteBooking, handleStatusUpdate } = dataContext;
  const { serviceTitle, name, email, status, _id, address, cell, imgUrl } =
    orderData;
  return (
    <tr>
      <td>
        <h5 className="mx-auto text-center">
          <strong>{serviceTitle}</strong>
        </h5>
        <img style={{ width: "110px", height: "80px" }} src={imgUrl} alt="" />
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
        </button>{" "}
        <br /> <br />
        {status === "Approved" ? (
          <button className="btn btn-primary gradient-btn" disabled>
            Approved
          </button>
        ) : (
          <button
            className="btn btn-primary gradient-btn"
            onClick={() => handleStatusUpdate(_id)}
          >
            Approve
          </button>
        )}
      </td>
    </tr>
  );
};
export default ManageBooking;
