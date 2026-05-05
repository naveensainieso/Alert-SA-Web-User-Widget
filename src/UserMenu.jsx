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
          <button onClick={() => onOpen('profile')}>My Profile</button>
          <button onClick={() => onOpen('add-watchzone')}>Add Watch Zone</button>
          <button onClick={() => onOpen('my-watchzones')}>My Watch Zones</button>
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}