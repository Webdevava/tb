import React from "react";
import "../../styles/myrulelistbar.css";
import selecticon from "../../assets/images/select.png";
import RuleListItem from "./RuleListItem";

function MyRuleListbar({ ruleList, onRuleUpdated }) {
  return (
    <>
      <div className="my-rule-list-heading">
        <div className="my-rule-select">
          <img src={selecticon} alt="select icon" />
          <span
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "500" }}
          >
            Rules
          </span>
        </div>
        <div>
          <span
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "500" }}
          >
            Action
          </span>
        </div>
      </div>
      <div style={{ height: "16rem", overflow: "auto" }}>
        {ruleList.map((rule, index) => (
          <RuleListItem
            key={rule._id}
            rule={rule}
            index={index}
            totalRules={ruleList.length}
            onRuleUpdated={onRuleUpdated}
          />
        ))}
      </div>
    </>
  );
}

export default MyRuleListbar;
