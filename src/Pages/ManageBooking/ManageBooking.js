import React from "react";
import useAuth from "../../hooks/useAuth";

const ManageBooking = ({ orderData }) => {
  const { dataContext } = useAuth();
  const { deleteOrder, handleStatusUpdate } = dataContext;
  const { serviceTitle, status, _id, address, cell, imgUrl } = orderData;
  return (
    <tr>
      <th scope="row"></th>
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
          onClick={() => deleteOrder(_id)}
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
