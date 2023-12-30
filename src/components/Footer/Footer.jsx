import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="tittle">About</div>
          <div className="text">
            Thank you for taking the time to explore our website. We hope your{" "}
            <br />
            experience has been informative and enjoyable. If you have any{" "}
            <br />
            questions, feedback, or inquiries, please don't hesitate to reach{" "}
            <br />
            out to us.
          </div>
        </div>
        <div className="col">
          {" "}
          <div className="tittle">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">123 Street Name, City, State, Country</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0313 514 0521</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: hamadkk05@gmail.com</div>
          </div>
        </div>
        <div className="col">
          {" "}
          <div className="tittle">Categories</div>
          <span className="text">Headsphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          
          <div className="tittle">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                GulStore 2023 Created By Hamad Gul.
            </div>
            <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
