import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import MyContext from "../context/MyContext";
import {
  Col,
  Row,
  Container,
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import cgoArrow from "../assets/icons/c_goArrow.png";
import bsarrow from "../assets/icons/bottom-side.png";
import lsarrow from "../assets/icons/left-side.png";
import rsarrow from "../assets/icons/right-side.png";
import PerformanceAnalyticsModal from "../customModal/PerformanceAnalyticsModal";
import axios from "axios";
import Card from "../components/myjournals/Card";

const StatCard = ({ title, stats }) => {
  return (
    <div className="card mb-4" style={{ borderRadius: "15px" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="row">
          {stats.map((stat, index) => (
            <div className="col-3 text-center d-flex flex-column" key={index}>
              <p style={{ fontSize: 16 }}>{stat.label}</p>
              <h3 style={{ color: stat.color, fontSize: 24 }}>{stat.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const JournalCard = ({ isProfit, index }) => {
  const cardClass = isProfit
    ? "border-success text-success bg-light card_green_bg"
    : "border-danger text-danger bg-light card_red_bg";
  return (
    <Card
      className={`mb-4 ${cardClass}`}
      style={{
        minHeight: "200px",
        width: "23%",
        marginRight: index % 4 !== 3 ? "2%" : "0%",
        position: "relative",
      }}
    >
      <img
        src={cgoArrow}
        alt="arrow"
        className="border"
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          width: 24,
          height: 24,
        }}
      />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "400", fontSize: "16px", color: "#1C1D22" }}
        >
          Mon, 1 June
        </Card.Title>
        <Card.Text style={{ color: "#1C1D22" }}>
          Notes: <span style={{ color: "#53545C" }}>Lorem Ipsum is simply</span>
          <br />
          Mistakes:{" "}
          <span style={{ color: "#53545C" }}>Lorem Ipsum is simply</span>
          <br />
          Lessons:{" "}
          <span style={{ color: "#53545C" }}>Lorem Ipsum is simply</span>
        </Card.Text>
        <div className="d-inline-block justify-content-between mt-3">
          <div style={{ display: "inline-block", padding: "0 6px 0 0" }}>
            <p
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "#1C1D22",
              }}
              className="mb-0"
            >
              Rules Followed:<br></br>{" "}
              <span style={{ fontWeight: "600" }}>80%</span>
            </p>
          </div>
          <div style={{ display: "inline-block", padding: "0 6px" }}>
            <p
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "#1C1D22",
              }}
              className="mb-0"
            >
              Win rate:<br></br> <span style={{ fontWeight: "600" }}>75%</span>
            </p>
          </div>
          <div
            style={{ display: "inline-block", padding: "0 0 0 6px" }}
            className="text-end"
          >
            <p
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "#1C1D22",
              }}
              className="mb-0"
            >
              {isProfit ? "Profit" : "Loss"}:<br></br>{" "}
              <span style={{ fontWeight: "600" }}>₹ 7000</span>
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

function PerformanceAnalytics() {
  const { setIsRightSideBarOpen } = useContext(MyContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [journals, setJournals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsRightSideBarOpen(false);
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://api.tradeboard.in/api/journal",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJournals(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching journals:", err);
      setError("Failed to fetch journals. Please try again.");
      setIsLoading(false);
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const profitableDaysStats = [
    { label: "Rules you followed", value: "80%", color: "#28a745" },
    { label: "Words Journaled", value: "100", color: "#28a745" },
    { label: "Trades taken", value: "4", color: "#28a745" },
    { label: "Win rate", value: "65%", color: "#28a745" },
  ];

  const lossMakingDaysStats = [
    { label: "Rules you followed", value: "40%", color: "#dc3545" },
    { label: "Words Journaled", value: "20", color: "#dc3545" },
    { label: "Trades taken", value: "8", color: "#dc3545" },
    { label: "Win rate", value: "66%", color: "#dc3545" },
  ];

  const breakEvenDaysStats = [
    { label: "Rules you followed", value: "60%", color: "#6f42c1" },
    { label: "Words Journaled", value: "100", color: "#6f42c1" },
    { label: "Trades taken", value: "2", color: "#6f42c1" },
    { label: "Win rate", value: "50", color: "#6f42c1" },
  ];

  const mostFollowedRules = [
    {
      label: "Lorem Ipsum is simply dummy text",
      value: "15 times this week you followed",
      color: "#28a745",
    },
  ];

  const mostBrokenRules = [
    {
      label: "Lorem Ipsum is simply dummy text",
      value: "12 times this week you broken",
      color: "#dc3545",
    },
  ];

  const cardsData = [
    { id: 1, isProfit: true },
    { id: 2, isProfit: true },
    { id: 3, isProfit: false },
    { id: 4, isProfit: true },
    { id: 5, isProfit: true },
    { id: 6, isProfit: false },
    { id: 7, isProfit: true },
    { id: 8, isProfit: true },
    { id: 9, isProfit: true },
  ];

  return (
    <>
      <Layout>
        <div className="analytics-section d-flex flex-column">
          <div className="card main-card m-3" style={{ padding: 24 }}>
            <div style={{ marginBottom: 32 }}>
              <h2>Tradeboard Intelligence</h2>
              <button
                style={{ width: 131, position: "absolute", top: 15, right: 32 }}
                class="btn btn-default"
                //variant="outline-primary"
                onClick={openModal}
              >
                This Week
                <img
                  src={bsarrow}
                  alt="bottom side"
                  style={{ width: 10, height: 5, marginLeft: 5 }}
                />
              </button>
            </div>
            <div className="row">
              <div className="col-md-6">
                <StatCard
                  title="On Profitable Days"
                  stats={profitableDaysStats}
                  titleColor="#28a745"
                />
              </div>
              <div className="col-md-6">
                <StatCard
                  title="On Loss Making Days"
                  stats={lossMakingDaysStats}
                  titleColor="#dc3545"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <StatCard
                  title="On Break-Even Days"
                  stats={breakEvenDaysStats}
                  titleColor="#6f42c1"
                />
              </div>

              <div className="d-flex col-md-6 justify-content-between">
                <div
                  className="card col-md-6 mb-4 "
                  style={{ borderRadius: "15px", width: "49%", padding: 12 }}
                >
                  <div>
                    <img
                      src={cgoArrow}
                      alt="arrow"
                      className="border"
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 24,
                        width: 24,
                        height: 24,
                      }}
                    />
                    <h5
                      style={{
                        fontSize: 18,
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        width: "90%",
                      }}
                    >
                      Your Most Broken Rules
                    </h5>
                    <div>
                      <div className="d-flex flex-column">
                        <p
                          style={{
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: "400",
                          }}
                        >
                          Lorem Ipsum is simply dummy text
                        </p>
                        <h3
                          style={{
                            fontSize: 14,
                            fontFamily: "Poppins",
                            fontWeight: "400",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 20,
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              color: "#0ED991",
                            }}
                          >
                            15
                          </span>{" "}
                          times this week you followed
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card  col-md-6 mb-4"
                  style={{
                    borderRadius: "15px",
                    width: "48%",
                    padding: 12,
                    position: "relative",
                  }}
                >
                  <img
                    src={cgoArrow}
                    alt="arrow"
                    className="border"
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 24,
                      width: 24,
                      height: 24,
                    }}
                  />
                  <div>
                    <h5
                      style={{
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        width: "90%",
                      }}
                    >
                      Your Most Followed Rules
                    </h5>
                    <div>
                      <div className="d-flex flex-column">
                        <p
                          style={{
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: "400",
                          }}
                        >
                          Lorem Ipsum is simply dummy text
                        </p>
                        <h3
                          style={{
                            fontSize: 14,
                            fontFamily: "Poppins",
                            fontWeight: "400",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 20,
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              color: "#DC3545",
                            }}
                          >
                            12
                          </span>{" "}
                          times this week you broken
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card main-card m-3" style={{ padding: 24 }}>
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="mb-4">Journal Analysis</h3>
              <div className="d-flex align-items-center">
                <h2
                  style={{
                    fontSize: 20,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginRight: 10,
                  }}
                >
                  Filter By :{" "}
                </h2>
                <ButtonGroup>
                  <DropdownButton
                    as={ButtonGroup}
                    title="Date Range"
                    variant="outline-default"
                  >
                    <Dropdown.Item>range 1</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    as={ButtonGroup}
                    title="Win rate"
                    variant="outline-default"
                  >
                    <Dropdown.Item>rate 1</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    as={ButtonGroup}
                    title="Trades Taken"
                    variant="outline-default"
                  >
                    <Dropdown.Item>taken 1</Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton
                    as={ButtonGroup}
                    title="Rules Followed"
                    variant="outline-default"
                  >
                    <Dropdown.Item>followed 1</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3"></div>
            <div className="d-flex flex-wrap">
              {journals.length > 0 ? (
                journals.map((journal, index) => (
                  <Card key={journal._id} item={journal} index={index} />
                ))
              ) : (
                <div>No journals found. Start writing your first journal!</div>
              )}
            </div>
            <div
              className="d-inline-block justify-content-between mt-4"
              //style={{ position: "relative" }}
            >
              <Button
                style={{
                  width: 115,
                  bottom: 0,
                  left: 32,
                  color: "#636AD8",
                  border: "1px solid #636AD8",
                  padding: "8px",
                }}
                variant="outline-default"
              >
                {/* <img
                src={lsarrow}
                alt="left side"
                style={{ width: 10, marginLeft: 5 }}
              />{" "} */}
                <svg
                  className="me-2"
                  width="7"
                  height="13"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 15L1.5 8L8.5 1"
                    stroke="#636AD8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Previous
              </Button>
              <Button
                style={{
                  width: 110,
                  bottom: 0,
                  right: 32,
                  backgroundColor: "rgba(160, 115, 240, 1)",
                  color: "white",
                  float: "right",
                  padding: "8px",
                }}
                variant="outline-default"
              >
                Next{" "}
                {/* <img
                src={rsarrow}
                alt="right side"
                style={{ width: 7, marginLeft: 5 }}
              /> */}
                <svg
                  className="ms-2"
                  width="7"
                  height="13"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1L8.5 8L1.5 15"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
      <PerformanceAnalyticsModal isOpen={modalIsOpen} onClose={closeModal} />
    </>
  );
}

export default PerformanceAnalytics;
