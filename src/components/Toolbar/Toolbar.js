import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import "./Toolbar.sass";

const navList = [
  { name: "About", path: "/", exact: true },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];
const links = navList.map((item) => (
  <li key={item.name} className="toolbar__navigation-listItem">
    <NavLink
      to={`${process.env.PUBLIC_URL}${item.path}`}
      className="toolbar__navigation-listItem-link"
      exact={item.exact ? item.exact : false}
    >
      {item.name}
    </NavLink>
  </li>
));

const Toolbar = (props) => {
  let nav = "toolbar";
  let DesktopMenu = "toolbar__navigation-items";
  let logo = "toolbar__logo";
  if (props.open) {
    DesktopMenu = "toolbar__navigation-items hidden";
    nav = "toolbar active";
    logo = "toolbar__logo active";
  }

  return (
    <header className={nav}>
      <nav className="toolbar__navigation">
        <div className={logo}>
          <Logo open={props.open} />
        </div>
        <span className="spacer"></span>
        <div className={DesktopMenu}>
          <ul className="toolbar__navigation-list">{links}</ul>
        </div>

        <div className="toolbar__burger">
          <MenuButton
            open={props.open}
            click={props.drawerToggleHandler}
            color={props.color}
          />
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
