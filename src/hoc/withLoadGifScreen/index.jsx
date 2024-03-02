import React, { useEffect, useState } from "react";
import logoGif from "../../assets/works/logo/logo.gif";
import styles from "./LoadGifscreen.module.scss";

const withLoadGifScreen = (Component) => (props) => {
  const [showGif, setShowGif] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      setShowContent(true);
    }, 2000);
  }, []);

  return (
    <>
      {showGif && (
        <section className={styles.wrapper}>
          <div className={styles.gifContainer}>
            <img src={logoGif} alt="Loading..." />
            <h3 className={styles.title1}>ENVYCUBE</h3>
            <div className={styles.title2}>ARCHITECTS</div>
          </div>
        </section>
      )}
      {showContent && <Component {...props} />}
    </>
  );
};

export default withLoadGifScreen;
