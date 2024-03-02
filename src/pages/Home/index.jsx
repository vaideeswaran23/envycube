import React from "react";
import { Link } from "react-router-dom";
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
    to: "/1",
  },
  {
    src: bedRoomImage2,
    alt: "bedRoomImage2",
    to: "/works/1",
  },
  {
    src: diningImage,
    alt: "diningImage",
    to: "/works/5",
  },
  {
    src: kitchenImage,
    alt: "kitchenImage",
    to: "/works/4",
  },
  {
    src: livingImage,
    alt: "livingImage",
    to: "/works/2",
  },
  {
    src: othersImage,
    alt: "othersImage",
    to: "/works/6",
  },
];

const Home = () => (
  <div className={styles.homeContainer}>
    <Carousel
      // autoplay
      rootClassName={styles.carouselContainer}
      className={styles.carouselSlickList}
    >
      {images.map(({ src, alt, to }) => (
        <Link key={alt} className={styles.link} to={to}>
          <img src={src} alt={alt} loading="lazy" />
        </Link>
      ))}
    </Carousel>
  </div>
);

export default withLoadGifScreen(Home);
