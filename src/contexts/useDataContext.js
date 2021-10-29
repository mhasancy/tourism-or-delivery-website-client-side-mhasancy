import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const useDataContext = () => {
  const [servicesData, setServicesData] = useState();
  const [addedService, setAddedService] = useState({});
  const [ordersData, setOrdersData] = useState();
  const [orderStatus, setOrderStatus] = useState("Pending");
  const { reset } = useForm();

  const handleAddedService = (data) => {
    axios.post("http://localhost:5000/services", data).then((response) => {
      setAddedService(response?.data);
    });
    alert("data added");
    reset();
  };

  //delete user order
  const deleteOrder = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete");
    if (confirmation) {
      axios.delete(`http://localhost:5000/orders/${_id}`).then((response) => {
        console.log(response.data);
        if (response.data.deletedCount > 0) {
          const remainingOrders = ordersData.filter(
            (order) => order?._id === _id
          );
          setOrdersData(remainingOrders);
          alert("order deleted");
        }
      });
    }
  };
  const handleStatusUpdate = (_id) => {
    axios
      .put(`http://localhost:5000/orders/${_id}`, { status: "Approved" })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setOrderStatus("Aprroved");
        }
      });
  };

  //service data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((response) => setServicesData(response?.data));
  }, [handleAddedService]);

  //individual orders data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => setOrdersData(response?.data));
  }, [deleteOrder, handleStatusUpdate]);

  return {
    servicesData,
    ordersData,
    deleteOrder,
    handleAddedService,
    addedService,
    handleStatusUpdate,
    orderStatus,
  };
};

export default useDataContext;
