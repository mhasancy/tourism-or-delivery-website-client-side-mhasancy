//imported file
import React from "react";
import useAuth from "../../hooks/useAuth";
import ManageBooking from "../ManageBooking/ManageBooking";

//managing bookings component
const ManageBookings = () => {
  //destructuring
  const { dataContext } = useAuth();
  const { ordersData } = dataContext;
  return (
    <div className="shadow radius-card container mt-5 pt-1 pb-5 px-5">
      <h1 className="fw-bold text-center  mt-5 ">
        Manage All Bookings
        <span className="gradient-txt"> .</span>
      </h1>
      <p className="text-center w-50 mx-auto ">
        Here you can know total booked items,update booking status and also can
        delete a respective booking.
      </p>
      <p className="fs-4">
        {" "}
        <strong>Total Bookings</strong>: {ordersData?.length}
      </p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Tour Name</th>
            <th scope="col">User's Info</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {ordersData?.map((orderData) => (
            <ManageBooking orderData={orderData} key={orderData._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;
