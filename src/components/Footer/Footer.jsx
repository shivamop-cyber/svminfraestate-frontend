import React from "react";
import FooterAboutUs from "./footer-components/FooterAboutUs";
import FooterContactUs from "./footer-components/FooterContactUs";
import FooterKnowMore from "./footer-components/FooterKnowMore";
import FooterLinks from "./footer-components/FooterLinks";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes["footer"]}>
        <div className={classes["footerAboutUs"]}>
          <FooterAboutUs />
        </div>
        <div className={classes["footerKnowMore"]}>
          <FooterKnowMore />
        </div>
        <div className={classes["footerContactUs"]}>
          <FooterContactUs />
        </div>
        <div className={classes["footerImage"]}>
          <img
            src="https://static.wixstatic.com/media/6c10ab_a908acbe5c244881941ff20984ba0015~mv2.png/v1/fill/w_356,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/iso2015-1024x395.png"
            alt="ISO 9001 Certified"
          />
        </div>
      </div>

      <div className={classes["footerLinks"]}>
        <FooterLinks />
      </div>
    </>
  );
};

export default Footer;
