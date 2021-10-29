import React from "react";
import useAuth from "../../hooks/useAuth";

const Orders = ({ orderData }) => {
  const { dataContext } = useAuth();
  const { deleteOrder, handleStatusUpdate } = dataContext;
  const { serviceTitle, serviceId, status, _id } = orderData;
  return (
    <div className="card">
      <h2>Order name : {serviceTitle}</h2>
      <h2>Order Id : {serviceId}</h2>
      <h2>Order Status :{status}</h2>
      <button onClick={() => deleteOrder(_id)}>Delete Order</button>
      {status === "Approved" ? (
        <button disabled>Approved</button>
      ) : (
        <button onClick={() => handleStatusUpdate(_id)}>Approve Order</button>
      )}
    </div>
  );
};
export default Orders;
