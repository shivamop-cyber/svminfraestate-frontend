import React from "react";
import classes from "./services.module.css";

const ServiceBox = ({ services }) => {
  return (
    <>
      {services.map((val) => {
        return (
          <>
            <article className={classes["servicesBox"]} id={val.id}>
              <h3 className={classes["servicesBox-title"]}>{val.title}</h3>
              <hr />
              <p className={classes["servicesBox-des"]}>{val.description}</p>
              <div className={classes["servicesBox-img"]}>
                <img src={val.image} alt="" />
              </div>
            </article>
          </>
        );
      })}
    </>
  );
};

export default ServiceBox;
