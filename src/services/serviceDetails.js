import React from "react";
import Banner from "../components/Banner/banner";
import "../services/serviceDetails.css";
import sensn from "../pic/senan2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import pdf from "../pic/pdf.png";
import doc from "../pic/doc.png";
import Accordion from "react-bootstrap/Accordion";


const ServiceDetails = () => {

  const faqItems = [
    {
      title: "What types of systems do you support?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "We Teach You How To Feel Better?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "How Can I Contact You?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "How Can I Contact You?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "How Can I Contact You?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    }
  ];


  return (
    <>
      <Banner title="Service Details" smtitle="/Service Details" />
      <div className="service-details">
        <div className="container">
          <div className="row ab">
            <div className="col-lg-8 left-handside">
              <img src={sensn} alt="senan" className="senan" />
              <h2>Why Medical Had Been So Popular Till</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <div className="nesab">
                <div className="row">
                  <div className="col-lg-5">
                    <ul className="check-part">
                      <li>
                        <FontAwesomeIcon icon={faCheck} className="check" />{" "}
                        <span>Then along come two they</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCheck} className="check" />{" "}
                        <span>That’s just a little bit more than</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCheck} className="check" />{" "}
                        <span>Standard dummy text ever since</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCheck} className="check" />{" "}
                        <span>Simply dummy text of the printing</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCheck} className="check" />{" "}
                        <span>Make a type specimen book</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 another-part">
                    <span>Advanced Technology</span>
                    <h5 className="h5-96">96%</h5>
                    <p className="nesba96"></p>
                    <span>Certified Engineers</span>
                    <h5 className="h5-79">79%</h5>
                    <p className="nesba79"></p>
                    <span>6 years Experience</span>
                    <h5 className="h5-75">75%</h5>
                    <p className="nesba75"></p>
                  </div>
                </div>
              </div>
              <h4>Popular Questions</h4>
              <p>
                Standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book
              </p>
              <div className="col-lg-9 left-section">
              <Accordion>
                {faqItems.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} >
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              </div>
            </div>

            <div className="col-lg-4 right-handside ">
              <aside>
                <div className="fake-options">
                  <ul>
                    <li className="active">
                      <span>Engine Diagnostics</span>
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className="arrow-icon"
                      />
                    </li>
                    <li>
                      <span>Lube Oil and Filters</span>
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className="arrow-icon"
                      />
                    </li>
                    <li>
                      <span>Belts and Hoses</span>
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className="arrow-icon"
                      />
                    </li>
                    <li>
                      <span>Air Conditioning</span>
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className="arrow-icon"
                      />
                    </li>
                    <li>
                      <span>Brake Repair</span>
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className="arrow-icon"
                      />
                    </li>
                    <li>
                      <span>Tire and Wheel Services</span>
                      <FontAwesomeIcon
                        icon={faArrowCircleRight}
                        className="arrow-icon"
                      />
                    </li>
                  </ul>
                </div>
                <div className="download">
                  <span className="download-title">Download</span>
                  <ul>
                    <li>
                      <Link>
                        <div className="flixosa">
                          <img src={pdf} alt="pdf" />
                          <h5>Download our Brochures</h5>
                        </div>
                        <span className="final-download">Download</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div className="flixosa">
                          <img src={doc} alt="doc"/>
                          <h5>Our Company Details</h5>
                        </div>
                        <span className="final-download">Download</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceDetails;
