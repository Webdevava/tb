import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import LoginLayout from "./LoginLayout";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithMobile from "./LoginWithMobile";
import axios from "axios";

function Loginone() {
  const [isLoginWithEmailVisible, setisLoginWithEmailVisible] = useState(false);
  const [isLoginWithMobileVisible, setisLoginWithMobileVisible] =
    useState(false);
  const [isSendOTPVisible, setSendOTPVisible] = useState(false);
  const navigate = useNavigate();
  const { choosedLoginOption, setChoosedLoginOption } = useContext(MyContext);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const userId = urlParams.get("userId");
    const name = urlParams.get("name");
    const email = urlParams.get("email");
    if (token && userId) {
      // User has been authenticated via Google
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      navigate("/mainHome"); // Redirect to dashboard or appropriate page
    }
  }, [navigate]);

  const Backend_URL = process.env.BACKEND_URL;

  const handleGoogleLogin = async () => {
    window.location.href = "https://api.tradeboard.in/auth/google";
  };

  const choosedLoginOptions = (option) => {
    switch (option) {
      case 1:
        return (
          <>
            <div className="backdiv" onClick={() => setChoosedLoginOption(3)}>
              <img
                className="backbtn"
                alt="backbtn"
                src={require("../../assets/images/back-button.png")}
              />
            </div>
            <LoginWithEmail />
          </>
        );
      case 2:
        return (
          <>
            <div className="backdiv" onClick={() => setChoosedLoginOption(3)}>
              <img
                className="backbtn"
                alt="backbtn"
                src={require("../../assets/images/back-button.png")}
              />
            </div>
            <LoginWithMobile isVisible={isSendOTPVisible} />
          </>
        );
      default:
        return (
          <form>
            <div className="social-icons">
              <h1>Log in to your account</h1>
              <p className="pl">Please select any one of them</p>
              <button
                type="button"
                className="butn"
                onClick={handleGoogleLogin}
              >
                <img
                  src={require("../../assets/icons/search.png")}
                  width="15"
                  alt="Google"
                />{" "}
                Log in with Google
              </button>
              <button
                type="button"
                className="butn"
                onClick={() => setChoosedLoginOption(1)}
              >
                <img
                  src={require("../../assets/icons/gmail.png")}
                  width="15"
                  alt="Email"
                />{" "}
                Log in with Email
              </button>
              <button
                type="button"
                className="butn"
                onClick={() => setChoosedLoginOption(2)}
              >
                <img
                  src={require("../../assets/icons/telephone-call.png")}
                  width="15"
                  alt="Mobile"
                />{" "}
                Log in with Mobile Number
              </button>
              <p className="signup-text">
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </form>
        );
    }
  };

  return <LoginLayout>{choosedLoginOptions(choosedLoginOption)}</LoginLayout>;
}

export default Loginone;
