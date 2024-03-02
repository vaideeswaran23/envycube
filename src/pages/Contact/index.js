import React from "react";
import styles from "./Contact.module.scss"; // Import SCSS styles
import withLoadGifScreen from "../../hoc/withLoadGifScreen";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactInfo}>
        <h1>Contact Us</h1>
        <p>
          Inform us of your architectural aspirations and what to anticipate
          post connection. Remember to designate a secure avenue for proposals.
        </p>
        <p>Email: envycubearchitects@gmail.com</p>
        <p>Phone: +919626830630</p>
        <p>Phone: +919944949459</p>
        <p>
          No.34/1, 1st Floor, Saffa Arcade, Othakadai, Cantonment, Trichy - 01.
        </p>
      </div>
      <div className={styles.mapContainer}>
        {/* Add Google Map component here */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18642.66166843!2d78.68951710747129!3d10.800829715176153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709395536036!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default withLoadGifScreen(Contact);
