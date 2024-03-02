// WorksDetail.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons"; // Import the arrow icon
import styles from "./WorksDetail.module.scss"; // Adjust module path accordingly
import bedroom1 from "../../assets/works/bedroom/1.jpeg";
import bedroom2 from "../../assets/works/bedroom/2.jpeg";
import bedroom3 from "../../assets/works/bedroom/3.jpeg";
import bedroom4 from "../../assets/works/bedroom/4.jpeg";
import bedroom5 from "../../assets/works/bedroom/5.jpeg";
import bedroom6 from "../../assets/works/bedroom/6.jpeg";
import bedroom7 from "../../assets/works/bedroom/7.jpeg";
import livingRoom1 from "../../assets/works/living room/1.jpeg";
import livingRoom2 from "../../assets/works/living room/2.jpeg";
import livingRoom3 from "../../assets/works/living room/3.jpeg";
import livingRoom4 from "../../assets/works/living room/4.jpeg";
import livingRoom5 from "../../assets/works/living room/5.jpeg";
import livingRoom6 from "../../assets/works/living room/6.jpeg";
import livingRoom7 from "../../assets/works/living room/7.jpeg";
import bathroom1 from "../../assets/works/bathroom/1.jpeg";
import bathroom2 from "../../assets/works/bathroom/2.jpeg";
import bathroom3 from "../../assets/works/bathroom/3.jpeg";
import bathroom4 from "../../assets/works/bathroom/4.jpeg";
import kitchen1 from "../../assets/works/kitchen/1.jpeg";
import kitchen2 from "../../assets/works/kitchen/2.jpeg";
import diningRoom1 from "../../assets/works/dining room/1.jpeg";
import diningRoom2 from "../../assets/works/dining room/2.jpeg";
import diningRoom3 from "../../assets/works/dining room/3.jpeg";
import utility1 from "../../assets/works/utility areas/1.jpeg";
import utility2 from "../../assets/works/utility areas/2.jpeg";
import utility3 from "../../assets/works/utility areas/3.jpeg";
import utility4 from "../../assets/works/utility areas/4.jpeg";
import utility5 from "../../assets/works/utility areas/5.jpeg";
import utility6 from "../../assets/works/utility areas/6.jpeg";
import utility7 from "../../assets/works/utility areas/7.jpeg";
import NotFound from "../../molecules/NotFound";

const idDesignMap = {
  1: {
    title: "Bedroom",
    images: [
      bedroom1,
      bedroom2,
      bedroom3,
      bedroom4,
      bedroom5,
      bedroom6,
      bedroom7,
    ],
  },
  2: {
    title: "Living Room",
    images: [
      livingRoom1,
      livingRoom2,
      livingRoom3,
      livingRoom4,
      livingRoom5,
      livingRoom6,
      livingRoom7,
    ],
  },
  3: {
    title: "Bathroom",
    images: [bathroom1, bathroom2, bathroom3, bathroom4],
  },
  4: {
    title: "Kitchen",
    images: [kitchen1, kitchen2],
  },
  5: {
    title: "Dining Room",
    images: [diningRoom1, diningRoom2, diningRoom3],
  },
  6: {
    title: "Utility Areas",
    images: [
      utility1,
      utility2,
      utility3,
      utility4,
      utility5,
      utility6,
      utility7,
    ],
  },
  // Add more works similarly
};

const WorksDetail = () => {
  const { id } = useParams();

  const work = idDesignMap[id];

  if (!work) {
    // If ID does not exist in idDesignMap, render NotFound component
    return <NotFound />;
  }

  return (
    <div className={styles.worksDetail}>
      <h1 className={styles.mainTitle}>{work.title}</h1>
      <Row gutter={[16, 16]}>
        {work.images.map((image, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={24}>
            <div className={styles.imageContainer}>
              <img
                src={image}
                alt={`${work.title}-${index + 1}`}
                className={styles.image}
              />
            </div>
          </Col>
        ))}
      </Row>
      <Link to="/works" className={`${styles.backButton} ${styles.backLink}`}>
        <ArrowLeftOutlined />
      </Link>
    </div>
  );
};

export default WorksDetail;
