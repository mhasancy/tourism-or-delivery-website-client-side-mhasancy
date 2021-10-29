import React from "react";

const MyOrder = ({ myOrderedItem }) => {
  const { serviceTitle, status } = myOrderedItem;
  return (
    <div className="card">
      <h2>Order name : {serviceTitle}</h2>
      <h2>Order Status :{status}</h2>
    </div>
  );
};

export default MyOrder;
