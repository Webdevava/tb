import React, { useState, useEffect } from "react";
import RuleSearchbar from "./RuleSearchbar";
import MyRuleListbar from "./MyRuleListbar";
// import { getRules } from "../api";
import axios from "axios";

function MyRule() {
  const [ruleList, setRuleList] = useState([]);

  useEffect(() => {
    fetchRules();
  }, []);

  const token = localStorage.getItem("token");

  const fetchRules = async () => {
    try {
      const response = await axios.get("https://api.tradeboard.in/api/rules", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRuleList(response.data);
    } catch (error) {
      console.error("Error fetching rules:", error);
    }
  };

  return (
    <div className="my-rule">
      <RuleSearchbar onRuleAdded={fetchRules} />
      <MyRuleListbar ruleList={ruleList} onRuleUpdated={fetchRules} />
    </div>
  );
}

export default MyRule;
