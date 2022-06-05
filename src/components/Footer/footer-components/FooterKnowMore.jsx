import React from "react";
import classes from "../footer.module.css";

const FooterKnowMore = () => {
  return (
    <>
      <h3 className={classes["footer-subheading"]}>Know More</h3>
      <div className={classes["footerKnowLinks"]}>
        <p>
          <a href="#aboutus">About Us</a>
        </p>
        <p>
          <a href="#aboutus">Terms and Condition</a>
        </p>
        <p>
          <a href="#aboutus">Privacy Policy</a>
        </p>
        <p>
          <a href="#aboutus">Return Policy</a>
        </p>
        <p>
          <a href="#aboutus">How To Buy</a>
        </p>
      </div>
    </>
  );
};

export default FooterKnowMore;
