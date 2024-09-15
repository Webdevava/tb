import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    padding: '30px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
};

Modal.setAppElement('#root'); // Avoid accessibility issues

const ImportTradeModal = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      style={modalStyles}
      contentLabel="Import Trade Modal"
    >
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Import Trade</h2>
      <div style={{ border: '2px dashed #ccc', backgroundColor: "#F8F8FF", padding: '30px', textAlign: 'center', borderRadius: '5px' }}>
        <p style={{ margin: '0 0 10px' }}>
          Drag & drop files or <span style={{ color: '#6a5acd', cursor: 'pointer' }}>Browse</span>
        </p>
        <p style={{ color: '#777' }}>Supported formats: Excel, CSV</p>
      </div>
      <input
        type="text"
        placeholder="You can get this excel file from the orderbook/tradebook download option from your broker's platform."
        style={{ 
          width: '100%', 
          margin: '20px 0 10px', 
          padding: '10px', 
          borderRadius: '5px', 
          border: '1px solid #ccc',
          backgroundColor: 'transparent',
          color: '#BEC0CA',
          fontSize: '14px',
          fontWeight: "400",
          textAlign: 'center'
        }}
        disabled
      />
      <div style={{ display: 'inline-block', justifyContent: 'space-between', marginTop: '20px', float: 'right' }}>
        <button 
          onClick={onClose} 
          style={{ 
            padding: '9px 20px', 
            border: '1px solid #A073F0', 
            borderRadius: '12px', 
            backgroundColor: '#ffffff', 
            color: "#A073F0",
            cursor: 'pointer',
            fontSize: '14px',
            marginRight: '20px'
          }}
        >
          Cancel
        </button>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#A073F0',
            border: 'none', 
            borderRadius: '12px',
            color: "#FFFFFF",
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Import
        </button>
      </div>
    </Modal>
  );
};

export default ImportTradeModal;
