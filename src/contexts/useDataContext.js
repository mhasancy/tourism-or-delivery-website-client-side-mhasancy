import axios from "axios";
import { useEffect, useState } from "react";

const useDataContext = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    axios
      .get("https://morning-headland-33289.herokuapp.com/services")
      .then((response) => setServices(response.data));
  }, []);
  return {
    services,
  };
};

export default useDataContext;
