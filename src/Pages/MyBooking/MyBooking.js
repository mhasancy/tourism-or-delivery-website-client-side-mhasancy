//imported file
import React from "react";
import useAuth from "../../hooks/useAuth";

// my booking component
const MyBooking = ({ myOrderedItem }) => {
  //destructuring useAuth
  const { dataContext } = useAuth();
  const { deleteBooking } = dataContext;
  const { _id, serviceTitle, status, imgUrl, address, cell } = myOrderedItem;

  return (
    <tr>
      <td>
        <img style={{ width: "110px", height: "80px" }} src={imgUrl} alt="" />
      </td>
      <td>{serviceTitle}</td>
      <td> {address}</td>
      <td>{cell}</td>
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
