import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <a className="brand" href="#home" onClick={closeMenu}>
          <img src="/assets/dev-stack-logo.png" alt="Dev Stack logo" />
          <span>Dev <b>Stack</b></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a className="active" href="#home" onClick={closeMenu}>Home</a>
          <a href="#technologies" onClick={closeMenu}>Technologies</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="sign-in" type="button">Sign In</button>
          <button className="sign-up" type="button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;