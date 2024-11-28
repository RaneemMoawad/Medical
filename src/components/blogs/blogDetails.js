import React from "react";
import Banner from "../Banner/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCalendarAlt,
  faQuoteLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import dr5 from "../../pic/dr5.jpeg";
import dr6 from "../../pic/dr6.jpeg";
import good from "../../pic/good dr.jpg";
import love from "../../pic/love.jpg";
import happy from "../../pic/happy.jpg";
import "../blogs/blogDetails.css";
import Button from "react-bootstrap/Button";
import senan from "../../pic/senan.jpg";
import like from "../../pic/like.jpg";
import finish from "../../pic/finish.jpg";
import hh from "../../pic/hh.jpg";
import daght from "../../pic/daght.jpg";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const BlogDetails = () => {
  return (
    <>
      <Banner title="Blog Details" smtitle={"/Blog Details"} />
      <div className="blog-details container">
        <div className=" row">
          <div className="col-lg-8 left-side">
            <img src={happy} alt="happy" className="happy" />
            <ul className="detailss">
              <li className="who-dr">
                <Link>
                  <img src={dr5} />
                  <span>Sonar Moyna</span>
                </Link>
              </li>

              <li className="date">
                <FontAwesomeIcon icon={faCalendarAlt} className="calender" />
                <span className="date-19">19 July 2021</span>
              </li>
            </ul>
            <h2 className="page-title">
              Precious Tips To Help You Get Better.
            </h2>
            <p className="frist-p">
              You just need to enter the keyword and select the keyword type to
              generate a list of 6 title ideas and suggestions. If you’re not
              satisfied with the results, you can always hit the refresh button
              to generate a new list of unique titles.
            </p>
            <div className="orange-card">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
              <p className="sec-p">
                Once you’ve gotten all the titles and have chosen the best one,
                the next thing you need to do is to craft a magnetic content.
                Great content marketers excel at creating content.
              </p>
            </div>
            <p className="th-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="twos">
              <img src={good} alt="good dr" className="good-dr" />
              <img src={love} alt="love" className="love" />
            </div>
            <p className="fourth-p">
              You just need to enter the keyword and select the keyword type to
              generate a list of 6 title ideas and suggestions. If you’re not
              satisfied with the results, you can always hit the refresh button
              to generate a new list of unique titles.
              <span className="gab"></span>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="special-desc">
              <ul>
                <li className="tags">
                  <span>Tags:</span>
                  <ul>
                    <Link>
                      <li>Health</li>
                    </Link>
                    <Link>
                      <li>Growth</li>
                    </Link>
                    <Link>
                      <li>Life</li>
                    </Link>
                  </ul>
                </li>
                <li className="share">
                  <span>Share:</span>
                  <ul>
                    <Link>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="share-icon"
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="share-icon"
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="share-icon"
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="share-icon"
                      />
                    </Link>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cards">
              <div className="fixed-card">
                <img src={dr6} alt="dr6" className="dr6-desc" />
                <div className="card-desc">
                  <h5>Sonar Z. Moyna</h5>
                  <p>
                    Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                    consequat happ quam vel enim augue.
                  </p>
                  <ul>
                    <Link>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="share-icon"
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="share-icon"
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="share-icon"
                      />
                    </Link>
                    <Link>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="share-icon"
                      />
                    </Link>
                  </ul>
                </div>
              </div>

              <span className="comments">8 Comments</span>
              <p className="background-hash"></p>
              <div className="down-cards">
                <div className="sec-card">
                  <img src={dr6} alt="dr6" className="dr6-desc" />
                  <div className="card-desc">
                    <h5>Sonar Z. Moyna</h5>
                    <p>
                      Aenean sollicitudin, lorem quis biber idum auctor anisi
                      elit consequat happ quam vel enim augue.
                    </p>
                    <ul>
                      <Link>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="share-icon"
                        />
                      </Link>
                    </ul>
                  </div>
                </div>

                <div className="th-card">
                  <img src={dr6} alt="dr6" className="dr6-desc" />
                  <div className="card-desc">
                    <h5>Sonar Z. Moyna</h5>
                    <p>
                      Aenean sollicitudin, lorem quis biber idum auctor anisi
                      elit consequat happ quam vel enim augue.
                    </p>
                    <ul>
                      <Link>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="share-icon"
                        />
                      </Link>
                    </ul>
                  </div>
                </div>

                <div className="fourth-card">
                  <img src={dr6} alt="dr6" className="dr6-desc" />
                  <div className="card-desc">
                    <h5>Sonar Z. Moyna</h5>
                    <p>
                      Aenean sollicitudin, lorem quis biber idum auctor anisi
                      elit consequat happ quam vel enim augue.
                    </p>
                    <ul>
                      <Link>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="share-icon"
                        />
                      </Link>
                    </ul>
                  </div>
                </div>

                <div className="fif-card">
                  <img src={dr6} alt="dr6" className="dr6-desc" />
                  <div className="card-desc">
                    <h5>Sonar Z. Moyna</h5>
                    <p>
                      Aenean sollicitudin, lorem quis biber idum auctor anisi
                      elit consequat happ quam vel enim augue.
                    </p>
                    <ul>
                      <Link>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="share-icon"
                        />
                      </Link>
                      <Link>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="share-icon"
                        />
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-input">
              <h4>Leave a Reply </h4>
              <span className="background-hash"></span>
              <Form>
                <Row>
                  <Col>
                    <Form.Control placeholder="Author" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" />
                  </Col>
                </Row>
              </Form>

              <Form.Floating className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                />
                <label htmlFor="floatingTextarea">Comments</label>
              </Form.Floating>
              <Button variant="primary" type="submit" className="submit">
                Submit
              </Button>
            </div>
          </div>

          <div className="col-lg-4 right-side">
            <div className="search-part">
              <input
                type="text"
                class="form-control keywords"
                placeholder="Default Input"
              />
              <button className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <span className="background-hash"></span>

              <div className="sec-recent">
                <div className="frist-recent">
                  <img src={senan} alt="senan" className="senan-icon" />
                  <div className="recent-desc">
                    <Link>
                      <h5>Precious Tips To Help You Get Better.</h5>
                    </Link>
                    <li className="date ">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="calender"
                      />
                      <span className="date-19">19 July 2021</span>
                    </li>
                  </div>
                </div>

                <div className="frist-recent">
                  <img src={senan} alt="senan" className="senan-icon" />
                  <div className="recent-desc">
                    <Link>
                      <h5>Precious Tips To Help You Get Better.</h5>
                    </Link>
                    <li className="date ">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="calender"
                      />
                      <span className="date-19">19 July 2021</span>
                    </li>
                  </div>
                </div>

                <div className=" last-recent">
                  <img src={senan} alt="senan" className="senan-icon" />
                  <div className="recent-desc">
                    <Link>
                      <h5>Precious Tips To Help You Get Better.</h5>
                    </Link>
                    <li className="date ">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="calender"
                      />
                      <span className="date-19">19 July 2021</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="our-gallery">
              <h3>Our Gallery</h3>
              <span className="background-hash"></span>
              <ul className="six-drs">
                <li>
                  <img src={like} alt="like" className="frist-ph" />
                  <img src={dr6} alt="dr6" />
                  <img src={happy} alt="happy" />
                </li>
                <li>
                  <img src={finish} alt="finish" className="frist-ph" />
                  <img src={hh} alt="hh" />
                  <img src={daght} alt="daght" />
                </li>
              </ul>
            </div>

            <div className="TAGS">
              <h3>Tags</h3>
              <span className="background-hash"></span>
              <Button variant="primary">Improvement</Button>
              <Button variant="primary">Health</Button>
              <Button variant="primary">Life</Button>
              <Button variant="primary">Covid</Button>
              <Button variant="primary">Healthy</Button>
              <Button variant="primary">Growth</Button>
              <Button variant="primary">Education</Button>
              <Button variant="primary">Manage</Button>
              <Button variant="primary">General</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

//  <span className="comments">8 Comments</span>
// <img src={hash} alt="hash" className="hash"/>
