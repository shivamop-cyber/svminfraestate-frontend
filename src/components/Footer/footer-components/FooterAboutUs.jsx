import React from "react";
import classes from "../footer.module.css";

const FooterAboutUs = () => {
  return (
    <>
      <h3 className={classes["footer-subheading"]}>About Us</h3>
      <p className={classes["footerAboutUs-content"]}>
        Mission - To provide a complete solution for organic waste collection,
        segregation, processing at the site (bulk waste generator), like group
        housing society, corporate houses, industrial houses, institutions, RWA
        (resident welfare associations), Hotels, etc. Currently working on well
        being of cows by deleveloping self-dependent models for them
      </p>
    </>
  );
};

export default FooterAboutUs;
