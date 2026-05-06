import React from 'react';

export default function UserMenu({ loggedIn, onOpen, onLogout }) {
  if (!loggedIn) {
    return (
      <div className="user-menu">
        <button onClick={() => onOpen('login')}>Login</button>
        <button onClick={() => onOpen('signup')}>Sign up</button>
      </div>
    );
  }

  return (
    <div className="user-menu">
      <div className="dropdown">
        <button
          className="dropdown-btn"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Profile ▾
        </button>

        <div className="dropdown-content">
          <button style={{marginBottom: '5px',
    borderBottom: '1px solid',
    width: '300px'}} onClick={() => onOpen('profile')}>My Profile</button>
          <button style={{marginBottom: '5px',
    borderBottom: '1px solid',
    width: '300px'}} onClick={() => onOpen('add-watchzone')}>Add Watch Zone</button>
          <button style={{marginBottom: '5px',
    borderBottom: '1px solid',
    width: '300px'}} onClick={() => onOpen('my-watchzones')}>My Watch Zones</button>
         <button style={{marginBottom: '5px',
    borderBottom: '1px solid',
    width: '300px'}} onClick={onLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}