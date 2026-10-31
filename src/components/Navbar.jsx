import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>van gogh</span>
      </div>

      <button className="navbar-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <div
        className={open ? "navbar-right open" : "navbar-right"}
        onClick={() => setOpen(false)}
      >
        <a href="#/">Home</a>
        <a href="#Story">Story</a>
        <a href="#StarryNight">Starry Night</a>
        <a href="#Paintings">Paintings</a>
      </div>
    </nav>
  );
}

export default Navbar;
