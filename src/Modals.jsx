import React from 'react';

export default function Modals({ active, onClose, onLoginSuccess }) {
  if (!active) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={e => e.stopPropagation()}
      >
        {active === 'login' && (
          <>
          <div style={{ background: '#1a1a53', padding: '10px', marginBottom: '20px',
    textAlign: 'center'}}>
          <img src="https://www.alert.sa.gov.au/img/alertsa-top-logo.png" alt="AlertSA Logo" className="modal-logo" />

          </div>
            <h2>Login</h2>
            <div>
 <input style={{padding: '10px',
    width: '80%'}} placeholder="Email" />
            </div>

            <div>
 <input style={{padding: '10px',
    width: '80%'}} type="password" placeholder="Password" />
            </div>
           
           
           <div style={{padding: '10px',
    width: '100%', textAlign: 'center'}}>

           
            <button style={{padding: '10px',
    width: '30%', background:'#1a1a53',color:'white'}} onClick={onLoginSuccess}>
              Login
            </button>
            </div>
            <div style={{padding:'10px',textAlign:'center'}}>
              <a> or... Create Profile</a>
            </div>
          </>
        )}

        {active === 'signup' &&   <>
          <div style={{ background: '#1bab6f', padding: '10px', marginBottom: '20px',
    textAlign: 'center'}}>
          <img src="https://www.alert.sa.gov.au/img/alertsa-top-logo.png" alt="AlertSA Logo" className="modal-logo" />

          </div>
            <h2>Create Profile</h2>
            
            <div>
 <input style={{padding: '10px',
    width: '80%'}} placeholder="Name" />
            </div>
            
            <div>
 <input style={{padding: '10px',
    width: '80%'}} placeholder="Email" />
            </div>

            <div>
 <input style={{padding: '10px',
    width: '80%'}} type="password" placeholder="Password" />
            </div>
           
           
           <div style={{padding: '10px',
    width: '100%', textAlign: 'center'}}>

           
            <button style={{padding: '10px',
    width: '30%', background:'#1bab6f',color:'white'}} onClick={onLoginSuccess}>
              Create Profile
            </button>
            </div>
           
          </>}
        {active === 'profile' && <h2>My Profile</h2>}
        {active === 'add-watchzone' && <h2>Add Watch Zone</h2>}
        {active === 'my-watchzones' && <h2>My Watch Zones</h2>}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}