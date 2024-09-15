import React, {useState} from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    padding: '30px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
};

Modal.setAppElement('#root'); // Avoid accessibility issues

const PerformanceAnalyticsModal = ({ isOpen, onClose }) => {
  // Array with the data
  const [openModal, setOpenModal] = useState(isOpen);
  const dummyTextArray = [
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
  ];

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      style={modalStyles}
      contentLabel="List of Most Followed Rules of this Week"
    >
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>
        List of Most Followed Rules of this Week
      </h2>
      <div>
        {dummyTextArray.map((text, index) => (
          <p key={index} style={{ marginBottom: '10px', fontSize: '16px', color: '#333' }}>
            {index + 1}. {text}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <p 
         
        >
          
        </p>
        <button 
          style={{ 
            padding: '10px 20px', 
            border: '1px solid #636AD8', 
            borderRadius: '12px', 
            backgroundColor: '#fff', 
            color: "#636AD8",
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
      
    </Modal>
  );
};

export default PerformanceAnalyticsModal;
