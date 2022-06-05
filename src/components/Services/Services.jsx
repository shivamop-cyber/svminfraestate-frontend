import React, { useState } from "react";
import ServiceBox from "./ServiceBox";
import serviceapi from "./serviceapi";
import classes from "./services.module.css";

const Services = () => {
  const [service] = useState(serviceapi);

  return (
    <>
      <h1 className={classes["services-heading"]}>
        Waste Management Services - OWC Machines - Variety of Waste Management
        Products
      </h1>
      <div className={classes["service"]}>
        <ServiceBox services={service} />
      </div>
    </>
  );
};

export default Services;
