import React from "react";
import { Carousel } from "antd";
import bedRoomImage1 from "../../assets/works/hero/bedroom1.jpeg";
import bedRoomImage2 from "../../assets/works/hero/bedroom2.jpeg";
import diningImage from "../../assets/works/hero/dining.jpeg";
import withLoadGifScreen from "../../hoc/withLoadGifScreen";
import styles from "./Home.module.scss";

const images = [bedRoomImage1, bedRoomImage2, diningImage];

const Home = () => (
  <div className={styles.homeContainer}>
    <Carousel
      autoplay
      rootClassName={styles.carouselContainer}
      className={styles.carouselSlickList}
    >
      {images.map((path, index) => (
        <img key={index} src={path} alt="images" loading="lazy" />
      ))}
    </Carousel>
  </div>
);

export default withLoadGifScreen(Home);
