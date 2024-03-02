// NotFound.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss"; // Adjust module path accordingly

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.link}>
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFound;
