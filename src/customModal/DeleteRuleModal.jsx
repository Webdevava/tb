import React from "react";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "740px",
    padding: "30px",
    borderRadius: "10px",
    border: "none",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
};

Modal.setAppElement("#root"); // Avoid accessibility issues

const DeleteRuleModal = ({
  isOpen,
  onClose,
  ruleText,
  setRuleText,
  isEditMode,
  onSave,
  onDelete,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      contentLabel={isEditMode ? "Edit Rule Modal" : "Delete Rule Modal"}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>
        {isEditMode ? "Edit Rule" : "Delete Rule"}
      </h2>
      {isEditMode ? (
        <>
          <p
            style={{ marginBottom: "20px", fontSize: "16px", color: "#6E7079" }}
          >
            Here you can edit your rules.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#1C1D22",
              }}
            >
              Rule
            </label>
            <input
              type="text"
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
              }}
            />
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={onClose}
              style={{
                padding: "9px 20px",
                border: "1px solid #6a5acd",
                borderRadius: "12px",
                backgroundColor: "#fff",
                cursor: "pointer",
                color: "#6a5acd",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                backgroundColor: "#A073F0",
                cursor: "pointer",
                color: "#fff",
                fontSize: "14px",
                border: "none",
              }}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <p style={{ marginBottom: "20px", fontSize: "16px", color: "#666" }}>
            Are you sure you want to delete this rule permanently?
          </p>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{ display: "block", marginBottom: "5px", color: "#666" }}
            >
              Rule
            </label>
            <input
              type="text"
              value={ruleText}
              disabled
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
              }}
            />
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <button
              onClick={onClose}
              style={{
                padding: "9px 20px",
                border: "1px solid #6a5acd",
                borderRadius: "12px",
                backgroundColor: "#fff",
                cursor: "pointer",
                color: "#6a5acd",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                backgroundColor: "#A073F0",
                cursor: "pointer",
                color: "#fff",
                fontSize: "14px",
                border: "none",
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default DeleteRuleModal;
