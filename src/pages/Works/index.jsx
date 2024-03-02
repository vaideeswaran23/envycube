// Works.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Works.module.scss";
import bedroomImage from "../../assets/works/bedroom/1.jpeg";
import livingroomImage from "../../assets/works/living room/1.jpeg";
import washroomImage from "../../assets/works/bathroom/1.jpeg";
import kitchenImage from "../../assets/works/kitchen/1.jpeg";
import diningroomImage from "../../assets/works/dining room/1.jpeg";
import utilityImage from "../../assets/works/utility areas/1.jpeg";
import withLoadGifScreen from "../../hoc/withLoadGifScreen";

const worksData = [
  { id: 1, image: bedroomImage, title: "Bedroom Design" },
  { id: 2, image: livingroomImage, title: "Living Room Design" },
  { id: 3, image: washroomImage, title: "Washroom Design" },
  { id: 4, image: kitchenImage, title: "Kitchen Design" },
  { id: 5, image: diningroomImage, title: "Dining hall Design" },
  { id: 6, image: utilityImage, title: "utility areas Design" },
];

const Works = () => {
  return (
    <div className={styles.works}>
      <h1 className={styles.title}>Our Works</h1>
      <div className={styles.worksGrid}>
        {worksData.map((work) => (
          <Link
            key={work.id}
            to={`/works/${work.id}`}
            className={styles.workLink}
          >
            <div className={styles.workImage}>
              <img src={work.image} alt={work.title} className={styles.image} />
              <div className={styles.overlay} />
              <div className={styles.workTitle}>{work.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default withLoadGifScreen(Works);
