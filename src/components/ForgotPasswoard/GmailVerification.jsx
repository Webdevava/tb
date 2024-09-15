import React, { useState, useEffect } from "react";
import PasswordNew from "./PasswordNew";
import "./style2.css";
import { GiMailShirt } from "react-icons/gi";
import {useNavigate} from "react-router-dom"

function GmailVerification() {
  const [seconds, setSeconds] = useState(120); // Initial countdown value in seconds
  const [isPasswordNewVisible, setisPasswordNewVisible] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

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

  useEffect(() => {
    //getAsycData();
  }, []);

  const getAsycData = () => {
    const value = localStorage.getItem("gmailVerification");
    console.log("value", value);
    if (value == 456) {
      console.log("OTPsendgmail call...");
    }
  };

  const resetTimer = () => {
    setSeconds(120);
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const backbtnMethod = () => {
    setisPasswordNewVisible(true);
  };

  const PasswordNewMethod = () => {
    setisPasswordNewVisible(true);
    // localStorage.setItem("gmailVerification", "456");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!otp) {
      errors.otp = "OTP is required";
    } else if (!validateOtp(otp)) {
      errors.otp = "Invalid OTP. It must be a 4-digit number";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Call your PasswordNewMethod here
      // PasswordMethod();
      setisPasswordNewVisible(true)
      // PasswordNewMethod()
    }
  };

  const validateOtp = (otp) => {
    return /^\d{4}$/.test(otp);
  };

  

  return (
    <>
      {isPasswordNewVisible ? (
        <PasswordNew />
      ) : (
        <div className="social-icons">
          <form onSubmit={handleSubmit}>
            <div className="otpgmail">
              <h1>OTP Verification</h1>
              <p className="p4">
                We have sent a 4-digit code to your registered email
                Shu*********@gmail.com
              </p>
              <label className="label">Enter OTP</label>
              <input
                type="number"
                className="vtext"
                placeholder="Enter OTP"
                style={{ color: "red" }}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {errors.otp && (
                <div style={{ color: "red", textAlign: "left" }}>
                  {errors.otp}
                </div>
              )}
              {/* <button className="btn5" type="submit">
                Verify OTP
              </button> */}
              <p className="resend-otp2">
                <div className="time">{formatTime(seconds)}</div>
                <div className="row">
                  <a href="#">:Resend OTP</a>
                </div>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default GmailVerification;
