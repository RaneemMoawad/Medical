import React from "react";
import waves from '../../../pic/waves.png'
import za from '../../../pic/za.png'
import logo from '../../../pic/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import hash from '../../../pic/hashhosha.png';
import big from '../../../pic/big waves.png';





const Footer = () =>{
    return(
        <div className="page-bottom">
            <img src={waves} alt="waves" className="wave-two"/>
            <img src={waves} alt="waves" className="wave-three"/>
            <img src={za} alt="za" className="za"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4  frist-col">
                        <img src={logo} alt="logo"/>
                        <p className="footer-p">
                        Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.    
                        </p>
                        <div className="footer-contact">
                          <FontAwesomeIcon icon={faPhone} className="i-phone"/> 
                          <div className="footer-call">
                            <span className="footer-contact-us">Contact Us</span>
                            <h4 className="footer-number">+01 123 456 7890</h4>
                          </div>
                        </div>

                    </div>
                    <div className="col-lg-2 footer-second">
                        <span>Quick Links</span>
                        <img src={hash} alt="hash"></img>
                        <ul className="options">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Booking</a></li>
                            <li><a href="#">Faq's</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Our Team</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-2 footer-three">
                        <span>Our Service</span>
                        <img src={hash} alt="hash"></img>
                        <ul className="options">
                            <li><a href="#">Dental Care</a></li>
                            <li><a href="#">Cardiac Clinic </a></li>
                            <li><a href="#">Massege Therapy </a></li>
                            <li><a href="#">Cardiology </a></li>
                            <li><a href="#"> Precise Diagnosis</a></li>
                            <li><a href="#">Abmbulance Services </a></li>
                        </ul>

                    </div>
                    <div className="col-lg-4 footer-four">
                        <span>Subcribe</span>
                        <img src={hash} alt="hash"></img>
                        <form>
                            <input placeholder="Email Address.." type="text"></input>
                            <button type="submit">subscripe now</button>
                        </form>
                        <div className="iconss">
                          <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                          <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        </div>

                    </div>

                </div>
                <span className="line"></span>
                <h6 className="final">Copyright © 2023 Design & Developed by  <a href="#" className="ThemeTrades"> ThemeTrades</a></h6>

            </div>


        </div>

    );
}

export default Footer;


