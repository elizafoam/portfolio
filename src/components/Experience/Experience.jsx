import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = ({company, location, position, date, skills}) => {
  return (
    <div className="Experience manrope-body">
      <div className='timeline'>
        <div className='dot'></div>
        <div className='line'></div>
      </div>
      <div className='experience-info'>
        <div>{company} | {location}</div>
        <div className='position'>{position}</div>
        <div className='date'>{date}</div>
        <div className='skills-section'>
          {skills.map(skill => (
            <div className='skill'>{skill}</div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience;