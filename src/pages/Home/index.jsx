import React from "react";
import { Carousel } from "antd";
import bedRoomImage1 from "../../assets/works/hero/bedroom1.jpeg";
import bedRoomImage2 from "../../assets/works/hero/bedroom2.jpeg";
import diningImage from "../../assets/works/hero/dining.jpeg";
import kitchenImage from "../../assets/works/hero/kitchen.jpeg";
import livingImage from "../../assets/works/hero/living.jpeg";
import othersImage from "../../assets/works/hero/others.jpeg";
import withLoadGifScreen from "../../hoc/withLoadGifScreen";
import styles from "./Home.module.scss";

const images = [
  {
    src: bedRoomImage1,
    alt: "bedRoomImage1",
  },
  {
    src: bedRoomImage2,
    alt: "bedRoomImage2",
  },
  {
    src: diningImage,
    alt: "diningImage",
  },
  {
    src: kitchenImage,
    alt: "kitchenImage",
  },
  {
    src: livingImage,
    alt: "livingImage",
  },
  {
    src: othersImage,
    alt: "othersImage",
  },
];

const Home = () => (
  <div className={styles.homeContainer}>
    <Carousel
      autoplay
      rootClassName={styles.carouselContainer}
      className={styles.carouselSlickList}
    >
      {images.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} loading="lazy" />
      ))}
    </Carousel>
  </div>
);

export default withLoadGifScreen(Home);
