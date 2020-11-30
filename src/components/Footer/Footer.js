import React from "react";
import "./Footer.sass";
import Logo from "../Logo/Logo";
import Particles from "react-particles-js";
import { animateScroll as scroll } from "react-scroll";
const Footer = (props) => {
  const footer_social_links = [
    {
      path: "https://www.facebook.com",
      classes: "fab fa-facebook",
    },
    {
      path: "https://www.instagram.com",
      classes: "fab fa-instagram",
    },
  ];

  const footer_link = footer_social_links.map((item) => (
    <li key={item.name} className="footer__socials-item">
      <a
        href={item.path}
        className="footer__socials-itemLink"
        data-aos={item.aos}
      >
        <i className={item.classes}></i>
      </a>
    </li>
  ));
  return (
    <footer className="footer">
      <div className="footer__logo">
        <div className="footer__logoHolder">
          <Logo scroll={props.scroll} />
        </div>
      </div>
      <ul className="footer__socials">{footer_link}</ul>
      <div className="footer__sign">
        <p>Copyright &#169; 2020 Paweł Leszko</p>
      </div>
      <div className="particle">
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
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
                speed: 2,
                direction: "top",
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
    </footer>
  );
};

export default Footer;
