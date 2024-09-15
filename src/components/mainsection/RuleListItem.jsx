import React, { useState } from "react";
import selecticon from "../../assets/images/select.png";
import editicon from "../../assets/images/Edit.png";
import deleteicon from "../../assets/images/delete.png";
import DeleteRuleModal from "../../customModal/DeleteRuleModal";
// import { updateRule, deleteRule } from "../api";
import axios from "axios";

function RuleListItem({ rule, index, totalRules, onRuleUpdated }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [ruleText, setRuleText] = useState(rule.text);

  const openDeleteModal = () => {
    setIsEditMode(false);
    setModalIsOpen(true);
  };

  const openEditModal = () => {
    setIsEditMode(true);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleUpdateRule = async () => {
    try {
       const response = await axios.put(`/rules/${rule._id}`, { ruleText });
      onRuleUpdated();
      closeModal();
    } catch (error) {
      console.error("Error updating rule:", error);
    }
  };

  const handleDeleteRule = async () => {
    try {
      // await deleteRule(rule._id);
      onRuleUpdated();
      closeModal();
    } catch (error) {
      console.error("Error deleting rule:", error);
    }
  };

  return (
    <>
      <div
        className="my-rule-listitem-heading"
        style={{
          borderBottomLeftRadius: index === totalRules - 1 ? 8 : 0,
          borderBottomRightRadius: index === totalRules - 1 ? 8 : 0,
        }}
      >
        <div className="my-rule-select">
          <img src={selecticon} alt="select icon" />
          <span
            style={{
              fontSize: 14,
              fontWeight: "500",
              fontFamily: "Poppins",
              paddingLeft: "16px",
            }}
          >
            {rule.text}
          </span>
        </div>
        <div className="my-rule-action">
          <img onClick={openEditModal} src={editicon} alt="edit" />
          <img onClick={openDeleteModal} src={deleteicon} alt="delete" />
        </div>
      </div>
      <DeleteRuleModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        ruleText={ruleText}
        setRuleText={setRuleText}
        isEditMode={isEditMode}
        onSave={handleUpdateRule}
        onDelete={handleDeleteRule}
      />
    </>
  );
}

export default RuleListItem;
