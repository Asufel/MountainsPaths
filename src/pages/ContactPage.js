import React, { Fragment } from "react";
import "../styles/ContactPage.sass";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";

const ContactPage = () => {
  return (
    <Fragment>
      <section className="contact">
        <ContactForm />
        <ContactInfo />
      </section>
    </Fragment>
  );
};

export default ContactPage;
