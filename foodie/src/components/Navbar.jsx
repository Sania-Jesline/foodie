import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.avif"; // Import logo

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`); // Replace with actual search functionality
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Foodie Logo" />
        <h1>Foodie</h1>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Signup</Link>
        <Link to="/profile" className="btn">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
