import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./Header.sass";
import img from "../../images/pexels-flo-maderebner-869258.jpg";
import Particles from "react-particles-js";
const Header = () => {
  const baseBrightColor = "#F5D9A4";
  const baseDarkColor = "#2e2d2c";
  const header_tab = [
    {
      path: "/",
      img: img,
      height: 120,
      color: baseBrightColor,
      flakes: 120,
    },
    {
      path: "/experience",
      img: img,
      height: 120,
      color: baseBrightColor,
      flakes: 140,
    },
    {
      path: "/contact",
      img: img,
      height: 120,
      color: baseBrightColor,
      flakes: 80,
    },
  ];
  const head_rout = header_tab.map((item) => (
    <Route
      path={`${process.env.PUBLIC_URL}${item.path}`}
      exact
      render={() => (
        <header className="header" style={{ height: `${item.height}vh` }}>
          <div
            className="header__picture"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="header__dark">
            <Particles
              params={{
                particles: {
                  number: {
                    value: item.flakes,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000",
                    },
                    polygon: {
                      nb_sides: 5,
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100,
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 4,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 80,
                      size_min: 0.1,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: false,
                    distance: 300,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 2,
                  },
                  move: {
                    enable: true,
                    speed: 3,
                    direction: "bottom",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble",
                    },
                    onclick: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 800,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 150,
                      size: 7,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.2,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
                    },
                  },
                },
                retina_detect: true,
              }}
            />
          </div>
          <div className="header__head">
            <h1 className="header__head-title">Mountains Paths</h1>
          </div>
        </header>
      )}
    />
  ));
  return <>{head_rout}</>;
};

export default Header;
