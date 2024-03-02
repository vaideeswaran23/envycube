import React from "react";
import aboutImage from "../../assets/works/about/about.jpg";
import withLoadGifScreen from "../../hoc/withLoadGifScreen";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <h1 className={styles.heading1}>About Us</h1>
      <div className={styles.contentContainer}>
        <section className={styles.leftSection}>ECA</section>
        <section className={styles.rightSection}>
          <h2>We Envycube architects</h2>
          <p>
            With more than 7 years of experience. At Envy Cube, we believe in
            the transformative power of architecture to enrich lives and shape
            communities.
          </p>
          <p>
            With a commitment to innovation, sustainability, and excellence in
            design, we strive to create spaces that inspire, engage, and endure
          </p>
        </section>
      </div>
      {/* <div className={styles.content}>
        <h2 className={styles.heading2}>
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
          accolades and industry recognition.{" "}
          <span className={styles.highlight}>
            Here, Creativity meets precision to create architectural marvels
          </span>{" "}
          that stand the test of time
        </p>
        <p className={styles.three}>
          Embark on a visual journey through our projects and witness the
          seamless blend of artistry and functionality. Your architectural
          aspirations find a perfect home with Envycube Architects.
        </p>
      </div> */}
      <div className={styles.teamSection}>
        <h3>SCROLL TO MEET OUR TEAM</h3>
        <section className={styles.imagesList}>
          <div className={styles.imageContainer}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${aboutImage})` }}
            >
              <div className={styles.name}>M.A. Mohamed Javed B.Arch</div>
            </div>
            <div className={styles.position}>ARCHITECT</div>
          </div>
          <div className={styles.imageContainer}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${aboutImage})` }}
            >
              <div className={styles.name}>A.Faris Ahamed B.Arch</div>
            </div>
            <div className={styles.position}>ARCHITECT</div>
          </div>
          {/* <img className={styles.image} src={aboutImage} alt="about" />
          <img className={styles.image} src={aboutImage} alt="about" /> */}
        </section>
      </div>
    </div>
  );
};

export default withLoadGifScreen(About);
