import React, {useState} from "react";
import "../../styles/tradelogheader.css";
import add from "../../assets/images/add.png";
import importIcon from "../../assets/images/import.png";
import ImportTradeModal from "../../customModal/ImportTradeModal";
import AddTradeModal from "../../customModal/AddTradeModal";

function TradeLogHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  return (
    <>
    <div className="d-flex justify-content-between tradelog-header-header">
      <h2
        className="head"
        style={{ fontSize: 28, fontFamily: "Poppins", fontWeight: "500" }}
      >
        Trade Log
      </h2>
      <div className="d-flex align-items-center">
        <button onClick={handleModalShow} className="trade-log-btn-a d-flex align-items-center">
          <img src={add} alt="" className="trade-log-header-img" />
          <span
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
          >
            Add Trade
          </span>
        </button>
        <button onClick={openModal} className="trade-log-btn-i d-flex align-items-center">
          <img src={importIcon} alt="" className="trade-log-header-img" />
          <span
            style={{ fontSize: 16, fontFamily: "Poppins", fontWeight: "400" }}
          >
            Import Trade
          </span>
        </button>
      </div>

     
    </div>
    <ImportTradeModal 
        isOpen={modalIsOpen} 
        onClose={closeModal} 
      />

<AddTradeModal show={modalShow} handleClose={handleModalClose} />
    </>
  );
}

export default TradeLogHeader;
