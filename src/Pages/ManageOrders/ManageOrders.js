import React from "react";
import useAuth from "../../hooks/useAuth";
import Orders from "../Orders/Orders";

const ManageOrders = () => {
  const { dataContext } = useAuth();
  const { ordersData } = dataContext;
  return (
    <div>
      <h2>{ordersData?.length}</h2>
      {ordersData?.map((orderData) => (
        <Orders orderData={orderData} key={orderData._id} />
      ))}
    </div>
  );
};

export default ManageOrders;
