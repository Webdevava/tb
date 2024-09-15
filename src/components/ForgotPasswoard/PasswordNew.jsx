import React, { useState } from "react";
import "./style2.css";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../Login/LoginLayout";

function PasswordNew() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};

    if (!newPassword) {
      errors.newPassword = "New Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        newPassword
      )
    ) {
      errors.newPassword =
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== newPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log("Form submitted successfully");
      navigate("/login");
    }
  };

  return (
    <LoginLayout className="social-icons">
      <form onSubmit={handleSubmit}>
        <div className="otpsendgmail">
          <h1>Set a new password</h1>
          <p
            className="p4"
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "500" }}
          >
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
          <label className="label">New Password</label>
          <input
            type="password"
            className="vtext"
            placeholder="New Password"
            value={newPassword}
            style={{ fontFamily: "Poppins" }}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errors.newPassword && (
            <div
              style={{ color: "red", textAlign: "left", fontFamily: "Poppins" }}
            >
              {errors.newPassword}
            </div>
          )}
          <label className="label">Confirm Password</label>
          <input
            type="password"
            className="vtext"
            placeholder="Confirm Password"
            value={confirmPassword}
            style={{ fontFamily: "Poppins" }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <div style={{ color: "red", textAlign: "left" }}>
              {errors.confirmPassword}
            </div>
          )}
          <button
            className="btn6"
            type="submit"
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "500" }}
          >
            Update Password
          </button>
        </div>
      </form>
    </LoginLayout>
  );
}

export default PasswordNew;
