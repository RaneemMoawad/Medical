import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Slider from "react-slick";
import "../pages/faq.css";
import Banner from "../components/Banner/banner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import senan from "../pic/senan.jpg";
import op1 from "../pic/operation1.jpg";
import op2 from "../pic/operation2.jpg";
import potaks from "../pic/potaks.jpg";
import daght from "../pic/daght.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const multiSlideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

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
  ];

  return (
    <>
      <Banner title="Faq's" smtitle="/Faq's" />
      <div className="faq-section">
        <div className="container">
          <div className=" row taqseem">
            <div className="col-lg-5">
              <Accordion>
                {faqItems.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>

            <div className="col-lg-5">
              <Accordion>
                {faqItems.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
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
                    <Button variant="primary">
                      Read More
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevo"
                      />
                    </Button>
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

export default FAQ;
