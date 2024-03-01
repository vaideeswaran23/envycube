import React from "react";
import aboutImage from "../../assets/works/about/about.jpg";
import withLoadGifScreen from "../../atoms/LoadGifScreen";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h2>
          Envycube Architects <br></br> Overview
        </h2>
        <p className={styles.one}>
          Envycube Architects is a distinguished architecture firm specializing
          in residential, retail, and commercial projects on a national and
          international scale. Dive into our portfolio to witness the essence of
          innovative design and unparalleled quality.
        </p>
        <p className={styles.two}>
          Our team's relentless pursuit of excellence has garnered us numerous
          accolades and industry recognition. Here, creativity meets precision
          to create architectural marvels that stand the test of time
        </p>
        <p className={styles.three}>
          Embark on a visual journey through our projects and witness the
          seamless blend of artistry and functionality. Your architectural
          aspirations find a perfect home with Envycube Architects.
        </p>
      </div>
      <img className={styles.image} src={aboutImage} alt="about" />
    </div>
  );
};

export default withLoadGifScreen(About);
