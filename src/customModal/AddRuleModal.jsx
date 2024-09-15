import React, { useState } from "react";
// import { createRule } from "../api";
import axios from "axios";

const AddRuleModal = ({ isOpen, onClose, onRuleAdded }) => {
  const [rule, setRule] = useState("");

  if (!isOpen) return null;

  const token = localStorage.getItem("token");
  const handleAddRule = async () => {
    try {
      const response = await axios.post(
        "https://api.tradeboard.in/api/rules",
        { rule },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onRuleAdded();
      setRule("");
      onClose();
    } catch (error) {
      console.error("Error adding rule:", error);
    }
  };

  const handleDeleteRule = () => {
    setRule("");
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2 style={{ textAlign: "left", fontSize: "24px", fontWeight: "600" }}>
          Add Rule
        </h2>
        <p style={{ color: "#6E7079", textAlign: "left", fontSize: "16px" }}>
          Here you can add your rules.
        </p>
        <hr className="mb-4"></hr>
        <div style={inputContainerStyle}>
          <label
            className="label mb-1"
            style={{ textAlign: "left", display: "block", color: "#6E7079" }}
          >
            Rule
          </label>
          <input
            type="text"
            value={rule}
            onChange={(e) => setRule(e.target.value)}
            placeholder="Enter your rule here"
            style={inputStyle}
          />
        </div>
        <div style={buttonContainerStyle}>
          <button style={clearButtonStyle} onClick={handleDeleteRule}>
            Clear all
          </button>
          <button style={addButtonStyle} onClick={handleAddRule}>
            Add
          </button>
        </div>
        <button style={closeButtonStyle} onClick={onClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13"
              stroke="#1C1D22"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L13 13"
              stroke="#1C1D22"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  position: "relative",
  width: "740px",
  textAlign: "center",
};

const inputContainerStyle = {
  position: "relative",
};

const inputStyle = {
  width: "100%",
  padding: "12px 40px 12px 20px", // Adding space for the delete icon
  marginBottom: "10px",
  borderRadius: "12px",
  border: "1px solid #E7E7EA",
};

const deleteIconStyle = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "18px", // Adjust size as needed
};

const buttonContainerStyle = {
  display: "inline-block",
  justifyContent: "space-between",
  float: "right",
  margin: "40px 0 0 0",
};

const clearButtonStyle = {
  backgroundColor: "transparent",
  border: "1px solid #636AD8",
  color: "#636AD8",
  padding: "9px 20px",
  borderRadius: "12px",
  marginRight: "20px",
  cursor: "pointer",
};

const addButtonStyle = {
  backgroundColor: "#A073F0",
  color: "#fff",
  border: "none",
  padding: "10px 25px",
  borderRadius: "12px",
  cursor: "pointer",
};

const closeButtonStyle = {
  position: "absolute",
  top: "-15px",
  right: "-15px",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  backgroundColor: "#FFFFFF",
  width: "35px",
  height: "35px",
  borderRadius: "100%",
  display: "block",
  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
};

export default AddRuleModal;
