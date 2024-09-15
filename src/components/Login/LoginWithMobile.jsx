import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
// import ImageSlider from './ImageSlider';
import "./style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OTPVerification from "./OTPVerification";
import LoginLayout from "./LoginLayout";
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3];

function LoginWithMobile(props) {
  const [isOTPVerificationVisible, setisOTPVerificationVisible] =
    useState(false);
  const [seconds, setSeconds] = useState(120);
  const [isActive, setIsActive] = useState(true);
  const [mobileNumber, setmobileNumber] = useState("");
  const [isMobileError, setIsMobileError] = useState(false);
  const [mobileMessage, setMobileMessage] = useState("");
  const navigate = useNavigate();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const OTPVerificationMethod = () => {
    navigate("/otpverification", { state: { isLoginWithMobileProps: true, mobilenumber: mobileNumber} });
  };

  const backbtnMethod = () => {
    setisOTPVerificationVisible(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setSeconds(120); // Reset to initial value
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const maskMobile = (mobile) => {
    // Take the last 3 characters of the mobile number
    const mobileStr = String(mobile);

    // Take the last 3 characters of the mobile number
    const visiblePart = mobileStr.slice(-3);

    // Create the masked mobile number
    const maskedMobile = `${"*".repeat(mobileStr.length - 3)}${visiblePart}`;
    console.log(maskedMobile);
    return maskedMobile;
  };

  const handleChange = (event) => {
    setmobileNumber(event.target.value); // Update state with the input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateMobileNumber(mobileNumber);

    if (!isValid) {
      setIsMobileError(true);
      setMobileMessage("Please enter a valid 10-digit mobile number");
    } else {
      setIsMobileError(false);
      setMobileMessage("");
      OTPVerificationMethod();
    }
  };

  const validateMobileNumber = (number) => {
    const re = /^[0-9]{10}$/;
    return re.test(number);
  };

  return (
    <LoginLayout>
      <>
        <div
          className="backdiv"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            className="backbtn"
            src={require("../../assets/images/back-button.png")}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mobile-form">
              <h1>Log in with Mobile Number</h1>
              <p className="p3" style={{ textAlign: "left", marginLeft: 15,fontFamily:"Poppins" }}>
                Please enter your registered mobile number
              </p>
              <label className="label">Mobile Number</label>
              <input
                type="text"
                className="mtext"
                placeholder="Mobile Number"
                value={mobileNumber}
                style={{
                  borderWidth: 1,
                  borderColor: isMobileError ? "red" : "#000",
                  outline: 0,
                }}
                onChange={(e) => setmobileNumber(e.target.value)}
              />

              {isMobileError && (
                <div
                  style={{
                    color: isMobileError ? "red" : "green",
                    textAlign: "left",
                  }}
                >
                  {mobileMessage}
                </div>
              )}

              <button className="btn3" type="submit">
                Send OTP
              </button>
              <p className="signup-text"  style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}>
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </>
    </LoginLayout>
  );
}

export default LoginWithMobile;
