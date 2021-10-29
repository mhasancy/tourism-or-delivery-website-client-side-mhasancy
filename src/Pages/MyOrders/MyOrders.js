import React from "react";
import useAuth from "../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { dataContext, firebaseContext } = useAuth();
  const { user } = firebaseContext;

  const { ordersData } = dataContext;
  const myOrderedItems = ordersData?.filter(
    (myOrderedItem) => myOrderedItem.email === user.email
  );
  return (
    <div>
      <h2>{myOrderedItems?.length}</h2>
      {myOrderedItems?.map((myOrderedItem) => (
        <MyOrder
          myOrderedItem={myOrderedItem}
          key={myOrderedItem?._id}
        ></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;
