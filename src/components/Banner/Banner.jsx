import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="Banner">
      <div className='username'>elizafoam</div>
      <div className='logo'><img src="/logo.png" alt="logo" /></div>
      <div className='navigation'>
        <div>Home</div>
        <div>About</div>
        <div>Experience</div>
      </div>
    </div>
  )
}

export default Banner;