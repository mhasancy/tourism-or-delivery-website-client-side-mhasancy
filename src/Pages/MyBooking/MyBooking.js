import React from "react";
import useAuth from "../../hooks/useAuth";

const MyBooking = ({ myOrderedItem }) => {
  const { dataContext } = useAuth();
  const { deleteOrder } = dataContext;
  const { _id, serviceTitle, status, imgUrl, address, cell } = myOrderedItem;

  return (
    <tr>
      <th scope="row">
        {/* {[...Array(10)].map((e, i) => {
          return <li key={i}>{i}</li>;
        })} */}
      </th>
      <td>
        <img style={{ width: "100px" }} src={imgUrl} alt="" />
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
        </button>
      </td>
    </tr>
  );
};

export default MyBooking;
