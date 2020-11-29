import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.sass";
import img from "../../images/pexels-flo-maderebner-869258.jpg";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  let menuPhoto = "side-drawer-imageHolder";
  let listItem = "side-drawer-listItem";
  let list = "side-drawer-list";
  if (props.show) {
    drawerClasses = "side-drawer open";
    menuPhoto = "side-drawer-imageHolder visible";
    listItem = "side-drawer-listItem visible";
    list = "side-drawer-list visible";
  }

  const navList = [
    { name: "About", path: "/mp-project", exact: true, close: props.close },
    { name: "Experience", path: "/experience", close: props.close },
    { name: "Contact", path: "/contact", close: props.close },
  ];
  const links = navList.map((item) => (
    <li key={item.name} className={listItem}>
      <NavLink
        to={item.path}
        onClick={item.close}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={drawerClasses}>
      <ul className={list}>{links}</ul>
      <div
        className={menuPhoto}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </nav>
  );
};

export default SideDrawer;
