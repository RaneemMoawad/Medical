import React from "react";
import "../services/service.css";
import Banner from "../components/Banner/banner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faAmbulance,
  faBedPulse,
  faCamera,
  faKitMedical,
  faStethoscope,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import boy from "../pic/boy.jpg";
import dr from "../pic/dr.jpg";
import drs from "../pic/drs.jpg";
import { Link } from "react-router-dom";
import senan from "../pic/senan.jpg";
import op1 from "../pic/operation1.jpg";
import op2 from "../pic/operation2.jpg";
import potaks from "../pic/potaks.jpg";
import daght from "../pic/daght.jpg";
import Slider from "react-slick";


const Service = () => {
  

  const multiSlideSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Banner title="Service" smtitle="/Service" />
      <div className="service">
        <div className="container">
          <div className="service-section">
            <ul>
              <li className="frist-row-cards">
                <Card style={{ width: "20rem" }}>
                  <FontAwesomeIcon
                    icon={faStethoscope}
                    className="icons-cards"
                  />

                  <Card.Body>
                    <Card.Title>Diagnostics</Card.Title>
                    <Card.Text>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </Card.Text>
                    <Button variant="primary" className="mohem">View More</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "20rem" }}>
                  <FontAwesomeIcon icon={faSyringe} className="icons-cards" />

                  <Card.Body>
                    <Card.Title>Treatment</Card.Title>
                    <Card.Text>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </Card.Text>
                    <Button variant="primary" className="mohem">View More</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "20rem" }}>
                  <FontAwesomeIcon
                    icon={faKitMedical}
                    className="icons-cards"
                  />
                  <Card.Body>
                    <Card.Title>Surgery</Card.Title>
                    <Card.Text>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </Card.Text>
                    <Button variant="primary" className="mohem">View More</Button>
                  </Card.Body>
                </Card>
              </li>

              <li className="sec-row-cards">
                <Card style={{ width: "20rem" }}>
                  <FontAwesomeIcon icon={faAmbulance} className="icons-cards" />
                  <Card.Body>
                    <Card.Title>Emergency</Card.Title>
                    <Card.Text>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </Card.Text>
                    <Button variant="primary" className="mohem">View More</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "20rem" }}>
                  <FontAwesomeIcon icon={faCamera} className="icons-cards" />
                  <Card.Body>
                    <Card.Title>Vaccine</Card.Title>
                    <Card.Text>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </Card.Text>
                    <Button variant="primary" className="mohem">View More</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "20rem" }}>
                  <FontAwesomeIcon icon={faBedPulse} className="icons-cards" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </Card.Text>
                    <Button variant="primary" className="mohem">View More</Button>
                  </Card.Body>
                </Card>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards-section cards-back">
          <div className="container">
            <ul className="cards">
              {[
                { number: "120", text: "Years With You" },
                { number: "400", text: "Awards" },
                { number: "250", text: "Doctors" },
                { number: "800", text: "Satisfied Clients" },
              ].map((item, index) => (
                <li key={index} className={index === 0 ? "first-l" : ""}>
                  <div className="words">
                    <h2>{item.number}</h2>
                    <span>{item.text}</span>
                    <p>
                      Etiam ante ante, molestie vitae cursus ac, pharetra
                      euismod libero.
                    </p>
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
                {
                  imgSrc: dr,
                  name: "Dr. Addition Smith",
                  specialty: "Dentist",
                },
                {
                  imgSrc: drs,
                  name: "Dr. Mahfuz Riad",
                  specialty: "Chiropractor",
                },
                {
                  imgSrc: boy,
                  name: "Dr. David Benjamin",
                  specialty: "Cardiologist",
                },
              ].map((doctor, index) => (
                <li key={index} className={index === 0 ? "first-li" : ""}>
                  <img
                    src={doctor.imgSrc}
                    alt={doctor.name}
                    className="doctor-img"
                  />
                  <h4>{doctor.name}</h4>
                  <span>{doctor.specialty}</span>
                  <div className="doctors-icon">
                    <Link>
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="news-section">
          <div className="container">
            <span className="latest-news">Latest News</span>
            <h3>Our Latest News</h3>
            <div className="news-slider">
              <Slider {...multiSlideSettings}>
                {[senan, op1, op2, potaks, daght].map((imgSrc, index) => (
                  <Card key={index}>
                    <Card.Img variant="top" src={imgSrc} />
                    <Card.Body>
                      <Card.Title>News Title {index + 1}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title.
                      </Card.Text>
                      <Button variant="primary" className="chevro-icon">Read More</Button>
                    </Card.Body>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
