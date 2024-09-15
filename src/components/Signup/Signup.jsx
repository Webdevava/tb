import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../Login/LoginLayout";

const images = [img1, img2, img3];

function Signup() {
  const [displayName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAsycData();
  }, []);

  const getAsycData = () => {
    const value = localStorage.getItem("myVariable");
    console.log("value", value);
    if (value == 123) {
      // Handle logic if needed
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const validate = () => {
    const errors = {};

    if (!displayName.trim()) {
      errors.displayName = "Full Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!phone) {
      errors.phone = "phone Number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "phone Number is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          "https://api.tradeboard.in/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ displayName, email, phone, password }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("userId", data.userId);
          navigate("/signupotpverification", {
            state: { mobilenumber: phone, emailID: email },
          });
        } else {
          setErrors({ server: data.message });
        }
      } catch (error) {
        console.error("Error registering user:", error);
        setErrors({
          server: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = "https://api.tradeboard.in/auth/google";
  };

  const Divider = () => {
    const dividerStyle = {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
    };

    const lineStyle = {
      flexGrow: 1,
      height: "2px",
      background:
        "linear-gradient(to right, rgba(343, 346, 348, 0), rgba(243, 246, 248, 1), rgba(343, 346, 348, 0))",
    };

    const textStyle = {
      margin: "0 10px",
      whiteSpace: "nowrap",
      fontSize: "14px",
      color: "#888",
    };

    return (
      <div style={dividerStyle}>
        <span style={lineStyle}></span>
        <span style={textStyle}>
          <img
            className="img-fluid my-4"
            src={require("../../assets/images/OR.png")}
            alt="OR"
          />
        </span>
        <span style={lineStyle}></span>
      </div>
    );
  };

  return (
    <LoginLayout>
      <div className="container-fluid">
        <div className="row" id="bg">
          <div className="col-lg-6 pt-0" id="left-side">
            <form className="block pt-0" onSubmit={handleSubmit}>
              <div className="social-icons">
                <h1 className="h1sign">Sign up</h1>
                <p
                  className="plsign"
                  style={{
                    fontSize: 17,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                >
                  Please create an account
                </p>
                <button
                  className="button"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                  onClick={handleGoogleSignup}
                >
                  <img
                    src={require("../../assets/icons/search.png")}
                    width="15px"
                    alt="Google"
                  />{" "}
                  Sign up with Google
                </button>
                <Divider />
                <label className="label">Full Name</label>
                <input
                  type="text"
                  className="etext"
                  placeholder="Full name"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  value={displayName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.displayName && (
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      fontFamily: "Poppins",
                    }}
                  >
                    {errors.displayName}
                  </div>
                )}
                <label className="label">Email ID</label>
                <input
                  type="email"
                  className="etext"
                  placeholder="Email ID"
                  value={email}
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      fontFamily: "Poppins",
                    }}
                  >
                    {errors.email}
                  </div>
                )}
                <label className="label">Phone Number</label>
                <input
                  type="number"
                  className="etext"
                  placeholder="phone number"
                  value={phone}
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {errors.phone && (
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      fontFamily: "Poppins",
                    }}
                  >
                    {errors.phone}
                  </div>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="etext"
                  placeholder="Password"
                  value={password}
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      fontFamily: "Poppins",
                    }}
                  >
                    {errors.password}
                  </div>
                )}
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="etext"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                  }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      fontFamily: "Poppins",
                    }}
                  >
                    {errors.confirmPassword}
                  </div>
                )}
                {errors.server && (
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      fontFamily: "Poppins",
                    }}
                  >
                    {errors.server}
                  </div>
                )}
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <p
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                  >
                    By creating an account you agree to our{" "}
                    <a href="#terms">Terms & Conditions</a> and{" "}
                    <a href="#privacy">Privacy Policy</a>
                  </p>
                </div>
                <button
                  type="submit"
                  className="signup"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Sign up
                </button>
                <p
                  className="signup-text"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  Already have an account? <a href="/login">Log in</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}

export default Signup;
