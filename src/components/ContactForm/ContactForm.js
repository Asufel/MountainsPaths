import React, { Fragment } from "react";
import "./ContactForm.sass";

const ContactForm = () => {
  return (
    <Fragment>
      <form action="" className="contact__form">
        <h1 className="form__head"> Contact Us</h1>
        <div className="form__row name">
          <label className="row__label" htmlFor="name">
            Name
          </label>
          <input className="row__input" type="text" name="name" />
        </div>

        <div className="form__row last-name">
          <label className="row__label" htmlFor="last-name">
            Last-name
          </label>
          <input className="row__input" type="text" name="last-name" />
        </div>

        <div className="form__row">
          <label className="row__label" htmlFor="email">
            Email
          </label>
          <input className="row__input" type="text" name="last-name" />
        </div>

        <div className="form__row">
          <label className="row__label" htmlFor="subject">
            {" "}
            Choose the subject{" "}
          </label>
          <select className="row__select" name="subject" id="">
            <option value=""></option>
            <option value="">Expedition</option>
            <option value="">Research</option>
            <option value="">Business cooperation</option>
          </select>
        </div>

        <div className="form__row">
          <label className="row__label" htmlFor="message">
            Message
          </label>
          <textarea className="row__message" name="message"></textarea>
        </div>

        <button className="form__button">SEND</button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
