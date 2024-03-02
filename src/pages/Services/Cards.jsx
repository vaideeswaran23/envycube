import React, { useRef, useEffect, useState } from "react";
import styles from "./Services.module.scss";

const Card = ({ imageSrc, header, description }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt="Card" className={styles.cardImage} />
      <div
        ref={ref}
        className={`${styles.cardContent} ${isVisible ? styles.visible : ""}`}
      >
        <h2 className={styles.cardHeader}>{header}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <div className={styles.heroSection}>
    <div className={styles.quoteContainer}>
      <h2 className={styles.quote}>
        “Crafting architectural marvels that stand the test of time. Your story
        is our canvas, let us paint it with innovation and vision.”
      </h2>
      <p className={styles.author}>— Envycube Architects</p>
    </div>
  </div>
);

const CardContainer = ({ cards }) => (
  <div className={styles.cardContainer}>
    <h1 className={styles.servicesHeading}>Services</h1>
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          header={card.header}
          description={card.description}
        />
      ))}
    </div>
    <HeroSection />
  </div>
);

export default CardContainer;
