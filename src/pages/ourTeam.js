import React from "react";
import '../pages/ourTeam.css'
import Banner from "../components/Banner/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import boy from "../pic/boy.jpg";
import dr from "../pic/dr.jpg";
import drs from "../pic/drs.jpg";
import ashraf from "../pic/ashraf.jpg"
import like from "../pic/like.jpg"
import mahfouz from "../pic/mahfouz.jpg"




const OurTeam = ()=>{

    return(
        <>
        <Banner title="Our Team" smtitle="/Our Team"/>
      <div className="doctors-section">
        <div className="container doctors-desc">
          <span className="our-doctors">Our Doctors</span>
          <h3>Meet Our Best Doctors</h3>
          <ul className="doctors-cards">
            {[
              { imgSrc: dr, name: "Dr. Addition Smith", specialty: "Dentist" },
              { imgSrc: drs, name: "Dr. Mahfuz Riad", specialty: "Chiropractor" },
              { imgSrc: boy, name: "Dr. David Benjamin", specialty: "Cardiologist" }
            ].map((doctor, index) => (
              <li key={index} className={index === 0 ? "first-li" : ""}>
                <img src={doctor.imgSrc} alt={doctor.name} className="doctor-img" />
                <h4>{doctor.name}</h4>
                <span>{doctor.specialty}</span>
                <div className="doctors-icon">
                  <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                  <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                  <Link><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
              </li>
            ))}
          </ul>
          <ul className="doctors-cards taht">
            {[
              { imgSrc: like, name: "Dr. Addition Smith", specialty: "Dentist" },
              { imgSrc: mahfouz, name: "Dr. Mahfuz Riad", specialty: "Chiropractor" },
              { imgSrc: ashraf, name: "Dr. David Benjamin", specialty: "Cardiologist" }
            ].map((doctor, index) => (
              <li key={index} className={index === 0 ? "first-li" : ""}>
                <img src={doctor.imgSrc} alt={doctor.name} className="doctor-img" />
                <h4>{doctor.name}</h4>
                <span>{doctor.specialty}</span>
                <div className="doctors-icon">
                  <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                  <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                  <Link><FontAwesomeIcon icon={faInstagram} /></Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
        
        
        </>
    );
}

export default OurTeam;