import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="Banner">
        <div className='username'>elizafoam</div>
        <div className='logo'><img src="/logo.png" alt="logo" /></div>
        <div className='navigation'>
          <a href="#header"><div>Home</div></a>
          <a href="#about"><div>About</div></a>
          <a href="#experience"><div>Experience</div></a>
        </div>
      </div>

      <div id="header">
        <Header />
      </div>

      <div className='quote-section'>
        <img className='cookie' src="/cookie.jpg" alt="cookie image" />
        <div>
            <div className='quote'>It's only up from here</div>
          <div id='author' className='manrope-body'>- Someone famous</div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <section className='main' id="experience">
        <div className='about-title manrope-heading'>Professional Experience</div>
        <div className='experience-section'>
          <div className='experiences'>
            <Experience company={"Rutgers University"} location={"New Brunswick, NJ"} position={"Computer Science Tutor"} date={"Sept 2023 - Present"} skills={["Java", "Data Structures", "Object Oriented Programming", "Tutoring"]}/>

            <Experience company={"Salesforce"} location={"San Francisco, CA"} position={"FTL Software Engineer Intern"} date={"Jun 2024 - Aug 2024"} skills={["Javascript", "PostgreSQL", "Express", "Node.js", "React"]}/>

            <Experience company={"Rutgers University"} location={"New Brunswick, NJ"} position={"IT Level 2 Specialist"} date={"Sept 2022 - Present"} skills={["ServiceNow", "Troubleshooting", "Customer Service", "Networking", "Hardware Support"]}/>
          </div>
        </div>

        <div className='about-title manrope-heading'>Professional Development</div>
        <div className='experience-section'>
          <div className='experiences'>
            <Experience company={"Netflix x Formation"} location={"Remote"} position={"Software Engineering Fellow"} date={"May 2024 - Dec 2024"} skills={["Python", "System Design", "Data Structures", "Algorithms"]}/>

            <Experience company={"Break Through Tech AI"} location={"Remote"} position={"Machine Learning Fellow"} date={"May 2023 - Apr 2024"} skills={["Python", "Scikit-learn", "Tensorflow", "Pandas", "Computer Vision", "Data Visualization"]}/>

            <Experience company={"Bloomberg"} location={"Remote"} position={"Princeton Tech Lab Fellow"} date={"Jun 2024 - Sep 2024"} skills={["Python", "Data Structures", "Algorithms", "Javascript", "Docker"]}/>
          </div>
        </div>
      </section>
      
      <div className='curly manrope-heading'>~</div>
      <Footer />
    </div>
  )
}

export default App;