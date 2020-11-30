import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.sass";

const SideDrawer = (props) => {
  let menuClasses = "menu";
  let listItem = "menu__list-listItem";
  let list = "menu__list";
  let socials = "socialIcons__icon";
  if (props.show) {
    menuClasses = "menu open";
    listItem = "menu__list-listItem visible";
    list = "menu__list visible";
    socials = "socialIcons__icon visible";
  }

  const navList = [
    { name: "About", path: "/", exact: true, close: props.close },
    { name: "Experience", path: "/experience", close: props.close },
    { name: "Contact", path: "/contact", close: props.close },
  ];
  const links = navList.map((item) => (
    <li key={item.name} className={listItem}>
      <NavLink
        to={`${process.env.PUBLIC_URL}${item.path}`}
        onClick={item.close}
        exact={item.exact ? item.exact : false}
      >
        {item.name} <span></span>
      </NavLink>
    </li>
  ));

  const menu_social_links = [
    {
      path: "https://www.facebook.com",
      classes: "fab fa-facebook",
    },
    {
      path: "https://www.instagram.com",
      classes: "fab fa-instagram",
    },
  ];

  const menu_links = menu_social_links.map((item) => (
    <a href={item.path} className={socials}>
      <i className={item.classes}></i>
    </a>
  ));

  return (
    <nav className={menuClasses}>
      <ul className={list}>{links}</ul>
      <div className="menu__socialIcons">{menu_links}</div>
    </nav>
  );
};

export default SideDrawer;
