import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import styles from "./Header.module.scss";
import {
  // FacebookOutlined,
  InstagramOutlined,
  // YoutubeOutlined,
} from "@ant-design/icons";

const MenuItems = ["home", "about", "services", "works", "contact"];

const AppMenu = ({ open, onClickLink }) => {
  return (
    <Drawer
      rootClassName={styles.drawerContainer}
      headerStyle={{ display: "none" }}
      open={open}
      placement="bottom"
    >
      <div className={styles.appMenuContent}>
        <nav>
          {MenuItems.map((menu) => (
            <div key={menu}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                onClick={onClickLink}
                to={`/${menu}`}
              >
                {menu.toLocaleUpperCase()}
              </NavLink>
            </div>
          ))}
        </nav>
        <p className={styles.rightText}>
          ARCHITECTURE | INTERIOR | PLANNING | CONSTRUCTION
        </p>
        <footer>
          {/* <FacebookOutlined /> */}
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/envycube_architects"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <InstagramOutlined />
          </a>
          {/* <YoutubeOutlined /> */}
        </footer>
      </div>
    </Drawer>
  );
};

export default AppMenu;
