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
    <div className="radius-card container mt-5 pt-1 pb-5 px-5">
      <h1 className="fw-bold d-none d-md-block text-center  mt-5 ">
        Manage All Bookings
        <span className="gradient-txt">.</span>
      </h1>
      <h1
        style={{ fontSize: "2.5rem" }}
        className="fw-bold d-block d-md-none text-center  mt-5 "
      >
        Manage All Bookings
        <span className="gradient-txt">.</span>
      </h1>
      <p className="text-center w-75 mx-auto ">
        Here you can know total booked items,update booking status and also can
        delete a respective booking.
      </p>
      <p className="fs-4">
        {" "}
        <strong>Total Bookings</strong>: {ordersData?.length}
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
            {ordersData?.map((orderData) => (
              <ManageBooking orderData={orderData} key={orderData._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
