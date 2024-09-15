import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
import "./style.css";
import LoginLayout from "./LoginLayout";

const images = [img1, img2, img3];

function LoginWithEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newErrors, setErrors] = useState({ email: "", password: "" });

  const Backend_URL = process.env.BACKEND_URL;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const forgotpasswordMethod = () => {
    navigate("/OTPsendgmail");
  };

  const loginUpMethod = async (e) => {
    e.preventDefault();
    const newError = {};

    if (!validateEmail(email)) {
      newError.email = "Invalid email address";
    } else {
      newError.email = "";
    }

    if (!validatePassword(password)) {
      newError.password =
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character";
    } else {
      newError.password = "";
    }

    setErrors(newError);

    if (newError.email === "" && newError.password === "") {
      try {
        const response = await axios.post(
          "https://api.tradeboard.in/auth/loginWithEmail",
          {
            email,
            password,
          }
        );

        if (response.status === 200) {
          // Reset errors on successful login
          setErrors({ email: "", password: "" });
          // localStorage.setItem("isLoggedIn", "1");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId); // Save userId
          localStorage.setItem("name", response.data.name); // Save name
          localStorage.setItem("email", response.data.email); // Save email

          // Redirect to OTP verification page
          navigate("/otpverification", {
            state: {
              userId: response.data.userId,
              token: response.data.token,
              // name: response.data.name,
              // email: response.data.email,
            },
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        setErrors({ ...newErrors, email: "Invalid credentials" });
      }
    } else {
      console.log("Form is not submitted successfully", newError);
    }
  };

  const signUpMethod = () => {
    console.log("sign up clicked");
    navigate("/signUp");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  return (
    <>
      <div>
        <form onSubmit={loginUpMethod}>
          <div className="email-form">
            <h1>Log in with Email</h1>
            <p
              className="p2"
              style={{
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              Please enter your registered email and password
            </p>
            <label className="label">Email ID</label>
            <input
              type="email"
              className="etext"
              placeholder="Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              style={{
                textAlign: "left",
                color: newErrors.email === "" ? "#000" : "red",
                fontFamily: "Poppins",
              }}
            >
              {newErrors?.email}
            </div>
            <label className="label">Password</label>
            <input
              type="password"
              className="etext"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              style={{
                textAlign: "left",
                color: newErrors.password === "" ? "#000" : "red",
                fontFamily: "Poppins",
              }}
            >
              {newErrors?.password}
            </div>
            <p
              style={{
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
              className="forgot-pass"
              onClick={() => forgotpasswordMethod()}
            >
              Forgot password?
            </p>
            <button
              type="submit"
              className="btn2"
              style={{
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              log in
            </button>

            <p
              className="signup-text"
              style={{
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginWithEmail;
