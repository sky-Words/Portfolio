import React from 'react'

const Nav = () => {
  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">
        <p className="logo">Elmehdi Sadki</p>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav
