import React from "react";
import useAuth from "../../hooks/useAuth";

const MyOrder = ({ myOrderedItem }) => {
  const { dataContext } = useAuth();
  const { deleteOrder } = dataContext;
  const { _id, serviceTitle, status } = myOrderedItem;

  return (
    <div className="card">
      <h2>Order name : {serviceTitle}</h2>
      <h2>Order Status :{status}</h2>
      <button onClick={() => deleteOrder(_id)}>Delete Order</button>
    </div>
  );
};

export default MyOrder;
