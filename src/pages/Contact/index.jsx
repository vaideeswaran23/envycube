import React from "react";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import withLoadGifScreen from "../../hoc/withLoadGifScreen";
import styles from "./Contact.module.scss"; // Import SCSS styles

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactInfo}>
        <h1>Contact Us</h1>
        <p>
          Inform us of your architectural aspirations and what to anticipate
          post connection. Remember to designate a secure avenue for proposals.
        </p>
        {/* <p>Email: envycubearchitects@gmail.com</p>
        <p>Phone: +919626830630</p>
        <p>Phone: +919944949459</p> */}
        <div className={styles.communication}>
          <MailOutlined />
          <a href="mailto:envycubearchitects@gmail.com">
            envycubearchitects@gmail.com
          </a>
        </div>
        <div className={styles.communication}>
          <PhoneOutlined />
          <a href="tel:+919944949459">+91-9944949459</a>
        </div>
        <div className={styles.communication}>
          <PhoneOutlined />
          <a href="tel:+919626830630">+91-9626830630</a>
        </div>
        {/* <p>
          No.34/1, 1st Floor, Saffa Arcade, Othakadai, Cantonment, Trichy - 01
        </p> */}
        <div style={{ margin: "1rem 0" }}>
          <EnvironmentOutlined />
          <a
            href="https://www.google.com/maps/dir//10.8039722,78.68775/@10.8039722,78.68775,16z?entry=ttu"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "1rem", textDecoration: "none" }}
          >
            No.34/1, 1st Floor, Saffa Arcade, Othakadai, Cantonment, Trichy - 01
          </a>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          title="Envy cube Map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.095989275155!2d78.6851656750423!3d10.803959889346466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzE0LjMiTiA3OMKwNDEnMTUuOSJF!5e0!3m2!1sen!2sin!4v1709904355031!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default withLoadGifScreen(Contact);
