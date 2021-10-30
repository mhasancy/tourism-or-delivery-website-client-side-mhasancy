import React from "react";
import useAuth from "../../hooks/useAuth";
import MyBooking from "../MyBooking/MyBooking";

const MyBookings = () => {
  const { dataContext, firebaseContext } = useAuth();
  const { user } = firebaseContext;

  const { ordersData } = dataContext;
  const myOrderedItems = ordersData?.filter(
    (myOrderedItem) => myOrderedItem.email === user.email
  );
  // const number = myOrderedItems.map((e, i) => i);
  // console.log(number);
  return (
    <div className="shadow radius-card container mt-5 pt-1 pb-5 px-5">
      <h1 className="fw-bold text-center  mt-5 ">
        Manage Your Booked Tour
        <span className="gradient-txt"> .</span>
      </h1>
      <p className="text-center w-50 mx-auto ">
        Here you can know your total booked items, booking status and also can
        delete respective booking.
      </p>

      <h2>{myOrderedItems?.length}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Tour Name</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {myOrderedItems?.map((myOrderedItem) => (
            <MyBooking
              myOrderedItem={myOrderedItem}
              key={myOrderedItem?._id}
            ></MyBooking>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
