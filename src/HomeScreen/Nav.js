import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img 
        className='nav-logo'
        src="https://media.netflix.com/static/images/Netflix-Logo.svg"
        alt="Logo"
        />

        <img
        className='nav-avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='Logo'
        />
    </div>
  )
}

export default Nav