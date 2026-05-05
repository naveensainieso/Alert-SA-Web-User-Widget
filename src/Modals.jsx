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
            <h2>Login</h2>
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={onLoginSuccess}>Login</button>
          </>
        )}

        {active === 'signup' && <h2>Sign up</h2>}
        {active === 'profile' && <h2>My Profile</h2>}
        {active === 'add-watchzone' && <h2>Add Watch Zone</h2>}
        {active === 'my-watchzones' && <h2>My Watch Zones</h2>}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}