import React from "react";
import classes from "../footer.module.css";

const FooterContactUs = () => {
  return (
    <>
      <h3 className={classes["footer-subheading"]}>Contact Us</h3>
      <h4>Address</h4>
      <p className={classes["footerContactUs-address"]}>
        <a
          href="https://goo.gl/maps/VCU6tHoKt5Ggrxau7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Office No - 05, 2nd Floor, A-Square Mall, Sector 73, Noida, Uttar
          Pradesh 201306.
        </a>
      </p>
      <h4>Email</h4>
      <div className={classes["footerContactUs-mails"]}>
        <p>
          <a
            href="mailto:info@svminfraestate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@svminfraestate.com
          </a>
        </p>
        <p>
          <a
            href="mailto:garg.mradul@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            garg.mradul@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default FooterContactUs;
