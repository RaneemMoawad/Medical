import React from "react";
import Banner from "../Banner/banner";
import "../blogs/blog.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import baby from "../../pic/baby.jpg";
import dr2 from "../../pic/dr2.jpeg";
import senan from "../../pic/senan.jpg";
import finish from "../../pic/finish.jpg";
import potaks from "../../pic/potaks.jpg";
import daght from "../../pic/daght.jpg";
import operation1 from "../../pic/operation1.jpg";
import operation2 from "../../pic/operation2.jpg";
import hh from "../../pic/hh.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import dr from "../../pic/dr.jpg";
import dr1 from "../../pic/dr1.jpeg";
import dr3 from "../../pic/dr3.jpeg";
import dr6 from "../../pic/dr6.jpeg";

const Blog = () => {
  return (
    <>
      <Banner title="Blog Grid 3" smtitle="/Blog Grid 3" />
      <div className="blog">
        <div className="container">
          <div>
            <ul className="cards-ul">
              <li className="frist-row">
                <Card style={{ width: "20rem" }} className="sm-pad">
                  <Card.Img className="sora"  variant="top" src={senan} />
                  <Card.Body className="blog-card">
                    <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr1} />
                          <span >John deo</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>21 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    Dental Care for Women is very important
                    </Card.Text >
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>

                <Card style={{ width: "20rem" }} className="sm-pad">
                  <Card.Img className="sora " variant="top" src={operation1} />
                  <Card.Body className="blog-card">
                    <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr6} />
                          <span >Peter Packer</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>20 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    In this hospital there are special surgeon
                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>

                <Card style={{ width: "20rem" }} className="sm-pad">
                  <Card.Img className="sora" variant="top" src={operation2} />
                  <Card.Body className="blog-card">
                    <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr6} />
                          <span >Sonar Moyna</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>19 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    In this hospital there are special surgeon
                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>
              </li>

              <li className="sec-row">
              <Card style={{ width: "20rem" }} className="sm-pad">
              <Card.Img className="sora" variant="top" src={potaks} />
              <Card.Body className="blog-card">
              <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr} />
                          <span >Kalina</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>18 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    Understand Health Before You Regret
                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>

                <Card style={{ width: "20rem" }} className="sm-pad">
                  <Card.Img className="sora" variant="top" src={daght} />
                  <Card.Body className="blog-card">
                    <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr3} />
                          <span >Michel</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>17 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    Health Will Be A Thing Of The Past And Here
                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>

                <Card style={{ width: "20rem" }} className="sm-pad">
                  <Card.Img className="sora" variant="top" src={dr2}  />
                  <Card.Body className="blog-card">
                    <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr2} />
                          <span >Peter Packer</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>16 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    Can you get a diflucan prescription online?
                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>
              </li>

              <li className="third-row">
              <Card style={{ width: "20rem" }} className="sm-pad">
              <Card.Img className="sora" variant="top" src={hh} />
              <Card.Body className="blog-card">
              <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr1} />
                          <span >John deo</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>21 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    Ten Gigantic Influences Of Health                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>

                <Card style={{ width: "20rem" }} className="sm-pad">
                  <Card.Img className="sora" variant="top" src={finish} />
                  <Card.Body className="blog-card">
                    <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr1} />
                          <span >John deo</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>21 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    Why Is Skin Surgeon Considered Underrated
                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>

                <Card style={{ width: "20rem" }} className="sm-pad">
                  <Card.Img className="sora" variant="top" src={baby} />
                  <Card.Body className="blog-card">
                    <ul className="details">
                      <li className="who-dr">
                        <Link>
                          <img src={dr1} />
                          <span >John deo</span>
                        </Link>
                      </li>

                      <li className="date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>21 July 2021</span>  
                      </li>
                    </ul>
                    <Card.Text className="parag">
                    Everyone need to go Dentist regularly
                    </Card.Text>
                    <Button className="mea" variant="primary">Read More <FontAwesomeIcon icon={faChevronRight} className="chevro-icon"/></Button>
                  </Card.Body> 
                </Card>
              </li>
            </ul>

            <div className="bools">
              <ul className="numbers">
             <Link><li className="prev">Prev</li></Link> 
             <Link><li className="number active">1</li></Link>
             <Link><li className="number">2</li></Link>
             <Link><li className="number">3</li></Link>
             <Link><li className="number">4</li></Link>
             <Link><li className="nxt">next</li></Link>

                
              </ul>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
