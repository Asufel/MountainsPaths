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
        <ul className="infoList">
          <li className="infoList-item">
            <h1>Contact Informations</h1>
          </li>

          <li className="infoList-item">
            <a href="mailto:'mountainspaths@gmail.com'">
              <i class="far fa-envelope"></i>mountainspaths@gmail.com
            </a>
          </li>

          <li className="infoList-item">
            {" "}
            <i class="fas fa-map-marker"></i>St Marks Ave 41 Brooklyn <br /> NY
          </li>
          <li className="infoList-item">
            <i class="fas fa-mobile"></i> +1 643 82 81
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
