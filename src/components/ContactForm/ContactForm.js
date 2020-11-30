import React, { Fragment, useEffect } from "react";
import "./ContactForm.sass";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <form action="" className="contact__form">
        <h1 className="form__head" data-aos="flip-up">
          {" "}
          Contact Us
        </h1>
        <div className="form__row name">
          <label className="row__label" htmlFor="name" data-aos="flip-up">
            Name
          </label>
          <input
            className="row__input"
            type="text"
            name="name"
            data-aos="flip-up"
          />
        </div>

        <div className="form__row last-name">
          <label className="row__label" htmlFor="last-name" data-aos="flip-up">
            Last-name
          </label>
          <input
            className="row__input"
            type="text"
            name="last-name"
            data-aos="flip-up"
          />
        </div>

        <div className="form__row">
          <label className="row__label" htmlFor="email" data-aos="flip-up">
            Email
          </label>
          <input
            className="row__input"
            type="text"
            name="last-name"
            data-aos="flip-up"
          />
        </div>

        <div className="form__row">
          <label className="row__label" htmlFor="subject" data-aos="flip-up">
            {" "}
            Choose the subject{" "}
          </label>
          <select
            className="row__select"
            name="subject"
            id=""
            data-aos="flip-up"
          >
            <option value=""></option>
            <option value="">Expedition</option>
            <option value="">Research</option>
            <option value="">Business cooperation</option>
          </select>
        </div>

        <div className="form__row">
          <label className="row__label" htmlFor="message" data-aos="flip-up">
            Message
          </label>
          <textarea
            className="row__message"
            name="message"
            data-aos="flip-up"
          ></textarea>
        </div>

        <button className="form__button" data-aos="zoom-in">
          SEND
        </button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
