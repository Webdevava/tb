import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Rectangle.png";
import img3 from "../../assets/images/Rectangle.png";
// import ImageSlider from './ImageSlider';
import "./style2.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import GmailVerification from "./GmailVerification";
import PasswordNew from "./PasswordNew";

const images = [img1, img2, img3];

function OTPsendgmail() {
  const [isGmailVerificationVisible, setisGmailVerificationVisible] =
    useState(false);
  const [isLoginWithEmailVisible, setisLoginWithEmailVisible] = useState(true);

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const GmailVerificationMethod = () => {
    setisGmailVerificationVisible(true);
  };

  const backbtnMethod2 = () => {
    setisGmailVerificationVisible(false);
  };

  const backbtnMethod = () => {
    if (isGmailVerificationVisible) {
      setisGmailVerificationVisible(false);
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      OtpVerificationMethod();
    }
  };

  const OtpVerificationMethod = () => {
    // navigate("/otpverification", { state: { isLoginWithMobileProps: false } });
    navigate("/otpverification", { state: { isLoginWithMobileProps: false, emailID: email } });
  };

  return (
    <div className="container-fluid">
      <div className="row" id="bg">
        <div className="col-lg-6" id="left-side">
          <div className="backdiv" onClick={() => backbtnMethod()}>
            <img
              className="backbtn"
              src={require("../../assets/images/back-button.png")}
            />
          </div>
          {isGmailVerificationVisible ? (
            <GmailVerification />
          ) : (
            <>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="otpsendgmail">
                    <h1>Forgot Password?</h1>
                    <p className="p4" style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}>
                      Please enter your email to reset the password
                    </p>
                    <label className="label mb-1">Email ID</label>
                    <input
                      type="email"
                      className="vtext"
                      placeholder="Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <div style={{ color: "red", textAlign: "left",fontFamily:'Poppins' }}>
                        {errors.email}
                      </div>
                    )}
                    <button className="btn5" type="submit" style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}>
                      Send OTP
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <div className="col-lg-6" id="right-side">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>

          <div className="text">
            <h3>Welcome to Tradeboard! 
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4376 7.1251C24.9588 10.395 26.8251 14.4071 28.2251 16.0013C28.5001 15.3821 28.4701 14.3438 28.7826 11.8088C29.0651 9.52238 31.0001 9.30423 31.8313 9.46632C33.6688 9.84048 34.2276 11.6552 34.1663 12.3243C34.0688 13.3907 34.0638 13.3541 33.8638 15.9342C33.5701 19.7063 35.0638 22.5545 35.2013 25.7842C35.2013 31.8706 29.7301 34.8614 25.9013 34.8614C22.8376 34.8614 19.7713 32.9504 18.6226 31.9949L12.8776 26.8786C12.1751 26.346 10.4363 24.5861 9.67383 23.5734C7.59383 20.8153 10.6013 18.9153 12.2913 19.393C12.1588 19.2931 11.3563 18.0232 10.9726 17.4016C9.94133 15.3821 10.9726 14.0379 11.7351 13.6674C13.4638 12.8289 14.7351 13.7722 15.1351 14.2865C14.9813 14.033 14.5013 13.0068 13.7276 11.1238C12.9538 9.24207 14.2001 8.07938 14.9201 7.73326C16.4826 7.0276 17.9676 7.92338 18.3388 8.7241C18.5213 9.11532 19.5013 11.2104 19.9288 12.1329C19.6063 11.3676 19.0238 9.84535 18.8176 9.14213C18.4076 7.48463 19.3938 6.34876 20.0201 6.05626C20.8888 5.65041 22.7026 5.54438 23.4201 7.08488L23.4376 7.1251Z" fill="url(#paint0_radial_142_9382)"/>
                <path d="M23.4381 7.1251C24.9594 10.395 26.8256 14.4071 28.2256 16.0013C28.5006 15.3821 28.4706 14.3438 28.7831 11.8088C29.0656 9.52238 31.0006 9.30423 31.8319 9.46632C33.6694 9.84048 34.2281 11.6552 34.1669 12.3243C34.0694 13.3907 34.0644 13.3541 33.8644 15.9342C33.5706 19.7063 35.0644 22.5545 35.2019 25.7842C35.2019 31.8706 29.7306 34.8614 25.9019 34.8614C22.8381 34.8614 19.7719 32.9504 18.6231 31.9949L12.8781 26.8786C12.1744 26.346 10.4369 24.5861 9.67313 23.5734C7.59438 20.8153 10.6019 18.9153 12.2919 19.393C12.1594 19.2931 11.3569 18.0232 10.9731 17.4016C9.94188 15.3821 10.9731 14.0379 11.7356 13.6674C13.4644 12.8289 14.7356 13.7722 15.1356 14.2865C14.9819 14.033 14.5019 13.0068 13.7281 11.1238C12.9544 9.24207 14.2006 8.07938 14.9206 7.73326C16.4831 7.0276 17.9681 7.92338 18.3394 8.7241C18.5219 9.11532 19.5019 11.2104 19.9294 12.1329C19.6069 11.3676 19.0244 9.84535 18.8181 9.14213C18.4081 7.48463 19.3944 6.34876 20.0194 6.05626C20.8894 5.65041 22.7031 5.54438 23.4194 7.08488L23.4381 7.1251Z" fill="url(#paint1_radial_142_9382)"/>
                <path d="M34.1666 12.3243C34.0691 13.3908 34.0641 13.3542 33.8641 15.9343C33.7603 17.2676 34.5028 22.1755 34.5028 22.1755C32.6966 22.7508 28.7828 21.989 28.2266 16.0013C28.5003 15.3822 28.4703 14.3438 28.7828 11.8088C29.0653 9.52244 31.0003 9.30429 31.8316 9.46638C33.6691 9.84054 34.2278 11.6553 34.1666 12.3243Z" fill="url(#paint2_radial_142_9382)"/>
                <path d="M34.1666 12.3243C34.0691 13.3908 34.0641 13.3542 33.8641 15.9343C33.7603 17.2676 34.5028 22.1755 34.5028 22.1755C32.6966 22.7508 28.7828 21.989 28.2266 16.0013C28.5003 15.3822 28.4703 14.3438 28.7828 11.8088C29.0653 9.52244 31.0003 9.30429 31.8316 9.46638C33.6691 9.84054 34.2278 11.6553 34.1666 12.3243Z" fill="url(#paint3_radial_142_9382)"/>
                <path d="M34.1666 12.3243C34.0691 13.3908 34.0641 13.3542 33.8641 15.9343C33.7603 17.2676 34.5028 22.1755 34.5028 22.1755C32.6966 22.7508 28.7828 21.989 28.2266 16.0013C28.5003 15.3822 28.4703 14.3438 28.7828 11.8088C29.0653 9.52244 31.0003 9.30429 31.8316 9.46638C33.6691 9.84054 34.2278 11.6553 34.1666 12.3243Z" fill="url(#paint4_radial_142_9382)"/>
                <path d="M23.4375 7.1251C24.9588 10.395 26.825 14.4071 28.225 16.0013C28.0063 17.8245 26.335 18.6971 24.895 18.3705C23.0788 17.8562 22.3888 16.5997 22.3888 16.5997C22.3888 16.5997 21.9138 15.883 21.4513 15.0945C20.9163 14.1829 21.0138 14.2036 20.1175 12.5534C19.9413 12.2292 19.0788 10.0306 18.8175 9.14213C18.4075 7.48463 19.3938 6.34876 20.02 6.05626C20.8888 5.65041 22.7025 5.54438 23.42 7.08488L23.4375 7.1251Z" fill="url(#paint5_radial_142_9382)"/>
                <path d="M23.4375 7.1251C24.9588 10.395 26.825 14.4071 28.225 16.0013C28.0063 17.8245 26.335 18.6971 24.895 18.3705C23.0788 17.8562 22.3888 16.5997 22.3888 16.5997C22.3888 16.5997 21.9138 15.883 21.4513 15.0945C20.9163 14.1829 21.0138 14.2036 20.1175 12.5534C19.9413 12.2292 19.0788 10.0306 18.8175 9.14213C18.4075 7.48463 19.3938 6.34876 20.02 6.05626C20.8888 5.65041 22.7025 5.54438 23.42 7.08488L23.4375 7.1251Z" fill="url(#paint6_linear_142_9382)"/>
                <path d="M23.4375 7.1251C24.9588 10.395 26.825 14.4071 28.225 16.0013C28.0063 17.8245 26.335 18.6971 24.895 18.3705C23.0788 17.8562 22.3888 16.5997 22.3888 16.5997C22.3888 16.5997 21.9138 15.883 21.4513 15.0945C20.9163 14.1829 21.0138 14.2036 20.1175 12.5534C19.9413 12.2292 19.0788 10.0306 18.8175 9.14213C18.4075 7.48463 19.3938 6.34876 20.02 6.05626C20.8888 5.65041 22.7025 5.54438 23.42 7.08488L23.4375 7.1251Z" fill="url(#paint7_radial_142_9382)"/>
                <path d="M23.4375 7.1251C24.9588 10.395 26.825 14.4071 28.225 16.0013C28.0063 17.8245 26.335 18.6971 24.895 18.3705C23.0788 17.8562 22.3888 16.5997 22.3888 16.5997C22.3888 16.5997 21.9138 15.883 21.4513 15.0945C20.9163 14.1829 21.0138 14.2036 20.1175 12.5534C19.9413 12.2292 19.0788 10.0306 18.8175 9.14213C18.4075 7.48463 19.3938 6.34876 20.02 6.05626C20.8888 5.65041 22.7025 5.54438 23.42 7.08488L23.4375 7.1251Z" fill="url(#paint8_radial_142_9382)"/>
                <path d="M23.4375 7.1251C24.9588 10.395 26.825 14.4071 28.225 16.0013C28.0063 17.8245 26.335 18.6971 24.895 18.3705C23.0788 17.8562 22.3888 16.5997 22.3888 16.5997C22.3888 16.5997 21.9138 15.883 21.4513 15.0945C20.9163 14.1829 21.0138 14.2036 20.1175 12.5534C19.9413 12.2292 19.0788 10.0306 18.8175 9.14213C18.4075 7.48463 19.3938 6.34876 20.02 6.05626C20.8888 5.65041 22.7025 5.54438 23.42 7.08488L23.4375 7.1251Z" fill="url(#paint9_linear_142_9382)"/>
                <path d="M18.3386 8.72418C18.5836 9.25068 20.2736 12.8582 20.1173 12.5535C20.5711 13.5529 21.9798 15.9904 22.3886 16.657C23.2936 18.1268 22.2723 19.3492 21.6136 19.7222C19.7173 20.7947 18.6286 19.4272 18.6286 19.4272C17.6286 17.9989 16.7936 16.8094 15.1423 14.2768C14.7448 13.5456 14.0198 11.9149 13.7273 11.1239C13.0061 9.17147 14.1998 8.07947 14.9198 7.73334C16.4823 7.02768 17.9673 7.92347 18.3386 8.72418Z" fill="url(#paint10_radial_142_9382)"/>
                <path d="M18.3386 8.72418C18.5836 9.25068 20.2736 12.8582 20.1173 12.5535C20.5711 13.5529 21.9798 15.9904 22.3886 16.657C23.2936 18.1268 22.2723 19.3492 21.6136 19.7222C19.7173 20.7947 18.6286 19.4272 18.6286 19.4272C17.6286 17.9989 16.7936 16.8094 15.1423 14.2768C14.7448 13.5456 14.0198 11.9149 13.7273 11.1239C13.0061 9.17147 14.1998 8.07947 14.9198 7.73334C16.4823 7.02768 17.9673 7.92347 18.3386 8.72418Z" fill="url(#paint11_linear_142_9382)"/>
                <path d="M18.3386 8.72418C18.5836 9.25068 20.2736 12.8582 20.1173 12.5535C20.5711 13.5529 21.9798 15.9904 22.3886 16.657C23.2936 18.1268 22.2723 19.3492 21.6136 19.7222C19.7173 20.7947 18.6286 19.4272 18.6286 19.4272C17.6286 17.9989 16.7936 16.8094 15.1423 14.2768C14.7448 13.5456 14.0198 11.9149 13.7273 11.1239C13.0061 9.17147 14.1998 8.07947 14.9198 7.73334C16.4823 7.02768 17.9673 7.92347 18.3386 8.72418Z" fill="url(#paint12_radial_142_9382)"/>
                <path d="M18.3386 8.72418C18.5836 9.25068 20.2736 12.8582 20.1173 12.5535C20.5711 13.5529 21.9798 15.9904 22.3886 16.657C23.2936 18.1268 22.2723 19.3492 21.6136 19.7222C19.7173 20.7947 18.6286 19.4272 18.6286 19.4272C17.6286 17.9989 16.7936 16.8094 15.1423 14.2768C14.7448 13.5456 14.0198 11.9149 13.7273 11.1239C13.0061 9.17147 14.1998 8.07947 14.9198 7.73334C16.4823 7.02768 17.9673 7.92347 18.3386 8.72418Z" fill="url(#paint13_radial_142_9382)"/>
                <path d="M18.3386 8.72418C18.5836 9.25068 20.2736 12.8582 20.1173 12.5535C20.5711 13.5529 21.9798 15.9904 22.3886 16.657C23.2936 18.1268 22.2723 19.3492 21.6136 19.7222C19.7173 20.7947 18.6286 19.4272 18.6286 19.4272C17.6286 17.9989 16.7936 16.8094 15.1423 14.2768C14.7448 13.5456 14.0198 11.9149 13.7273 11.1239C13.0061 9.17147 14.1998 8.07947 14.9198 7.73334C16.4823 7.02768 17.9673 7.92347 18.3386 8.72418Z" fill="url(#paint14_radial_142_9382)"/>
                <path d="M18.3386 8.72418C18.5836 9.25068 20.2736 12.8582 20.1173 12.5535C20.5711 13.5529 21.9798 15.9904 22.3886 16.657C23.2936 18.1268 22.2723 19.3492 21.6136 19.7222C19.7173 20.7947 18.6286 19.4272 18.6286 19.4272C17.6286 17.9989 16.7936 16.8094 15.1423 14.2768C14.7448 13.5456 14.0198 11.9149 13.7273 11.1239C13.0061 9.17147 14.1998 8.07947 14.9198 7.73334C16.4823 7.02768 17.9673 7.92347 18.3386 8.72418Z" fill="url(#paint15_linear_142_9382)"/>
                <path d="M11.7358 13.6674C13.4645 12.8289 14.7358 13.7722 15.1358 14.2865C16.3845 16.1232 17.8733 18.2109 18.5608 19.3224C20.3983 22.284 16.6383 23.5685 16.6383 23.5685C13.1808 19.7697 12.5408 19.5784 12.292 19.3919C12.1595 19.2932 11.357 18.0232 10.9733 17.4017C9.94201 15.3822 10.9733 14.0367 11.7358 13.6674Z" fill="url(#paint16_radial_142_9382)"/>
                <path d="M11.7358 13.6674C13.4645 12.8289 14.7358 13.7722 15.1358 14.2865C16.3845 16.1232 17.8733 18.2109 18.5608 19.3224C20.3983 22.284 16.6383 23.5685 16.6383 23.5685C13.1808 19.7697 12.5408 19.5784 12.292 19.3919C12.1595 19.2932 11.357 18.0232 10.9733 17.4017C9.94201 15.3822 10.9733 14.0367 11.7358 13.6674Z" fill="url(#paint17_linear_142_9382)"/>
                <path d="M11.7358 13.6674C13.4645 12.8289 14.7358 13.7722 15.1358 14.2865C16.3845 16.1232 17.8733 18.2109 18.5608 19.3224C20.3983 22.284 16.6383 23.5685 16.6383 23.5685C13.1808 19.7697 12.5408 19.5784 12.292 19.3919C12.1595 19.2932 11.357 18.0232 10.9733 17.4017C9.94201 15.3822 10.9733 14.0367 11.7358 13.6674Z" fill="url(#paint18_radial_142_9382)"/>
                <path d="M11.7358 13.6674C13.4645 12.8289 14.7358 13.7722 15.1358 14.2865C16.3845 16.1232 17.8733 18.2109 18.5608 19.3224C20.3983 22.284 16.6383 23.5685 16.6383 23.5685C13.1808 19.7697 12.5408 19.5784 12.292 19.3919C12.1595 19.2932 11.357 18.0232 10.9733 17.4017C9.94201 15.3822 10.9733 14.0367 11.7358 13.6674Z" fill="url(#paint19_radial_142_9382)"/>
                <path d="M11.7358 13.6674C13.4645 12.8289 14.7358 13.7722 15.1358 14.2865C16.3845 16.1232 17.8733 18.2109 18.5608 19.3224C20.3983 22.284 16.6383 23.5685 16.6383 23.5685C13.1808 19.7697 12.5408 19.5784 12.292 19.3919C12.1595 19.2932 11.357 18.0232 10.9733 17.4017C9.94201 15.3822 10.9733 14.0367 11.7358 13.6674Z" fill="url(#paint20_radial_142_9382)"/>
                <path d="M11.7358 13.6674C13.4645 12.8289 14.7358 13.7722 15.1358 14.2865C16.3845 16.1232 17.8733 18.2109 18.5608 19.3224C20.3983 22.284 16.6383 23.5685 16.6383 23.5685C13.1808 19.7697 12.5408 19.5784 12.292 19.3919C12.1595 19.2932 11.357 18.0232 10.9733 17.4017C9.94201 15.3822 10.9733 14.0367 11.7358 13.6674Z" fill="url(#paint21_radial_142_9382)"/>
                <path d="M9.67313 23.5734C7.59438 20.8154 10.6019 18.9153 12.2919 19.3931C13.0919 19.8745 14.3294 21.0823 14.8556 21.627C18.2081 24.8141 17.6494 25.7976 16.7119 26.8799C15.8031 27.6135 14.6219 28.2022 12.8781 26.8799C12.1744 26.346 10.4369 24.5862 9.67313 23.5734Z" fill="url(#paint22_radial_142_9382)"/>
                <path d="M9.67313 23.5734C7.59438 20.8154 10.6019 18.9153 12.2919 19.3931C13.0919 19.8745 14.3294 21.0823 14.8556 21.627C18.2081 24.8141 17.6494 25.7976 16.7119 26.8799C15.8031 27.6135 14.6219 28.2022 12.8781 26.8799C12.1744 26.346 10.4369 24.5862 9.67313 23.5734Z" fill="url(#paint23_radial_142_9382)"/>
                <path d="M9.67313 23.5734C7.59438 20.8154 10.6019 18.9153 12.2919 19.3931C13.0919 19.8745 14.3294 21.0823 14.8556 21.627C18.2081 24.8141 17.6494 25.7976 16.7119 26.8799C15.8031 27.6135 14.6219 28.2022 12.8781 26.8799C12.1744 26.346 10.4369 24.5862 9.67313 23.5734Z" fill="url(#paint24_radial_142_9382)"/>
                <path d="M9.67313 23.5734C7.59438 20.8154 10.6019 18.9153 12.2919 19.3931C13.0919 19.8745 14.3294 21.0823 14.8556 21.627C18.2081 24.8141 17.6494 25.7976 16.7119 26.8799C15.8031 27.6135 14.6219 28.2022 12.8781 26.8799C12.1744 26.346 10.4369 24.5862 9.67313 23.5734Z" fill="url(#paint25_radial_142_9382)"/>
                <path d="M9.67313 23.5734C7.59438 20.8154 10.6019 18.9153 12.2919 19.3931C13.0919 19.8745 14.3294 21.0823 14.8556 21.627C18.2081 24.8141 17.6494 25.7976 16.7119 26.8799C15.8031 27.6135 14.6219 28.2022 12.8781 26.8799C12.1744 26.346 10.4369 24.5862 9.67313 23.5734Z" fill="url(#paint26_linear_142_9382)"/>
                <path d="M23.4381 7.1251C24.9594 10.395 26.8256 14.4071 28.2256 16.0013C28.5006 15.3821 28.4706 14.3438 28.7831 11.8088C29.0656 9.52238 31.0006 9.30423 31.8319 9.46632C33.6694 9.84048 34.2281 11.6552 34.1669 12.3243C34.0694 13.3907 34.0644 13.3541 33.8644 15.9342C33.5706 19.7063 35.0644 22.5545 35.2019 25.7842C35.2019 31.8706 29.7306 34.8614 25.9019 34.8614C22.8381 34.8614 19.7719 32.9504 18.6231 31.9949L12.8781 26.8786C12.1744 26.346 10.4369 24.5861 9.67313 23.5734C7.59438 20.8153 10.6019 18.9153 12.2919 19.393C12.1594 19.2931 11.3569 18.0232 10.9731 17.4016C9.94188 15.3821 10.9731 14.0379 11.7356 13.6674C13.4644 12.8289 14.7356 13.7722 15.1356 14.2865C14.9819 14.033 14.5019 13.0068 13.7281 11.1238C12.9544 9.24207 14.2006 8.07938 14.9206 7.73326C16.4831 7.0276 17.9681 7.92338 18.3394 8.7241C18.5219 9.11532 19.5019 11.2104 19.9294 12.1329C19.6069 11.3676 19.0244 9.84535 18.8181 9.14213C18.4081 7.48463 19.3944 6.34876 20.0194 6.05626C20.8894 5.65041 22.7031 5.54438 23.4194 7.08488L23.4381 7.1251Z" fill="url(#paint27_radial_142_9382)"/>
                <path d="M23.4381 7.1251C24.9594 10.395 26.8256 14.4071 28.2256 16.0013C28.5006 15.3821 28.4706 14.3438 28.7831 11.8088C29.0656 9.52238 31.0006 9.30423 31.8319 9.46632C33.6694 9.84048 34.2281 11.6552 34.1669 12.3243C34.0694 13.3907 34.0644 13.3541 33.8644 15.9342C33.5706 19.7063 35.0644 22.5545 35.2019 25.7842C35.2019 31.8706 29.7306 34.8614 25.9019 34.8614C22.8381 34.8614 19.7719 32.9504 18.6231 31.9949L12.8781 26.8786C12.1744 26.346 10.4369 24.5861 9.67313 23.5734C7.59438 20.8153 10.6019 18.9153 12.2919 19.393C12.1594 19.2931 11.3569 18.0232 10.9731 17.4016C9.94188 15.3821 10.9731 14.0379 11.7356 13.6674C13.4644 12.8289 14.7356 13.7722 15.1356 14.2865C14.9819 14.033 14.5019 13.0068 13.7281 11.1238C12.9544 9.24207 14.2006 8.07938 14.9206 7.73326C16.4831 7.0276 17.9681 7.92338 18.3394 8.7241C18.5219 9.11532 19.5019 11.2104 19.9294 12.1329C19.6069 11.3676 19.0244 9.84535 18.8181 9.14213C18.4081 7.48463 19.3944 6.34876 20.0194 6.05626C20.8894 5.65041 22.7031 5.54438 23.4194 7.08488L23.4381 7.1251Z" fill="url(#paint28_radial_142_9382)"/>
                <path d="M23.4381 7.1251C24.9594 10.395 26.8256 14.4071 28.2256 16.0013C28.5006 15.3821 28.4706 14.3438 28.7831 11.8088C29.0656 9.52238 31.0006 9.30423 31.8319 9.46632C33.6694 9.84048 34.2281 11.6552 34.1669 12.3243C34.0694 13.3907 34.0644 13.3541 33.8644 15.9342C33.5706 19.7063 35.0644 22.5545 35.2019 25.7842C35.2019 31.8706 29.7306 34.8614 25.9019 34.8614C22.8381 34.8614 19.7719 32.9504 18.6231 31.9949L12.8781 26.8786C12.1744 26.346 10.4369 24.5861 9.67313 23.5734C7.59438 20.8153 10.6019 18.9153 12.2919 19.393C12.1594 19.2931 11.3569 18.0232 10.9731 17.4016C9.94188 15.3821 10.9731 14.0379 11.7356 13.6674C13.4644 12.8289 14.7356 13.7722 15.1356 14.2865C14.9819 14.033 14.5019 13.0068 13.7281 11.1238C12.9544 9.24207 14.2006 8.07938 14.9206 7.73326C16.4831 7.0276 17.9681 7.92338 18.3394 8.7241C18.5219 9.11532 19.5019 11.2104 19.9294 12.1329C19.6069 11.3676 19.0244 9.84535 18.8181 9.14213C18.4081 7.48463 19.3944 6.34876 20.0194 6.05626C20.8894 5.65041 22.7031 5.54438 23.4194 7.08488L23.4381 7.1251Z" fill="url(#paint29_radial_142_9382)"/>
                <path d="M25.5585 11.5017C26.4972 13.3713 27.4347 15.0471 28.2272 15.9648C28.3085 16.7813 28.381 17.2469 28.581 17.9513C26.9997 16.4084 25.4685 13.0361 25.5585 11.5017Z" fill="url(#paint30_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15813 19.0969C3.33693 19.0972 3.5083 19.1667 3.63461 19.2901C3.76093 19.4135 3.83188 19.5807 3.83188 19.755C3.83188 20.8519 4.28688 22.3205 5.26813 23.5064C6.23063 24.6727 7.69313 25.5551 9.74312 25.5551C9.92181 25.5551 10.0932 25.6243 10.2195 25.7475C10.3459 25.8707 10.4169 26.0378 10.4169 26.212C10.4169 26.3862 10.3459 26.5533 10.2195 26.6765C10.0932 26.7997 9.92181 26.8689 9.74312 26.8689C7.24062 26.8689 5.40938 25.772 4.21813 24.3315C3.04563 22.9128 2.48438 21.1517 2.48438 19.7538C2.48471 19.5797 2.5558 19.4128 2.68208 19.2897C2.80836 19.1666 2.97954 19.0972 3.15813 19.0969Z" fill="url(#paint31_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15813 19.0969C3.33693 19.0972 3.5083 19.1667 3.63461 19.2901C3.76093 19.4135 3.83188 19.5807 3.83188 19.755C3.83188 20.8519 4.28688 22.3205 5.26813 23.5064C6.23063 24.6727 7.69313 25.5551 9.74312 25.5551C9.92181 25.5551 10.0932 25.6243 10.2195 25.7475C10.3459 25.8707 10.4169 26.0378 10.4169 26.212C10.4169 26.3862 10.3459 26.5533 10.2195 26.6765C10.0932 26.7997 9.92181 26.8689 9.74312 26.8689C7.24062 26.8689 5.40938 25.772 4.21813 24.3315C3.04563 22.9128 2.48438 21.1517 2.48438 19.7538C2.48471 19.5797 2.5558 19.4128 2.68208 19.2897C2.80836 19.1666 2.97954 19.0972 3.15813 19.0969Z" fill="url(#paint32_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15813 19.0969C3.33693 19.0972 3.5083 19.1667 3.63461 19.2901C3.76093 19.4135 3.83188 19.5807 3.83188 19.755C3.83188 20.8519 4.28688 22.3205 5.26813 23.5064C6.23063 24.6727 7.69313 25.5551 9.74312 25.5551C9.92181 25.5551 10.0932 25.6243 10.2195 25.7475C10.3459 25.8707 10.4169 26.0378 10.4169 26.212C10.4169 26.3862 10.3459 26.5533 10.2195 26.6765C10.0932 26.7997 9.92181 26.8689 9.74312 26.8689C7.24062 26.8689 5.40938 25.772 4.21813 24.3315C3.04563 22.9128 2.48438 21.1517 2.48438 19.7538C2.48471 19.5797 2.5558 19.4128 2.68208 19.2897C2.80836 19.1666 2.97954 19.0972 3.15813 19.0969Z" fill="url(#paint33_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.06047 21.4406C1.23949 21.4406 1.41118 21.5099 1.53777 21.6333C1.66435 21.7567 1.73547 21.9241 1.73547 22.0987C1.73547 24.4265 3.52297 27.5367 7.28047 27.5367C7.45916 27.5367 7.63053 27.606 7.75688 27.7291C7.88323 27.8523 7.95422 28.0194 7.95422 28.1936C7.95422 28.3679 7.88323 28.535 7.75688 28.6581C7.63053 28.7813 7.45916 28.8506 7.28047 28.8506C2.55547 28.8506 0.386719 24.914 0.386719 22.0987C0.386719 21.9241 0.457834 21.7567 0.584422 21.6333C0.711009 21.5099 0.881447 21.4406 1.06047 21.4406Z" fill="url(#paint34_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.06047 21.4406C1.23949 21.4406 1.41118 21.5099 1.53777 21.6333C1.66435 21.7567 1.73547 21.9241 1.73547 22.0987C1.73547 24.4265 3.52297 27.5367 7.28047 27.5367C7.45916 27.5367 7.63053 27.606 7.75688 27.7291C7.88323 27.8523 7.95422 28.0194 7.95422 28.1936C7.95422 28.3679 7.88323 28.535 7.75688 28.6581C7.63053 28.7813 7.45916 28.8506 7.28047 28.8506C2.55547 28.8506 0.386719 24.914 0.386719 22.0987C0.386719 21.9241 0.457834 21.7567 0.584422 21.6333C0.711009 21.5099 0.881447 21.4406 1.06047 21.4406Z" fill="url(#paint35_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2953 10.5072C26.2069 10.5077 26.1192 10.4912 26.0372 10.4586C25.9553 10.426 25.8807 10.378 25.8178 10.3174C25.7549 10.2567 25.7049 10.1846 25.6706 10.1051C25.6363 10.0255 25.6183 9.94021 25.6178 9.85394C25.6103 8.75707 25.1453 7.29091 24.1566 6.11116C23.1853 4.95091 21.7191 4.07829 19.6678 4.09047C19.4961 4.08142 19.3345 4.00882 19.2158 3.88748C19.0971 3.76615 19.0304 3.60523 19.0293 3.43758C19.0282 3.26993 19.0927 3.10818 19.2098 2.98536C19.3268 2.86253 19.4875 2.78789 19.6591 2.77666C22.1616 2.76082 24.0003 3.84794 25.2003 5.27997C26.3828 6.69129 26.9553 8.44872 26.9653 9.84541C26.966 9.93178 26.9492 10.0174 26.9159 10.0975C26.8825 10.1775 26.8333 10.2503 26.7711 10.3118C26.7089 10.3732 26.6348 10.4221 26.5532 10.4557C26.4715 10.4892 26.3839 10.5067 26.2953 10.5072Z" fill="url(#paint36_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2953 10.5072C26.2069 10.5077 26.1192 10.4912 26.0372 10.4586C25.9553 10.426 25.8807 10.378 25.8178 10.3174C25.7549 10.2567 25.7049 10.1846 25.6706 10.1051C25.6363 10.0255 25.6183 9.94021 25.6178 9.85394C25.6103 8.75707 25.1453 7.29091 24.1566 6.11116C23.1853 4.95091 21.7191 4.07829 19.6678 4.09047C19.4961 4.08142 19.3345 4.00882 19.2158 3.88748C19.0971 3.76615 19.0304 3.60523 19.0293 3.43758C19.0282 3.26993 19.0927 3.10818 19.2098 2.98536C19.3268 2.86253 19.4875 2.78789 19.6591 2.77666C22.1616 2.76082 24.0003 3.84794 25.2003 5.27997C26.3828 6.69129 26.9553 8.44872 26.9653 9.84541C26.966 9.93178 26.9492 10.0174 26.9159 10.0975C26.8825 10.1775 26.8333 10.2503 26.7711 10.3118C26.7089 10.3732 26.6348 10.4221 26.5532 10.4557C26.4715 10.4892 26.3839 10.5067 26.2953 10.5072Z" fill="url(#paint37_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3756 8.15133C28.2872 8.15181 28.1995 8.13529 28.1175 8.10273C28.0356 8.07016 27.961 8.02217 27.8981 7.96151C27.8352 7.90085 27.7852 7.8287 27.7509 7.74919C27.7165 7.66967 27.6986 7.58434 27.6981 7.49808C27.6819 5.17027 25.8731 2.06977 22.1156 2.09414C21.9369 2.09527 21.7651 2.02715 21.6379 1.90475C21.5108 1.78236 21.4387 1.61572 21.4375 1.4415C21.4364 1.26728 21.5062 1.09974 21.6318 0.975747C21.7573 0.851754 21.9282 0.781459 22.1069 0.780328C26.8319 0.749859 29.0256 4.67423 29.0444 7.48955C29.045 7.57581 29.0283 7.66136 28.995 7.74131C28.9618 7.82125 28.9127 7.89403 28.8506 7.95548C28.7885 8.01693 28.7146 8.06586 28.6331 8.09946C28.5516 8.13307 28.4641 8.15069 28.3756 8.15133Z" fill="url(#paint38_radial_142_9382)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3756 8.15133C28.2872 8.15181 28.1995 8.13529 28.1175 8.10273C28.0356 8.07016 27.961 8.02217 27.8981 7.96151C27.8352 7.90085 27.7852 7.8287 27.7509 7.74919C27.7165 7.66967 27.6986 7.58434 27.6981 7.49808C27.6819 5.17027 25.8731 2.06977 22.1156 2.09414C21.9369 2.09527 21.7651 2.02715 21.6379 1.90475C21.5108 1.78236 21.4387 1.61572 21.4375 1.4415C21.4364 1.26728 21.5062 1.09974 21.6318 0.975747C21.7573 0.851754 21.9282 0.781459 22.1069 0.780328C26.8319 0.749859 29.0256 4.67423 29.0444 7.48955C29.045 7.57581 29.0283 7.66136 28.995 7.74131C28.9618 7.82125 28.9127 7.89403 28.8506 7.95548C28.7885 8.01693 28.7146 8.06586 28.6331 8.09946C28.5516 8.13307 28.4641 8.15069 28.3756 8.15133Z" fill="url(#paint39_radial_142_9382)"/>
                <g filter="url(#filter0_f_142_9382)">
                <path d="M26.1643 16.0854C23.743 17.0373 18.2643 20.1646 16.6543 27.1322" stroke="#FFC339" stroke-width="2" stroke-linecap="round"/>
                </g>
                <defs>
                <filter id="filter0_f_142_9382" x="13.6543" y="13.0852" width="15.5098" height="17.0472" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_142_9382"/>
                </filter>
                <radialGradient id="paint0_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.0838 15.3614) rotate(59.4698) scale(25.8222 17.0814)">
                <stop offset="0.003" stop-color="#FFC133"/>
                <stop offset="0.698" stop-color="#FFC53F"/>
                <stop offset="0.797" stop-color="#FFAD3E"/>
                <stop offset="0.945" stop-color="#EC7D58"/>
                </radialGradient>
                <radialGradient id="paint1_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.2019 20.9981) rotate(-93.0891) scale(15.2234 5.98071)">
                <stop offset="0.003" stop-color="#FFE849"/>
                <stop offset="1" stop-color="#FFE647" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.3267 10.1052) rotate(99.9254) scale(8.15824 3.20084)">
                <stop offset="0.003" stop-color="#FFE849"/>
                <stop offset="1" stop-color="#FFE647" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint3_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.2253 15.0141) scale(3.38184 13.3718)">
                <stop stop-color="#EE9F2C"/>
                <stop offset="1" stop-color="#EE9F2C" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint4_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.7103 20.1987) rotate(-94.19) scale(5.55057 3.95311)">
                <stop stop-color="#FFC93D"/>
                <stop offset="1" stop-color="#FFC33A" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint5_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.53 11.7734) rotate(151.635) scale(5.94858 11.7874)">
                <stop offset="0.563" stop-color="#F09D2E" stop-opacity="0"/>
                <stop offset="1" stop-color="#F09D2E"/>
                </radialGradient>
                <linearGradient id="paint6_linear_142_9382" x1="23.4738" y1="17.7502" x2="23.4738" y2="14.5997" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC337"/>
                <stop offset="1" stop-color="#FFC337" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="paint7_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.28 7.13485) rotate(-13.1702) scale(4.01177 8.67304)">
                <stop stop-color="#FFEC4C"/>
                <stop offset="1" stop-color="#FFEC4C" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint8_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.7213 5.79666) rotate(32.644) scale(3.8925 2.98691)">
                <stop stop-color="#D99F2B"/>
                <stop offset="1" stop-color="#D99F2B" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="paint9_linear_142_9382" x1="19.3425" y1="13.4955" x2="21.2762" y2="12.5432" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A85300"/>
                <stop offset="0.825" stop-color="#A85300" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="paint10_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.8911 13.576) rotate(149.783) scale(5.73012 11.8121)">
                <stop offset="0.563" stop-color="#F09D2E" stop-opacity="0"/>
                <stop offset="1" stop-color="#F09D2E"/>
                </radialGradient>
                <linearGradient id="paint11_linear_142_9382" x1="17.9998" y1="19.6759" x2="17.9998" y2="16.4608" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC337"/>
                <stop offset="1" stop-color="#FFC337" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="paint12_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.2261 9.99168) rotate(-33.2247) scale(3.79818 11.4503)">
                <stop stop-color="#FFEC4C"/>
                <stop offset="1" stop-color="#FFEC4C" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint13_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.3111 14.5998) rotate(-24.3552) scale(4.80238 21.5689)">
                <stop offset="0.598" stop-color="#F09D2E" stop-opacity="0"/>
                <stop offset="1" stop-color="#F09D2E"/>
                </radialGradient>
                <radialGradient id="paint14_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.9361 7.4774) rotate(31.9458) scale(3.95896 3.1212)">
                <stop stop-color="#D99F2B"/>
                <stop offset="1" stop-color="#D99F2B" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="paint15_linear_142_9382" x1="14.6936" y1="15.3615" x2="15.9718" y2="14.4451" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A85300"/>
                <stop offset="0.825" stop-color="#A85300" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="paint16_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5445 18.451) rotate(138.073) scale(4.72376 9.22793)">
                <stop offset="0.563" stop-color="#F09D2E" stop-opacity="0"/>
                <stop offset="1" stop-color="#F09D2E"/>
                </radialGradient>
                <linearGradient id="paint17_linear_142_9382" x1="14.8033" y1="23.5685" x2="14.8033" y2="20.8714" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC337"/>
                <stop offset="1" stop-color="#FFC337" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="paint18_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.3733 14.4535) rotate(-11.9975) scale(3.6351 7.5245)">
                <stop stop-color="#FFEC4C"/>
                <stop offset="1" stop-color="#FFEC4C" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint19_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.1508 19.3102) rotate(-39.5034) scale(5.00962 25.4954)">
                <stop offset="0.598" stop-color="#F09D2E" stop-opacity="0"/>
                <stop offset="1" stop-color="#F09D2E"/>
                </radialGradient>
                <radialGradient id="paint20_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.0008 13.3335) rotate(28.8858) scale(3.63883 2.70258)">
                <stop stop-color="#D99F2B"/>
                <stop offset="1" stop-color="#D99F2B" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint21_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.9208 20.351) rotate(-45.0387) scale(2.04536 9.23832)">
                <stop stop-color="#A85300"/>
                <stop offset="0.825" stop-color="#A85300" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint22_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.4819 23.7501) rotate(144.061) scale(4.65607 8.69445)">
                <stop offset="0.563" stop-color="#F09D2E" stop-opacity="0"/>
                <stop offset="1" stop-color="#F09D2E"/>
                </radialGradient>
                <radialGradient id="paint23_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.2244 20.2876) rotate(-9.73301) scale(3.8697 6.56428)">
                <stop stop-color="#FFEC4C"/>
                <stop offset="1" stop-color="#FFEC4C" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint24_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.8397 24.4934) rotate(-33.6417) scale(4.98025 23.8168)">
                <stop offset="0.598" stop-color="#F09D2E" stop-opacity="0"/>
                <stop offset="1" stop-color="#F09D2E"/>
                </radialGradient>
                <radialGradient id="paint25_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.38813 19.3199) rotate(24.0043) scale(3.74108 2.44124)">
                <stop stop-color="#D99F2B"/>
                <stop offset="1" stop-color="#D99F2B" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="paint26_linear_142_9382" x1="16.6869" y1="32.1193" x2="13.6672" y2="25.7848" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC337"/>
                <stop offset="1" stop-color="#FFC337" stop-opacity="0"/>
                </linearGradient>
                <radialGradient id="paint27_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.9369 13.7624) rotate(129.725) scale(21.3922 34.7673)">
                <stop offset="0.872" stop-color="#F6814F" stop-opacity="0"/>
                <stop offset="1" stop-color="#F7814F"/>
                </radialGradient>
                <radialGradient id="paint28_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.4056 13.9903) rotate(75.9553) scale(22.5349 25.286)">
                <stop offset="0.853" stop-color="#F6814F" stop-opacity="0"/>
                <stop offset="1" stop-color="#F7814F"/>
                </radialGradient>
                <radialGradient id="paint29_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.6394 8.27804) rotate(63.8709) scale(3.90275 3.53429)">
                <stop stop-color="#D99F2B"/>
                <stop offset="1" stop-color="#D99F2B" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint30_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.5821 15.7035) rotate(149.887) scale(1.50718 4.60664)">
                <stop offset="0.201" stop-color="#B4813D"/>
                <stop offset="1" stop-color="#B4813D" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint31_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.11687 19.4504) rotate(61.4664) scale(6.51098 9.7921)">
                <stop stop-color="#419FFD"/>
                <stop offset="1" stop-color="#4B6DCB"/>
                </radialGradient>
                <radialGradient id="paint32_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.23812 19.9318) rotate(2.32636) scale(0.938273 1.9254)">
                <stop stop-color="#5486C7"/>
                <stop offset="1" stop-color="#5486C7" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint33_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.27062 25.1492) rotate(112.306) scale(0.926252 2.77442)">
                <stop stop-color="#5486C7"/>
                <stop offset="1" stop-color="#5486C7" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint34_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.60295 22.8256) rotate(94.8323) scale(5.12172 8.82939)">
                <stop stop-color="#419FFD"/>
                <stop offset="1" stop-color="#4B6DCB"/>
                </radialGradient>
                <radialGradient id="paint35_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.152969 22.2364) rotate(2.32565) scale(0.895012 1.83574)">
                <stop stop-color="#5486C7"/>
                <stop offset="1" stop-color="#5486C7" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint36_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.1353 1.35925) rotate(59.5664) scale(5.4743 8.22131)">
                <stop stop-color="#419FFD"/>
                <stop offset="1" stop-color="#4B6DCB"/>
                </radialGradient>
                <radialGradient id="paint37_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8366 3.32902) rotate(18.4217) scale(0.800564 1.26285)">
                <stop stop-color="#4D8AC1"/>
                <stop offset="1" stop-color="#4D8AC1" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint38_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.4844 -0.571266) rotate(60.0668) scale(6.79943 10.2179)">
                <stop stop-color="#419FFD"/>
                <stop offset="1" stop-color="#4B6DCB"/>
                </radialGradient>
                <radialGradient id="paint39_radial_142_9382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.2931 1.30734) rotate(18.4138) scale(0.763611 1.2041)">
                <stop stop-color="#4D8AC1"/>
                <stop offset="1" stop-color="#4D8AC1" stop-opacity="0"/>
                </radialGradient>
                </defs>
              </svg>              
            </h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPsendgmail;
