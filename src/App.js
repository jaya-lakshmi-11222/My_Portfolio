import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; // Import your CSS file
import About from './content/About/about.js';
import Skill from './content/Skill/skill.js';
import Contact from './content/Contacts/contact.js';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Add routes for other sections */}
        </Routes>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <div className="App">
      <header className="header">
        <Link to="/" className="logo">
          Jaya Gunnam
        </Link>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skill">Skills</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
        ></link>
      </header>
    </div>
  );
}

function HomeSection() {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Jaya</h1>
        <h3>
          And I'm a <span>Frontend Developer</span>
        </h3>
        <p>
        Self motivated and hardworking fresher seeking for an opportunity and I aspire to work in a leading 
organization where I can apply my skills for the growth of the organization and therefore prove my 
caliber. 
        </p>
        <SocialMediaLinks />
        <a href="/Jaya resume.pdf" className="btn">
          Download CV
        </a>
        </div>
      <div className="home-img">
        <img src="/images/port-img.jpeg" alt="Jaya" className="responsive-img"/>
      </div>
    </section>
  );
}

function SocialMediaLinks() {
  return (
    <div className="social-media">
      
      <a href="https://www.instagram.com/cinderella_.994/?igsh=YW0xZ3MxZzUwMWo4">
        <i className="bx bxl-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/jaya-lakshmi-gunnam-13a585241/">
        <i className="bx bxl-linkedin"></i>
      </a>
    </div>
  );
}

export default App;
