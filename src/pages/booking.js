import React from "react";
import "../pages/booking.css";
import Form from 'react-bootstrap/Form';
import Banner from "../components/Banner/banner";

const Booking = () => {
  return (
    <>
      <Banner title="Booking" smtitle="/Booking" />
      <div className="booking">
        <div className="container">
          <div className="booking-section booking-page">
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
            <button className="now" type="submit" fdprocessedid="amj3yd">Appointment Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Booking;
