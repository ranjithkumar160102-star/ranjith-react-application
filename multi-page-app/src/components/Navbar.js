import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>My React App</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
}

export default Navbar;