import React from "react";
import "./ContactInfo.sass";
import contactPhoto from "../../images/pexels-suliman-sallehi-1822458.jpg";

const ContactInfo = () => {
  return (
    <div className="contact__info">
      <div className="info__map">
        <img src={contactPhoto} alt="" />
      </div>

      <div className="info__details">
        <h1 className="details__head">Contact Informations</h1>

        <div className="details__row">
          <a href="mailtto: 'mp.travelers@gmail.com'" className="row__link">
            mp.travelers@gmail.com<i class="far fa-envelope"></i>
          </a>
        </div>

        <div className="details__row">
          <p className="row__link">
            +1 343 91860<i class="fas fa-mobile"></i>
          </p>
        </div>

        <div className="details__row">
          <p className="row__link">
            {" "}
            63 St Mark Street,
            <br /> New York<i class="fas fa-map-marker"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
