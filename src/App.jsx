import React, { useEffect, useState } from 'react';
import UserMenu from './UserMenu';
import Modals from './Modals';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setLoggedIn(true);
    }

  }, []);

  return (
    <>
      <UserMenu
        loggedIn={loggedIn}
        onOpen={setActiveModal}
        onLogout={() => {

          localStorage.removeItem('userInfo');
          setLoggedIn(false)}
        
        }
      />

      <Modals
        active={activeModal}
        onClose={() => setActiveModal(null)}
        onLoginSuccess={() => {

          localStorage.setItem('userInfo', JSON.stringify({ name: 'John Doe', email: 'john@gmail.com',jwt:'fake-jwt-token' }));

          setLoggedIn(true);
          setActiveModal(null);
        }}
      />
    </>
  );
}
