import React, { useState } from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '740px',
    padding: '30px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
};

Modal.setAppElement('#root'); // Avoid accessibility issues

const EditPersonalDetails = ({ isOpen, onClose, ruleText, setRuleText, isEditMode, isChangePasswordMode }) => {
    console.log('isChangePasswordMode :', isChangePasswordMode)
    const [isOpenOtpModal, setIsOpenOtpModal] = useState(false);
  return (
    <>
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      style={modalStyles}
      contentLabel={
        isEditMode 
          ? "Edit Personal Details" 
          : isChangePasswordMode 
          ? "Change Password" 
          : "Edit Dashboard Setting"
      }
    >
      <h2 style={{ marginBottom: '10px', fontSize: '20px', fontWeight: "600" }}>
        {isEditMode 
          ? 'Edit Personal Details' 
          : isChangePasswordMode 
          ? 'Change Password' 
          : 'Edit Dashboard Setting'}
      </h2>
      {isEditMode ? (
        <>
          <p style={{ marginBottom: '20px', fontSize: '16px', color: '#6E7079' }}>
            Edit your personal details
          </p><hr style={{margin: "24px 0"}}></hr>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#1C1D22' }}>Name</label>
            <input
              type="text"
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#1C1D22' }}>Email</label>
            <input
              type="text"
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#1C1D22' }}>Phone Number</label>
            <input
              type="text"
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'inline-block', float: 'right', justifyContent: 'space-between', marginTop: "30px" }}>
            <button 
              onClick={onClose} 
              style={{ 
                padding: '9px 20px', 
                border: '1px solid #636AD8', 
                borderRadius: '12px', 
                backgroundColor: '#FFFFFF', 
                cursor: 'pointer',
                color: '#636AD8',
                fontSize: '14px',
                marginRight: '20px'
              }}
            >
              Cancel
            </button>
            <button 
              onClick={() => {/* Add your save logic here */}} 
              style={{ 
                padding: '10px 20px', 
                borderRadius: '12px', 
                backgroundColor: '#A073F0',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: '14px',
                border: 'none'
              }}
            >
              Save
            </button>
          </div>
        </>
      ) : isChangePasswordMode ? (
        <>
          <p style={{ marginBottom: '20px', fontSize: '16px', color: '#666' }}>
            Create new password here
          </p><hr style={{margin: "24px 0"}}></hr>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#1C1D22' }}>Old Password</label>
            <input
              type="text"
              value={ruleText}
              disabled
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#1C1D22' }}>New Password</label>
            <input
              type="text"
              value={ruleText}
              disabled
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#1C1D22' }}>Confirm Password</label>
            <input
              type="text"
              value={ruleText}
              disabled
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'inline-block', float: "right", justifyContent: 'space-between', marginTop: "30px" }}>
            <button 
              onClick={onClose} 
              style={{ 
                padding: '9px 20px', 
                border: '1px solid #636AD8', 
                borderRadius: '12px', 
                backgroundColor: '#ffffff', 
                cursor: 'pointer',
                color: '#636AD8',
                fontSize: '14px',
                marginRight: "20px"
              }}
            >
              Cancel
            </button>
            <button 
             
              style={{ 
                padding: '10px 20px', 
                borderRadius: '12px', 
                backgroundColor: '#A073F0', 
                cursor: 'pointer',
                color: '#fff',
                fontSize: '14px',
                border: 'none'
              }}
              onClick={() => setIsOpenOtpModal(true)}
            >
              Send OTP
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Add your third condition UI here */}
          <p style={{ marginBottom: '20px', fontSize: '16px', color: '#666' }}>
            Edit dashboard setting here
          </p><hr style={{margin: "24px 0"}}></hr>
          {/* Add your third condition form fields here */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Daily max order limit</label>
            <input
              type="text"
              value={ruleText}
              disabled
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Brokerage of your broker (Rs)</label>
            <input
              type="text"
              value={ruleText}
              disabled
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Capital (Rs)</label>
            <input
              type="text"
              value={ruleText}
              disabled
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ display: 'inline-block', float: "right", justifyContent: 'space-between', marginTop: "30px" }}>
            <button 
              onClick={onClose} 
              style={{ 
                padding: '9px 20px', 
                border: '1px solid #636AD8', 
                borderRadius: '12px', 
                backgroundColor: '#fff', 
                cursor: 'pointer',
                color: '#636AD8',
                fontSize: '14px',
                marginRight: "20px"
              }}
            >
              Cancel
            </button>
            <button 
              onClick={() => {/* Add your logic here */}} 
              style={{ 
                padding: '10px 20px', 
                borderRadius: '12px', 
                backgroundColor: '#A073F0', 
                cursor: 'pointer',
                color: '#fff',
                fontSize: '14px',
                border: 'none'
              }}
            >
              Save
            </button>
          </div>
        </>
      )}
    </Modal>

    <Modal 
      isOpen={isOpenOtpModal} 
      onRequestClose={() => setIsOpenOtpModal(false)} 
      style={modalStyles}
      contentLabel={
        "OTP Verification"
      }
    >
      <h2 style={{ marginBottom: '20px', fontSize: '20px' }}>
        {'OTP Verification'}
      </h2>
      
          <p style={{ marginBottom: '20px', fontSize: '16px', color: '#666' }}>
          We have sent 4-digit code to your registered mobile number *********98
          </p><hr style={{margin: "24px 0"}}></hr>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Enter OTP</label>
            <input
              type="text"
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '5px', 
                border: '1px solid #ccc',
                backgroundColor: '#f7f7f7',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Email</label>
            <input
              type="text"
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '5px', 
                border: '1px solid #ccc',
                backgroundColor: '#f7f7f7',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Phone Number</label>
            <input
              type="text"
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                borderRadius: '5px', 
                border: '1px solid #ccc',
                backgroundColor: '#f7f7f7',
                fontSize: '14px'
              }}
            />
          </div>
          <div
                  className="row"
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins",
                    fontWeight: "500",
                  }}
                >
                  <p>Didn't Get OTP?</p>  
                  <a href="#">Resend OTP</a>
                </div>
          <div style={{ display: 'inline-block', float: "right", justifyContent: 'space-between', marginTop: "30px" }}>
            <button 
              onClick={() => setIsOpenOtpModal(false)} 
              style={{ 
                padding: '9px 20px', 
                border: '1px solid #636AD8', 
                borderRadius: '5px', 
                backgroundColor: '#fff', 
                cursor: 'pointer',
                color: '#636AD8',
                fontSize: '14px'
              }}
            >
              Cancel
            </button>
            <button 
              onClick={() => {/* Add your save logic here */}} 
              style={{ 
                padding: '10px 20px', 
                borderRadius: '5px', 
                backgroundColor: '#A073F0', 
                cursor: 'pointer',
                color: '#fff',
                fontSize: '14px',
                border: 'none'
              }}
            >
              Verify OTP
            </button>
          </div>
    </Modal>
    </>
  );
};

export default EditPersonalDetails;
