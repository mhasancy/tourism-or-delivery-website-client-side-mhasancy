import React from "react";
import useAuth from "../../hooks/useAuth";
import ManageBooking from "../ManageBooking/ManageBooking";

const ManageBookings = () => {
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

      <h2>{ordersData?.length}</h2>
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
          {ordersData?.map((orderData) => (
            <ManageBooking orderData={orderData} key={orderData._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;
