import React, { Fragment, useEffect } from "react";
import "../styles/HomePage.sass";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../images/ama-dablam-2064522_1920.jpg";
import img2 from "../images/yellowstone-national-park-1581879_1920.jpg";
import img3 from "../images/boat-4899802_1920.jpg";
import img4 from "../images/schilthorn-3033448_1920.jpg";
import img5 from "../images/bled-1899264_1920.jpg";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const storyItem = [
    {
      picture: img3,
      text1:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi culpa dolores aperiam? Consequuntur, rem alias.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus, quis? Qui sint tempore recusandae numquam quisqua minima aliquam voluptates eaque, rerum maiores deserunt voluptatem laudantium! Pariatur beatae commodi maiores illo",
      aosEffect: "fade-up",
      aosTime: "2000",
    },
    {
      picture: img4,
      text1:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi culpa dolores aperiam? Consequuntur, rem alias.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus, quis? Qui sint tempore recusandae numquam quisqua minima aliquam voluptates eaque, rerum maiores deserunt voluptatem laudantium! Pariatur beatae commodi maiores illo",
      aosEffect: "flip-left",
      aosTime: "1000",
    },
    {
      picture: img5,
      text1:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi culpa dolores aperiam? Consequuntur, rem alias.",
      text2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus, quis? Qui sint tempore recusandae numquam quisqua minima aliquam voluptates eaque, rerum maiores deserunt voluptatem laudantium! Pariatur beatae commodi maiores illo",
      aosEffect: "flip-left",
      aosTime: "1500",
    },
  ];
  const storyItems = storyItem.map((item) => (
    <div className="home__story-row">
      <div
        className="home__story-picture"
        data-aos={item.aosEffect}
        data-aos-duration={item.aosTime}
      >
        <img src={item.picture} alt="" />
      </div>

      <div className="home__story-text">
        <h1 data-aos={item.aosEffect} data-aos-duration={item.aosTime}>
          {item.text1}
        </h1>
        <span className="spacer"></span>
        <p data-aos={item.aosEffect} data-aos-duration={item.aosTime}>
          {item.text2}
        </p>
      </div>
    </div>
  ));
  return (
    <Fragment>
      <section className="home">
        <section className="home__intro" id="main">
          <div className="home__intro-photo">
            <img data-aos="flip-down" src={img1} alt="" />
          </div>
          <div className="home__intro-title" data-aos="flip-up">
            {" "}
            <h6>who we are</h6>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              culpa dolores aperiam? Consequuntur, rem alias.
            </h1>
          </div>
          <div className="home__intro-desc">
            <div className="home__intro-desc-text" data-aos="flip-up">
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus eligendi, facere ab ipsum sint totam necessitatibus
                error commodi consequuntur eos, natus fugiat recusandae, soluta
                vel dolore cumque voluptatum similique odit.{" "}
              </p>
              <span className="spacer"></span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                animi totam atque vel adipisci dolorem quod in eaque soluta.
              </p>
            </div>
            <div className="home__intro-desc-photo">
              <img data-aos="flip-left" src={img2} alt="" />
            </div>
          </div>
        </section>

        <section className="home__story">
          <div className="home__story-intro">
            <h1 className="home__story-head" data-aos="fade-up">
              Story
            </h1>

            <h5 data-aos="flip-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, quis? Qui sint tempore recusandae numquam quisquam
              minima aliquam voluptates eaque, rerum maiores deserunt voluptatem
              laudantium! Pariatur beatae commodi maiores illo.
            </h5>
          </div>

          {storyItems}
        </section>
      </section>
    </Fragment>
  );
};

export default HomePage;
