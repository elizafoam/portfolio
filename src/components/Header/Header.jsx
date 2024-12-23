import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className='top-section'>
        <img src="avatar.png" alt="avatar image" />
        <div className='manrope-title greeting'>aloha,</div>
      </div>
      <div className='name manrope-body'>my name is Elizabeth J.</div>
    </div>
  )
}

export default Header;