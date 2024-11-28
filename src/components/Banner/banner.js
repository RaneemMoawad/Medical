import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import '../Banner/banner.css'
const Banner = (props) =>{
    return(
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg 12 col-md-12 col-sm-12 banner-title" >
                        <h2>{props.title}</h2>
                        <li>
                            <div className="middle">
                            <Link to="/home" >
                                <FontAwesomeIcon icon={faHome} className="home-icon"/> home
                            </Link>
                            <span className="banner-contact-us">{props.smtitle}  </span> 

                            </div>
                            
                        </li>
                        
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Banner;