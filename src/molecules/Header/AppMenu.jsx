import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import styles from "./Header.module.scss";

const MenuItems = ["home", "about"];

const AppMenu = ({ open, onClickLink }) => {
  // const [state, setState] = useState("home");
  return (
    <Drawer open={open} placement="bottom">
      <nav>
        {MenuItems.map((menu) => (
          <NavLink
            key={menu}
            className={styles.link}
            onClick={onClickLink}
            to={`/${menu}`}
          >
            {menu}
          </NavLink>
        ))}
      </nav>
    </Drawer>
  );
};

export default AppMenu;
