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
      <div className='socials-icons'>
      <a href="https://github.com/elizafoam"><img className='icon' src="github.png" alt="github icon" /></a>
      <a href="https://www.linkedin.com/in/elizafoam/"><img className='icon' src="linkedin.png" alt="linkedin icon" /></a>
      <a href="mailto:elizafoam@gmail.com"><img className='icon' src="gmail.png" alt="gmail icon" /></a>
      </div>
    </div>
  )
}

export default Header;