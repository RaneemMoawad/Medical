import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Banner from "../components/Banner/banner";
import "../pages/aboutUs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  faAmbulance,
  faBed,
  faEyeDropper,
  faSyringe,
  faQuoteLeft,
  faQuoteRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import baby from "../pic/baby.jpg";
import doctors from "../pic/doctors.jpg";
import doct from "../pic/doct.jpg";
import boy from "../pic/boy.jpg";
import dr from "../pic/dr.jpg";
import drs from "../pic/drs.jpg";
import dr1 from "../pic/dr1.jpeg";
import dr2 from "../pic/dr2.jpeg";
import dr3 from "../pic/dr3.jpeg";
import dr4 from "../pic/dr4.jpeg";
import dr5 from "../pic/dr5.jpeg";
import dr6 from "../pic/dr6.jpeg";
import senan from "../pic/senan.jpg";
import op1 from "../pic/operation1.jpg";
import op2 from "../pic/operation2.jpg";
import potaks from "../pic/potaks.jpg";
import daght from "../pic/daght.jpg";

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const multiSlideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <Banner title="About Us" smtitle="/About Us" />

      <div className="about-section container main-about">
        <div className="row">
          <div className="col-lg-6">
            <div className="frist-row">
              <img src={doctors} alt="Doctors" className="doctors" />
              <img src={doct} alt="Doctor" className="doct" />
            </div>
            <div className="sec-row">
              <img src={baby} alt="Baby" className="baby" />
              <span className="experience">
                <h2 className="exp">20</h2>
                years experience
              </span>
            </div>
          </div>

          <div className="col-lg-6 sec-col">
            <span className="about-us">About Us</span>
            <h2 className="great-place">The Great Place Of Medical Hospital Center</h2>
            <p className="about-desc">
              We provide special tips and advice on healthcare treatment and use top-level technology in our hospital.
            </p>
            <ul className="sections-one">
              <li>
                <FontAwesomeIcon icon={faAmbulance} className="amb" />
                <span>Emergency Help</span>
              </li>
              <li className="m-l">
                <FontAwesomeIcon icon={faBed} className="bed" />
                <span>Qualified Doctors</span>
              </li>
            </ul>
            <ul className="sections-two">
              <li>
                <FontAwesomeIcon icon={faEyeDropper} className="eye" />
                <span>Best Professionals</span>
              </li>
              <li className="m-l">
                <FontAwesomeIcon icon={faSyringe} className="fasy" />
                <span>Medical Treatment</span>
              </li>
            </ul>
            <Button variant="warning" className="read-more">Read More</Button>
          </div>
        </div>
      </div>

      <div className="cards-section cards-back">
        <div className="container ">
          <ul className="cards ">
            {[
              { number: "120", text: "Years With You" },
              { number: "400", text: "Awards" },
              { number: "250", text: "Doctors" },
              { number: "800", text: "Satisfied Clients" }
            ].map((item, index) => (
              <li key={index} className={index === 0 ? "first-l" : ""}>
                <div className="words">
                  <h2>{item.number}</h2>
                  <span>{item.text}</span>
                  <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

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
        </div>
      </div>

      <div className="testimonial-section mt">
          <div className="container ">
            <div className="testimonial">
              <span>Testimonial</span>
              <h3>See What Our Patients Are Saying</h3>
              <div className="row full-sec">
                <div className="col-lg-6 left-sec">
                  <div className="testimonial-photos">
                    <Link>
                      <img src={dr1} alt="dr1" className="asmaa" />
                    </Link>
                    <div className="team1">
                      <Link>
                        <img src={dr2} alt="dr2" className="mostafa" />
                      </Link>
                      <Link>
                        <img src={dr3} alt="dr3" className="amir" />
                      </Link>
                    </div>

                    <div className="team2">
                      <Link>
                        <img src={dr4} alt="dr4" className="galal" />
                      </Link>
                      <Link>
                        <img src={dr5} alt="dr5" className="ashraf" />
                      </Link>
                    </div>
                    <Link>
                      <img src={dr6} alt="dr6" className="amira" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 right-sec">
                <FontAwesomeIcon
                            icon={faQuoteLeft}
                            className="quote-left"
                          />
                  <div className="testimonial-desc">
                    <Slider {...sliderSettings}>
                      {[1, 2].map((_, index) => (
                        <div key={index}>
                          
                          <p>
                            It is important to take care of the patient, to be
                            followed by the client, but at the same time they
                            will be affected by some great pains and sufferings.
                          </p>
                          <h4>
                            John Deo <br />
                            <h6>PATIENT</h6> 
                          </h4>
                          <FontAwesomeIcon
                            icon={faQuoteRight}
                            className="quote-right"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-section">
          <div className="container">
            <span>Latest News</span>
            <h3>Our Latest News</h3>
            <div className="news-slider">
              <Slider {...multiSlideSettings}>
                {[senan, op1, op2, potaks, daght].map((imgSrc, index) => (
                  <Card key={index} className="cardoda">
                    <Card.Img variant="top" src={imgSrc} />
                    <Card.Body>
                      <Card.Title>News Title {index + 1}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title.
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
