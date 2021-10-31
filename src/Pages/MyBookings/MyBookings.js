//imported file
import React from "react";
import useAuth from "../../hooks/useAuth";
import MyBooking from "../MyBooking/MyBooking";

//myBookings component
const MyBookings = () => {
  //destructuring data from useAuth
  const { dataContext, firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { ordersData } = dataContext;
  //filtering my orders data
  const myOrderedItems = ordersData?.filter(
    (myOrderedItem) => myOrderedItem.email === user.email
  );

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
      <p className="fs-4">
        {" "}
        <strong>Total Bookings</strong>: {myOrderedItems?.length}
      </p>
      <div className="table-responsive-md">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name & Picture</th>
              <th scope="col">Booking Info</th>
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
    </div>
  );
};

export default MyBookings;
