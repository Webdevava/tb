import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from "react-router-dom";
import LoginLayout from "../Login/LoginLayout";
import axios from "axios";

const images = [img1, img2, img3];

const MaskedNumber = ({ number }) => {
  const maskNumber = (num) => {
    return num.slice(0, -3).replace(/./g, "*") + num.slice(-3);
  };

  return <div>{maskNumber(number)}</div>;
};

function OTPVerification() {
  const location = useLocation();
  const state = location.state || {};
  const [seconds, setSeconds] = useState(120);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState(state?.mobilenumber || "");
  const [emailID, setEmailID] = useState(state?.emailID || "");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    setSeconds(120);
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(
        "https://api.tradeboard.in/auth/verify-otp",
        {
          userId: state.userId,
          otp,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("token", response.data.token);
        navigate("/mainHome");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      setErrors({ otp: "Invalid or expired OTP" });
    }
  };

  const validateOtp = (otp) => {
    return /^\d{6}$/.test(otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!otp) {
      errors.otp = "OTP is required";
    } else if (!validateOtp(otp)) {
      errors.otp = "Invalid OTP. It must be a 6-digit number";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      verifyOtp();
    }
  };

  const maskEmail = (email) => {
    const [user, domain] = email.split("@");
    const maskedUser = user.length > 3 ? user.slice(0, 3) + "*********" : user;
    return `${maskedUser}@${domain}`;
  };

  return (
    <LoginLayout className="social-icons">
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
            <div className="otpgmail">
              <h1>OTP Verification</h1>
              <p
                className="p4"
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                {mobileNumber == "" ? (
                  <>
                    <p>
                      {"We have sent a 4-digit code to your registered email"}{" "}
                      {maskEmail(emailID)}
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      {
                        "We have sent a 4-digit code to your registered  mobile number"
                      }
                      <MaskedNumber number={mobileNumber} />
                    </p>
                  </>
                )}
              </p>
              <label className="label">Enter OTP</label>
              <input
                type="number"
                className="vtext"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {errors.otp && (
                <div style={{ color: "red", textAlign: "left" }}>
                  {errors.otp}
                </div>
              )}
              <button
                className="btn5"
                type="submit"
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Verify OTP
              </button>
              <p className="resend-otp2">
                <div className="p4">Didn’t Get OTP?</div>
                {""}
                <div
                  className="row"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  <a href="#"> Resend OTP</a>
                </div>
              </p>
            </div>
          </form>
        </div>
      </>
    </LoginLayout>
  );
}

export default OTPVerification;
