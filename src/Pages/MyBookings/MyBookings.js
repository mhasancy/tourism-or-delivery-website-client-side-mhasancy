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
    <div className="radius-card container mt-5 pt-1 pb-5 px-5">
      <h1 className="fw-bold d-none d-md-block text-center  mt-5 ">
        Manage Your Booked Tour
        <span className="gradient-txt">.</span>
      </h1>
      <h1
        style={{ fontSize: "2.3rem" }}
        className="fw-bold d-block d-md-none text-center  mt-5 "
      >
        Manage Your Booked Tour
        <span className="gradient-txt">.</span>
      </h1>
      <p className="text-center w-75 mx-auto ">
        Here you can know your total booked items, booking status and also can
        delete respective booking.
      </p>
      <p className="fs-4">
        {" "}
        <strong>Total Bookings</strong>: {myOrderedItems?.length}
      </p>
      <div className="table-responsive-md">
        <table className="table table-bordered border-card">
          <thead>
            <tr>
              <th style={{ width: "200px" }} scope="col align-middle">
                Tour Info
              </th>
              <th style={{ width: "650px" }} scope="col align-middle">
                Booking Info
              </th>
              <th style={{ width: "130px" }} scope="col align-middle">
                Status
              </th>
              <th style={{ width: "150px" }} scope="col align-middle">
                Action
              </th>
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
