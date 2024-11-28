import React from "react";
import "../pages/error.css";
import Banner from "../components/Banner/banner";
import Button from "react-bootstrap/Button";

const Error = () => {
  return (
    <>
      <Banner title="Page Not Found" smtitle="/Page Not Found" />
      <div className="error">
        <div className="container elwidth ">
          <div className="error-section">
            <div className="big-title">
              <h2>
                4<span className="emojy"></span>4
              </h2>
            </div>
            <span className="title-span">
              The Page you were looking for, couldn't be found.
            </span>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="bback">
              <Button variant="primary" size="lg" className="back">
                Back
              </Button>{" "}
              <Button variant="secondary" size="lg" className="back-home">
                Back To Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
