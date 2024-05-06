import React, { useEffect, useState } from "react";
import Status from "./Status";
import axios from "axios";

const Statuses = () => {
  const [statuses, setStatuses] = useState([]);

  const fetchStatuses = async () => {
    try {
      const response = await axios.get("http://localhost:9191/statuses");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStatuses().then((data) => setStatuses(data));
  }, []);

  useEffect(() => {
    console.log("statuses: ", statuses);
  }, [statuses]);

  return (
    <div className="flex flex-col gap-y-4">
      {statuses && statuses.map((status) => <Status key={status.id} post={status} />)}
    </div>
  );
};

export default Statuses;
