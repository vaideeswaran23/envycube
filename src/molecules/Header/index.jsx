import React, { useState } from "react";
import AppMenu from "./AppMenu";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";
import { useLocation } from "react-router";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={`${styles.headerContainer}`}
        style={{ color: pathname === "/home" && !showMenu ? "#fff" : "" }}
      >
        <h3>Envy Cube</h3>
        <div className={styles.rightContainer}>
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
