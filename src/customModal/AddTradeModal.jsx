import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios"; // Make sure to install axios: npm install axios

function AddTradeModal({ show, handleClose, onTradeAdded }) {
  const [formData, setFormData] = useState({
    instrumentName: "",
    quantity: "",
    tradeType: "sell",
    equityType: "F&O - Options",
    dateTime: "",
    charges: "",
    brokerage: "",
    buyingPrice: "",
    sellingPrice: "",
    status: "Open", // Assuming a default status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    try {
      const response = await axios.post(
        "https://api.tradeboard.in/api/tradelogs",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add the token to the Authorization header
          },
        }
      );
      console.log("Trade log created:", response.data);
      onTradeAdded(response.data); // Callback to update parent component
      handleClose(); // Close the modal
    } catch (error) {
      console.error("Error creating trade log:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Trade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit}
          style={{ backgroundColor: "#FFFFFF", padding: "0" }}
        >
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formInstrument">
                <Form.Label>Instrument</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Instrument"
                  name="instrumentName"
                  value={formData.instrumentName}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formTradeType" className="mb-3 w-100">
            <Form.Label>Trade Type</Form.Label>
            <div>
              <Form.Check
                inline
                label="Buy"
                name="tradeType"
                type="radio"
                id="buy"
                value="buy"
                checked={formData.tradeType === "buy"}
                onChange={handleInputChange}
                style={{
                  display: "inline-block",
                  marginRight: "1rem",
                  border: "1px solid #E7E7EA",
                  padding: "8px 20px 8px 40px",
                  width: "130px",
                  borderRadius: "12px",
                }}
              />
              <Form.Check
                inline
                label="Sell"
                name="tradeType"
                type="radio"
                id="sell"
                value="sell"
                checked={formData.tradeType === "sell"}
                onChange={handleInputChange}
                style={{
                  display: "inline-block",
                  marginRight: "1rem",
                  border: "1px solid #E7E7EA",
                  padding: "8px 20px 8px 40px",
                  width: "130px",
                  borderRadius: "12px",
                }}
              />
            </div>
          </Form.Group>

          <Row className="mb-3 w-100">
            <Col className="ps-lg-0">
              <Form.Group controlId="formEquityType">
                <Form.Label>Equity Type</Form.Label>
                <Form.Control
                  as="select"
                  name="equityType"
                  value={formData.equityType}
                  onChange={handleInputChange}
                >
                  <option>F&O - Options</option>
                  <option>F&O - Futures</option>
                  <option>Equity</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="pe-lg-0">
              <Form.Group controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formExchangeCharges">
                <Form.Label>Exchange charges (Rs)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="00"
                  name="charges"
                  value={formData.charges}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBrokerage">
                <Form.Label>Brokerage (Rs)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="00"
                  name="brokerage"
                  value={formData.brokerage}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Add fields for buyingPrice and sellingPrice */}
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formBuyingPrice">
                <Form.Label>Buying Price (Rs)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Buying Price"
                  name="buyingPrice"
                  value={formData.buyingPrice}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formSellingPrice">
                <Form.Label>Selling Price (Rs)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Selling Price"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div
            className="text-center"
            style={{
              background: "#F4E4FF",
              padding: "15px",
              width: "100%",
              display: "block",
              borderRadius: "12px",
            }}
          >
            <h5
              style={{ fontSize: "20px", fontWeight: "400", textAlign: "left" }}
            >
              Total Order Amount(Rs):{" "}
              <span style={{ color: "#a34bf1", fontWeight: "500" }}>
                {parseFloat(formData.quantity) *
                  (parseFloat(
                    formData.tradeType === "buy"
                      ? formData.buyingPrice
                      : formData.sellingPrice
                  ) || 0)}
              </span>
            </h5>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
          style={{
            padding: "12px 20px",
            width: "auto",
            backgroundColor: "transparent",
            border: "1px solid #636AD8",
            color: "#636AD8",
            fontWeight: "400",
            marginBottom: "5px",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          style={{
            padding: "12px 30px",
            width: "auto",
            backgroundColor: "#A073F0",
            color: "#FFFFFF",
            fontWeight: "400",
            marginBottom: "5px",
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddTradeModal;
