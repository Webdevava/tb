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
    width: '800px',
    padding: '30px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
};

Modal.setAppElement('#root'); // Avoid accessibility issues

const AccountabilityPartnerModal = ({ isOpen, onClose }) => {
  // Array with the data
  const [openModal, setOpenModal] = useState(isOpen);
 

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      style={modalStyles}
      contentLabel="Accountability Partner"
    >
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: "600" }}>
      Accountability Partner
      </h2><hr className='mt-3 mb-4'></hr>
      <div>
      <p style={{color: "#6E7079"}}>
      An Accountability Partner is someone who supports another person to keep a commitment or
maintain progress on a desired goal. They will often be a trusted or acquaintance who will
Regularly ask an individual about their progress.
      </p>
      <p style={{color: "#6E7079"}}>
      Add details of such a person and we will share your progress with them. You can also choose
      what details the accountability partner can view.  
      </p>
      <p style={{color: "#6E7079"}}>
      Accountability Partner can not make any changes to your data or your account.
      </p>
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

export default AccountabilityPartnerModal;
