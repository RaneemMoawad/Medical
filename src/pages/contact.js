import React from "react";
import '../pages/contact.css'
import Banner from "../components/Banner/banner";
import {   faGlobe, faMapLocation, faVcard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Card from 'react-bootstrap/Card';
import telephone from '../pic/telephone.png'
import email from '../pic/email.png'
import address from '../pic/address.png'
import wave from '../pic/big waves.png'
import FormContact from "./formContact";


const Contact = () =>{

   
    return(
        <>
        <Banner title="Contact" smtitle="/contact us"/>
        <div className="half">
            <div className="container ">
                <div className="total">
                    <div className="row form-and-desc">
                        <div className="col-lg-6  wave-back">
                            <FormContact/>
                        </div>
                        <div className="col-lg-5  contact-us-desc ">
                            <div className="layer">
                                <div className="desc ">
                                    <h4>Contact Us For Any Informations</h4>
                                    <span className="location">
                                        <FontAwesomeIcon icon={faMapLocation} className="location-icon"/>
                                        location
                                    </span>
                                    <p> 2005 Stokes Isle Apt. 896, Venaville 10010, US</p>
                                    <span className="form-card">
                                        <FontAwesomeIcon icon={faVcard} className="vcard-icon"/>
                                        email & phone
                                    </span>
                                    <p >
                                    <Link className="account"> nfo@yourdomain.com </Link><br/>(+68) 120034509
                                    </p> 
                                    <span className="follow-form">
                                        <FontAwesomeIcon icon={faGlobe} className="globe-icon"/>
                                        follow us
                                    </span>
                                    <ul className="websites">
                                        <Link><li><FontAwesomeIcon icon={faFacebook}/></li></Link>
                                        <Link><li><FontAwesomeIcon icon={faInstagram}/></li></Link>
                                        <Link><li><FontAwesomeIcon icon={faLinkedin}/></li></Link>
                                    </ul>



                                </div>

                            </div>
                        

                        </div>

                    </div>

                </div>
                

            </div>

        </div>
        <div className="container">
            <div className="cards">
            <Card  className="card-cards telephone">
                <Card.Img variant="top" src={telephone} className="card-photo telephone-icon"/>
                    <Card.Title>Contact Number</Card.Title>

                <Card.Text>
                 <span> +001 123 456 790</span> 
                 <span> +001 123 456 790</span>
                </Card.Text>
            </Card>
            <Card  className="card-cards email">
                <Card.Img variant="top" src={email} className="card-photo email-icon"/>
                    <Card.Title>Email Address</Card.Title>

                <Card.Text>
                    <span> info@yourdomain.com</span> 
                    <span> example@support.com</span>
                </Card.Text>
            </Card>
            <Card  className="card-cards address">
                <Card.Img variant="top" src={address} className="card-photo address-icon"/>
                    <Card.Title>Address</Card.Title>

                <Card.Text>
                2005 Stokes Isle Apt. 896, Venaville 10010, USA
                </Card.Text>
                
            </Card>

            </div>


        </div>
        <img src={wave} alt="wave" className="bottom-wave"/>
        
        </>


    )
}

export default Contact;