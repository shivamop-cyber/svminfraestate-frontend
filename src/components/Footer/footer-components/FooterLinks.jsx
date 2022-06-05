import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import classes from "../footer.module.css";

const FooterLinks = () => {
  return (
    <div className={classes["footer-links"]}>
      <a
        className={classes["footerFacebook"]}
        href="https://www.facebook.com/GoGreen.athome"
      >
        <BsFacebook />
      </a>
      <a
        className={classes["footerTwitter"]}
        href="https://twitter.com/GoGreen_athome"
      >
        <BsTwitter />
      </a>
      <a
        className={classes["footerYoutube"]}
        href="https://www.youtube.com/channel/UCNVjkxu2TAZBmpNqUzuna7w"
      >
        <BsYoutube />
      </a>
      <a
        className={classes["footerPinterest"]}
        href="https://in.pinterest.com/gogreen_athome/"
      >
        <BsPinterest />
      </a>
      <a
        className={classes["footerLinkedin"]}
        href="https://www.linkedin.com/company/svm-infraestate-pvt-ltd-/"
      >
        <BsLinkedin />
      </a>
      <a
        className={classes["footerInstagram"]}
        href="https://www.instagram.com/gogreen_athome/"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default FooterLinks;
