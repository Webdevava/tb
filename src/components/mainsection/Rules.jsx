import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

// Set the app element for react-modal
Modal.setAppElement("#root");

export default function Rules() {
  const [rules, setRules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditDeleteModalOpen, setIsEditDeleteModalOpen] = useState(false);
  const [newRule, setNewRule] = useState("");
  const [editingRule, setEditingRule] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    try {
      const response = await axios.get(
        "https://api.tradeboard.in/api/rules",
        config
      );
      setRules(response.data);
    } catch (error) {
      console.error("Error fetching rules:", error);
    }
  };

  const handleAddRule = async () => {
    try {
      await axios.post(
        "https://api.tradeboard.in/api/rules",
        { text: newRule },
        config
      );
      fetchRules();
      setNewRule("");
      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Error adding rule:", error);
    }
  };

  const handleUpdateRule = async () => {
    if (!editingRule) return;
    try {
      await axios.put(
        `https://api.tradeboard.in/api/rules/${editingRule._id}`,
        { text: editingRule.text },
        config
      );
      fetchRules();
      setIsEditDeleteModalOpen(false);
    } catch (error) {
      console.error("Error updating rule:", error);
    }
  };

  const handleDeleteRule = async () => {
    if (!editingRule) return;
    try {
      await axios.delete(
        `https://api.tradeboard.in/api/rules/${editingRule._id}`,
        config
      );
      fetchRules();
      setIsEditDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting rule:", error);
    }
  };

  const filteredRules = rules.filter((rule) =>
    rule.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "500" }}>Rules</h1>
        <div>
          <input
            type="text"
            placeholder="Search rules"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "5px 20px",
              width: "200px",
              height: "40px",
              borderRadius: "11px",
              border: "1px solid #E7E7EA",
              marginRight: "15px",
            }}
          />
          <button
            onClick={() => setIsAddModalOpen(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#A073F0",
              color: "white",
              border: "none",
              borderRadius: "11px",
              cursor: "pointer",
            }}
          >
            Add Rule
          </button>
        </div>
      </div>

      <div style={{ border: "1px solid #E7E7EA", borderRadius: "8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #E7E7EA",
          }}
        >
          <span style={{ fontWeight: "500" }}>Rules</span>
          <span style={{ fontWeight: "500" }}>Action</span>
        </div>
        <div style={{ maxHeight: "400px", overflow: "auto" }}>
          {filteredRules.map((rule, index) => (
            <div
              key={rule._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderBottom:
                  index < filteredRules.length - 1
                    ? "1px solid #E7E7EA"
                    : "none",
              }}
            >
              <span>{rule.text}</span>
              <div>
                <button
                  onClick={() => {
                    setEditingRule(rule);
                    setIsEditMode(true);
                    setIsEditDeleteModalOpen(true);
                  }}
                  style={{
                    marginRight: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setEditingRule(rule);
                    setIsEditMode(false);
                    setIsEditDeleteModalOpen(true);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            padding: "20px",
            borderRadius: "8px",
          },
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Add Rule</h2>
        <input
          type="text"
          value={newRule}
          onChange={(e) => setNewRule(e.target.value)}
          placeholder="Enter your rule here"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setIsAddModalOpen(false)}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "transparent",
              border: "1px solid #636AD8",
              color: "#636AD8",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleAddRule}
            style={{
              padding: "10px 20px",
              backgroundColor: "#A073F0",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isEditDeleteModalOpen}
        onRequestClose={() => setIsEditDeleteModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            padding: "20px",
            borderRadius: "8px",
          },
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          {isEditMode ? "Edit Rule" : "Delete Rule"}
        </h2>
        {isEditMode ? (
          <input
            type="text"
            value={editingRule?.text || ""}
            onChange={(e) =>
              setEditingRule(
                editingRule ? { ...editingRule, text: e.target.value } : null
              )
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        ) : (
          <p style={{ marginBottom: "20px" }}>
            Are you sure you want to delete this rule?
          </p>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setIsEditDeleteModalOpen(false)}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "transparent",
              border: "1px solid #636AD8",
              color: "#636AD8",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={isEditMode ? handleUpdateRule : handleDeleteRule}
            style={{
              padding: "10px 20px",
              backgroundColor: "#A073F0",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {isEditMode ? "Save" : "Delete"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
