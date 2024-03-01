import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <center>
        &copy; {currentYear} Envycube Architects. All rights reserved.
      </center>
    </footer>
  );
};

export default Footer;
