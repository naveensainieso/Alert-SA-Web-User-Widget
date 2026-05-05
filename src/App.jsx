import React, { useState } from 'react';
import UserMenu from './UserMenu';
import Modals from './Modals';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <UserMenu
        loggedIn={loggedIn}
        onOpen={setActiveModal}
        onLogout={() => setLoggedIn(false)}
      />

      <Modals
        active={activeModal}
        onClose={() => setActiveModal(null)}
        onLoginSuccess={() => {
          setLoggedIn(true);
          setActiveModal(null);
        }}
      />
    </>
  );
}
``