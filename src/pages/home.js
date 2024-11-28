import React from "react";
import "./home.css";
import cycle from "../pic/cycle.png";
import plus from "../pic/+.png";
import send from "../pic/download.png";
import doctor from "../pic/doctor.png";
import square from "../pic/square.png";
import Button from "react-bootstrap/Button";
import doct from "../pic/doct.jpg";
import doctors from "../pic/doctors.jpg";
import baby from "../pic/baby.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/aboutUs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "react-bootstrap/Form";
import "../pages/booking.css";
import {
  faAmbulance,
  faBed,
  faChevronRight,
  faEyeDropper,
  faSyringe,
  faKitMedical,
  faStethoscope,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import mobile from "../pic/mobile.png";
import setting from "../pic/sitting.png";
import heart from "../pic/heart msg.png";
import sah from "../pic/sah.png";
import location from "../pic/location.png";
import girl from "../pic/girl.png";
import Card from "react-bootstrap/Card";
import "../services/service.css";
import "../pages/aboutUs.css";

import dr1 from "../pic/dr1.jpeg";
import dr2 from "../pic/dr2.jpeg";
import dr3 from "../pic/dr3.jpeg";
import dr4 from "../pic/dr4.jpeg";
import dr5 from "../pic/dr5.jpeg";
import dr6 from "../pic/dr6.jpeg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import op1 from "../pic/operation1.jpg";
import op2 from "../pic/operation2.jpg";
import potaks from "../pic/potaks.jpg";
import daght from "../pic/daght.jpg";
import senan from "../pic/senan.jpg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  // const multiSlideSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, // عدد السلايدز التي تظهر على الشاشات الكبيرة
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // شاشات التابلت
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600, // شاشات الموبايل
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  var multiSlideSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" home-page">
      <div className="container">
        <div className="row start-home">
          <div className="col-lg-6 col-md-12 col-sm-12 left">
            <img src={cycle} title="cycle" className="cycle" />
            <span>We Provide All Health Care Solution</span>
            <h2 className="home-title">
              Protect Your Health And Take Care To Of Your Health
            </h2>
            <Button variant="warning" className="read-more">
              read more
            </Button>
            <img src={send} className="icon send"></img>
            <img src={plus} className="icon plus"></img>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12  right">
            <img src={doctor} className="doctor" />
            <img src={square} className="square" />
          </div>
          <div className="clear"></div>
        </div>
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
              <h2 className="great-place">
                The Great Place Of Medical Hospital Center
              </h2>
              <p className="about-desc">
                We provide special tips and advice on healthcare treatment and
                use top-level technology in our hospital.
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
              <Button variant="warning" className="read-more">
                Read More
              </Button>
            </div>
          </div>
        </div>
        <div className="working-section">
          <div className="container working">
            <span className="working-process">working process</span>
            <h3>How we works?</h3>
            <div className="three-cards">
              <ul className="all-cards">
                <li>
                  <h2 data-content="01">01</h2>
                  <span>Make Appointmnet</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of.
                  </p>
                  <button>
                    View More
                    <FontAwesomeIcon icon={faChevronRight} className="cherv" />
                  </button>
                </li>
                <li>
                  <h2 data-content="02">02</h2>
                  <span>Take Treatment</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of.
                  </p>
                  <button>
                    View More
                    <FontAwesomeIcon icon={faChevronRight} className="cherv" />
                  </button>
                </li>
                <li>
                  <h2 data-content="03">03</h2>
                  <span>Registration</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of.
                  </p>
                  <button>
                    View More
                    <FontAwesomeIcon icon={faChevronRight} className="cherv" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pics-section">
          <div className="container">
            <div className="pics ">
              <div className="booking  ">
                <div className="container ">
                  <div className="booking-section no-mrg ">
                    <span>Book Appointment</span>
                    <Form.Select aria-label="Default select example">
                      <option>Selecty Department</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                      <option>Select Doctor</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    ></input>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone Numbers"
                    ></input>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="mm/dd/yyy"
                    ></input>
                    <button
                      className="now"
                      type="submit"
                      fdprocessedid="amj3yd"
                    >
                      Appointment Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="mobile-move col-lg-6">
                <div className="together">
                  <img src={mobile} className="mobile" alt="mobile" />
                  <img src={girl} className="girl" alt="girl" />
                </div>
                <div className="img-group">
                  <img src={sah} className="sah" alt="sah" />
                  <img src={location} className="location" alt="location" />
                  <img src={heart} className="heart" alt="heart" />
                  <img src={setting} className="mfk" alt="setting" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btm-th">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 khadamat ">
                <span>Services</span>
                <h2>We Cover A Big Variety Of Medical Services</h2>
                <p>
                  We provide the special tips and advice’s of heath care
                  treatment and high level of best.
                </p>
                <button>all Services</button>
              </div>
              <div className="col-lg-8 col-mid-12 col-sm-12 right-cards">
                <li className="row-cards">
                  <Card style={{ width: "20rem" }} className="right-card">
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
                      <Button variant="primary">View More</Button>
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
                      <Button variant="primary">View More</Button>
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
                      <Button variant="primary">View More</Button>
                    </Card.Body>
                  </Card>
                </li>
              </div>
            </div>
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
                  <FontAwesomeIcon icon={faQuoteLeft} className="quote-left" />
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
            <div className="slider-container">
              <Slider {...multiSlideSettings}>
                <div>
                <Card  className="cardoda">
                    <Card.Img variant="top" src={senan} />
                    <Card.Body>
                      <Card.Title>News Title 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title.
                      </Card.Text>
                      <Button className="lsank" variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                <Card className="cardoda">
                    <Card.Img variant="top" src={ op1} />
                    <Card.Body>
                      <Card.Title>News Title 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title.
                      </Card.Text>
                      <Button className="lsank" variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                <Card  className="cardoda">
                    <Card.Img variant="top" src={op2} />
                    <Card.Body>
                      <Card.Title>News Title 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title.
                      </Card.Text>
                      <Button className="lsank" variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                <Card  className="cardoda">
                    <Card.Img variant="top" src={potaks} />
                    <Card.Body>
                      <Card.Title>News Title 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title.
                      </Card.Text>
                      <Button className="lsank" variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                <Card  className="cardoda">
                    <Card.Img variant="top" src={daght} />
                    <Card.Body>
                      <Card.Title>News Title 1</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title.
                      </Card.Text>
                      <Button className="lsank" variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
