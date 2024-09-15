
import React, { useState } from 'react';

function MyAccountModal({ isOpen, onClose }) {
    console.log("isOpen", isOpen)
    const [showModal, setShowModal] = useState(isOpen);
    console.log("showModal", showModal)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');   


  const handleCancel = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., validation, API calls)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Personal Details</button>
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',   

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',   

              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h2>Edit Personal Details</h2>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius:   
 '3px' }}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding:   
 '10px', border: '1px solid #ccc', borderRadius:   
 '3px' }}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}   

                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
              />
            </div>
            <div>
              <button onClick={handleCancel} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                Cancel
              </button>
              <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyAccountModal;