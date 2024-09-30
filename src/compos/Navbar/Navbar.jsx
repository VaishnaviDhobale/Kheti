import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/users" className="nav-link">Users</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </>
  );
};