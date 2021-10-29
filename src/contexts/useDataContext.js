import axios from "axios";
import { useEffect, useState } from "react";

const useDataContext = () => {
  const [servicesData, setServicesData] = useState();
  const [ordersData, setOrdersData] = useState();
  //service data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((response) => setServicesData(response?.data));
  }, []);

  //individual orders data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => setOrdersData(response?.data));
  }, []);
  return { servicesData, ordersData };
};

export default useDataContext;
