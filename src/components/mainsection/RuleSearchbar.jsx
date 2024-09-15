import React, { useState } from "react";
import add from "../../assets/images/add.png";
import AddRuleModal from "../../customModal/AddRuleModal";

function RuleSearchbar({ onRuleAdded }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can implement the search functionality here
    // For example, you could pass the search term to a parent component
    // or filter the rules directly if they're stored in this component
  };

  return (
    <>
      <div className="my-rule-searchbar">
        <div
          className="my-rule-searchbar-heading"
          style={{
            fontSize: 24,
            fontFamily: "Poppins",
            fontWeight: "500",
            textAlign: "left",
          }}
        >
          Rules
        </div>
        <input
          type="text"
          placeholder="Search rules"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "500",
            padding: "5px 20px",
            width: "200px",
            height: "40px",
            borderRadius: "11px",
            border: "1px solid #E7E7EA",
            marginRight: "15px",
          }}
        />
        <button onClick={openModal}>
          <span
            style={{ fontSize: 14, fontFamily: "Poppins", fontWeight: "400" }}
          >
            <img src={add} alt="" className="trade-log-header-img" /> Add Rules
          </span>
        </button>
      </div>
      <AddRuleModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onRuleAdded={onRuleAdded}
      />
    </>
  );
}

export default RuleSearchbar;
