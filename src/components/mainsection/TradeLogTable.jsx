import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../../styles/tradelogtable.css";
import editicon from "../../assets/images/Edit.png";
import deleteicon from "../../assets/images/delete.png";
import MyContext from "../../context/MyContext";

function TradeLogTable() {
  const [tradeLogs, setTradeLogs] = useState([]);
  const { toggleBottomSideBar, isBottomSideBarOpen } = useContext(MyContext);

  // Fetch trade logs from the API
  useEffect(() => {
    const fetchTradeLogs = async () => {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      try {
        const response = await axios.get(
          "https://api.tradeboard.in/api/tradelogs",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach the token
            },
          }
        );
        setTradeLogs(response.data); // Store fetched trade logs in state
      } catch (error) {
        console.error("Error fetching trade logs:", error);
      }
    };

    fetchTradeLogs();
  }, []);

  // Handle Edit (Navigate to Edit form with trade log data)
  const handleEdit = (log) => {
    // Navigate to the Edit form, pass the log details
    console.log("Editing Trade Log", log);
    // Example: You could redirect to another route like: history.push(`/edit/${log._id}`);
  };

  // Handle Delete
  const handleDelete = async (logId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`https://api.tradeboard.in/api/tradelogs/${logId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update the state to remove the deleted trade log
      setTradeLogs(tradeLogs.filter((log) => log._id !== logId));
      console.log("Trade Log deleted successfully");
    } catch (error) {
      console.error("Error deleting trade log:", error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div
      style={{ position: "relative", backgroundColor: "#fff", width: "100%" }}
    >
      <table className="trade-table">
        <thead>
          <tr className="tradelog">
            <th>Date-Time</th>
            <th>Instrument Name</th>
            <th>Quantity</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
            <th>Charges</th>
            <th>Brokerage</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tradeLogs.length > 0 ? (
            tradeLogs.map((log) => (
              <tr className="tradelog" key={log._id}>
                <td>{new Date(log.dateTime).toLocaleString()}</td>
                <td>{log.instrumentName}</td>
                <td>{log.quantity}</td>
                <td>₹ {log.buyingPrice}</td>
                <td>₹ {log.sellingPrice}</td>
                <td>₹ {log.charges}</td>
                <td>₹ {log.brokerage}</td>
                <td>
                  <div className={`trade-log-${log.status}`}>{log.status}</div>
                </td>
                <td>
                  <div className="d-flex flex-row align-items-center">
                    <button
                      className="trade-log-table-btn"
                      onClick={() => handleEdit(log)}
                    >
                      <img src={editicon} alt="edit" />
                    </button>
                    <button
                      className="trade-log-table-btn"
                      onClick={() => handleDelete(log._id)}
                    >
                      <img src={deleteicon} alt="delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No trade logs found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Bottom summary section */}
      <div className="d-flex justify-content-between align-items-center trade-log-bottom">
        <div
          className="d-flex align-items-center trade-log-bottom-text green-bg"
          style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "400" }}
        >
          Today’s Profit:{" "}
          <span
            style={{
              color: "rgba(14, 217, 145, 1)",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            ₹ 1000
          </span>
        </div>
        <div
          className="d-flex align-items-center trade-log-bottom-text violet-bg"
          style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "400" }}
        >
          Today’s Charges:{" "}
          <span
            style={{
              color: "rgba(14, 217, 145, 1)",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            ₹ 2000
          </span>
        </div>
        <div
          className="d-flex align-items-center trade-log-bottom-text red-bg"
          style={{ fontSize: 20, fontFamily: "Poppins", fontWeight: "400" }}
        >
          Today’s Loss:{" "}
          <span
            style={{
              color: "rgba(14, 217, 145, 1)",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            ₹ 1000
          </span>
        </div>
      </div>
    </div>
  );
}

export default TradeLogTable;
