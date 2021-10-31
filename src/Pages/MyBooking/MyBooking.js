//imported file
import React from "react";
import useAuth from "../../hooks/useAuth";

// my booking component
const MyBooking = ({ myOrderedItem }) => {
  //destructuring useAuth
  const { dataContext } = useAuth();
  const { deleteBooking } = dataContext;
  const { _id, serviceTitle, status, name, email, imgUrl, address, cell } =
    myOrderedItem;

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
        </button>
      </td>
    </tr>
  );
};

export default MyBooking;
