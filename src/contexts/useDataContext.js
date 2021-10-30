import axios from "axios";
import { useEffect, useState } from "react";
const useDataContext = () => {
  const [servicesData, setServicesData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [orderStatus, setOrderStatus] = useState("Pending");

  //delete user order
  const deleteOrder = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete");
    if (confirmation) {
      axios
        .delete(`https://morning-headland-33289.herokuapp.com/orders/${_id}`)
        .then((response) => {
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
      .put(`https://morning-headland-33289.herokuapp.com/orders/${_id}`, {
        status: "Approved",
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setOrderStatus("Aprroved");
        }
      });
  };

  //service data load
  useEffect(() => {
    axios
      .get("https://morning-headland-33289.herokuapp.com/services")
      .then((response) => setServicesData(response?.data));
  }, [servicesData]);
  //service data load
  useEffect(() => {
    axios
      .get("https://morning-headland-33289.herokuapp.com/team")
      .then((response) => setTeamData(response?.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://morning-headland-33289.herokuapp.com/blogs")
      .then((response) => setBlogsData(response?.data));
  }, []);

  //individual orders data load
  useEffect(() => {
    axios
      .get("https://morning-headland-33289.herokuapp.com/orders")
      .then((response) => setOrdersData(response?.data));
  }, [ordersData, orderStatus]);

  return {
    servicesData,
    ordersData,
    teamData,
    blogsData,
    deleteOrder,
    handleStatusUpdate,
    orderStatus,
  };
};

export default useDataContext;
