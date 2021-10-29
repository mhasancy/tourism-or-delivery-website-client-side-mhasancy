import React from "react";

const Orders = ({ orderData }) => {
  const { serviceTitle, serviceId, status } = orderData;
  return (
    <div className="card">
      <h2>Order name : {serviceTitle}</h2>
      <h2>Order Id : {serviceId}</h2>
      <h2>Order Status :{status}</h2>
    </div>
  );
};
export default Orders;
