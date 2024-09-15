import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import MyContext from "../context/MyContext";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import fiLogout from "../assets/images/fi_logout.png";
import EditPersonalDetails from "../customModal/EditPersonalDetails";
function MyAccount() {
  const { setIsRightSideBarOpen } = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);
  const [isChangePasswordMode, setIsChangePasswordMode] = useState(false);


  const handleOpenModal = () => {
    console.log("clicked");
    setShowModal(true);
    setIsEditMode('Edit Personal Details');

  };

  const handleOpenChangePasswordModal = () => {
    console.log("clicked");
    setShowModal(true);
    setIsEditMode(false);
    setIsChangePasswordMode(true);
  };

  const handleOpenDashboardModal = () => {
    console.log("clicked");
    setShowModal(true);
    setIsEditMode(false);
    setIsChangePasswordMode(false)
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setIsRightSideBarOpen(false);
  }, []);

  return (
    <>
    <Layout>
      <form className="my-account-form">
        <div
          className="top-section d-flex w-100 justify-content-between align-items-center "
          style={{ marginBottom: 24 }}
        >
          <h4
            style={{
              fontFamily: "Poppins",
              fontSize: 24,
              fontWeight: "600",
            }}
          >
            Account Settings
          </h4>
          <div>
            <button
              type="button"
              className="btn btn-default"
              style={{
                width: "7rem",
                color: "rgba(99, 106, 216, 1)",
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              <img
                src={fiLogout}
                alt="logout"
                style={{ width: 24, height: 24 }}
              />
              Logout
            </button>
          </div>
        </div>

        <div
          className="box mb-4 w-100"
          style={{ backgroundColor: "white", padding: 31, borderRadius: 24 }}
        >
          <div className="d-flex w-100 d-flex justify-content-between align-items-center">
            <h5
              style={{ fontFamily: "Poppins", fontSize: 20, fontWeight: "600" }}
            >
              Personal Details
            </h5>
            <div>
              <button
                type="button"
                className="btn btn-default"
                style={{
                  width: "6rem",
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                onClick={handleOpenModal}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-4">
              <label
                for="name"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="Jason Taylor"
              />
            </div>
            <div className="col-md-4">
              <label
                for="email"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="jasontaylor@gmail.com"
              />
            </div>
            <div className="col-md-4">
              <label
                for="phone"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="1234567890"
              />
            </div>
          </div>
        </div>

        {/* <!-- Password Section --> */}
        <div
          className="box mb-4 w-100"
          style={{ backgroundColor: "white", padding: 31, borderRadius: 24 }}
        >
          <div className="d-flex w-100 d-flex justify-content-between align-items-center">
            <h5
              style={{
                fontFamily: "Poppins",
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Password
            </h5>
            <div className="col-0">
              <button
                type="button"
                className="btn btn-default"
                style={{
                  width: "10.5rem",
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}

                onClick={handleOpenChangePasswordModal}
              >
                Change Password
              </button>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label
                for="currentPassword"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="***************"
              />
            </div>

            <div className="col-12">
              <p
                className="text-muted"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Password last changed on: 9 July 2024
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Dashboard Settings Section --> */}
        <div
          className="box mb-4 w-100"
          style={{ backgroundColor: "white", padding: 31, borderRadius: 24 }}
        >
          <div className="d-flex w-100 d-flex justify-content-between align-items-center">
            <h5
              style={{ fontFamily: "Poppins", fontSize: 20, fontWeight: "600" }}
            >
              Dashboard Settings
            </h5>
            <div>
              <button
                type="button"
                className="btn btn-default"
                style={{
                  width: "6rem",
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                onClick={handleOpenDashboardModal}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-4">
              <label
                for="orderLimit"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Daily Max Order Limit
              </label>
              <input
                type="text"
                className="form-control w-75"
                id="orderLimit"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="4"
              />
            </div>
            <div className="col-md-4">
              <label
                for="brokerage"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Brokerage of your broker (Rs)
              </label>
              <input
                type="text"
                className="form-control w-75"
                id="brokerage"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="20"
              />
            </div>
            <div className="col-md-4">
              <label
                for="capital"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Capital (Rs)
              </label>
              <input
                type="text"
                className="form-control w-75"
                id="capital"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="1,00,000"
              />
            </div>
          </div>
        </div>

        {/* <!-- Subscription Details Section --> */}
        <div
          className="box mb-4 w-100"
          style={{ backgroundColor: "white", padding: 31, borderRadius: 24 }}
        >
          <div className="d-flex w-100 d-flex justify-content-between align-items-center">
            <h5
              style={{ fontFamily: "Poppins", fontSize: 20, fontWeight: "600" }}
            >
              Personal Details
            </h5>
            <div>
              <button
                type="button"
                className="btn btn-default"
                style={{
                  width: "7rem",
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Upgrade
              </button>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label
                for="activePlan"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Active Plan
              </label>
              <input
                type="text"
                className="form-control w-75"
                id="activePlan"
                // value="6 Month Plan"
              />
            </div>
            <div className="col-md-6">
              <label
                for="expirationDate"
                className="form-label"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
              >
                Expiration Date
              </label>
              <input
                type="text"
                className="form-control w-75"
                id="expirationDate"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "400",
                }}
                // value="12 June 2024"
              />
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </form>
    </Layout>
    <EditPersonalDetails isOpen={showModal} onClose={handleCloseModal} 
         isEditMode={isEditMode}
         isChangePasswordMode={isChangePasswordMode}
    />
    </>
  );
}

export default MyAccount;
