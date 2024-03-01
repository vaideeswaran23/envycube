import React, { useEffect, useState } from "react";
import gif from "../../assets/works/logo/logo.png";

const withLoadGifScreen = (Component) => (props) => {
  const [showGif, setShowGif] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, [1500]);
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      setShowContent(true);
    }, 2000);
  }, []);

  const style = {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "1002",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  return (
    <>
      {showGif && (
        <div style={style}>
          <img
            style={{
              width: "15rem",
              height: "15rem",
              objectFit: "contain",
            }}
            src={gif}
            alt="Loading..."
          />
        </div>
      )}
      {showContent && <Component {...props} />}
    </>
  );
};

export default withLoadGifScreen;
