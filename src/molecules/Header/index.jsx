import React, { useState } from "react";
import AppMenu from "./AppMenu";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <h3>Envy Cube</h3>
        <div className={styles.rightContainer}>
          Feedback Icon
          {showMenu ? (
            <CloseOutlined onClick={toggleShowMenu} />
          ) : (
            <MenuOutlined onClick={toggleShowMenu} />
          )}
        </div>
      </header>
      <AppMenu open={showMenu} onClickLink={toggleShowMenu} />
    </>
  );
};

export default Header;
