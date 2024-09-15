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

function SignupOTPVerification() {
  const location = useLocation();
  const state = location.state || {};
  const [seconds, setSeconds] = useState(120);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [emailID, setEmailID] = useState(state?.emailID || "");
  const [isVerified, setIsVerified] = useState(false); // State for animation

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
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        "https://api.tradeboard.in/auth/verify-otp",
        {
          userId,
          otp,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setIsVerified(true); // Trigger verified animation

        setTimeout(() => {
          navigate("/login"); // Redirect to login after a short delay
        }, 2000); // Adjust delay as needed
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
                <p>
                  {"We have sent a 6-digit code to your registered email"}{" "}
                  {maskEmail(emailID)}
                </p>
                <p>Enter the code below to verify your account</p>
              </p>
              {seconds === 0 && (
                <p
                  className="p4"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    color: "red",
                  }}
                >
                  {"Time limit has been exceeded. "}
                  <a
                    href="#resend"
                    onClick={(e) => {
                      e.preventDefault();
                      resetTimer();
                    }}
                  >
                    Resend OTP
                  </a>
                </p>
              )}
              {seconds > 0 && (
                <p
                  className="p4"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                >
                  {"Resend OTP in "}
                  <span className="time">{formatTime(seconds)}</span>
                </p>
              )}
              <input
                className="vtext"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {errors.otp && (
                <div
                  style={{
                    color: "red",
                    textAlign: "left",
                    fontFamily: "Poppins",
                  }}
                >
                  {errors.otp}
                </div>
              )}
              {isVerified && (
                <div className="verified">
                  <p>Verified Successfully</p>
                </div>
              )}
              <button type="submit" className="btn5">
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </>
    </LoginLayout>
  );
}

export default SignupOTPVerification;
