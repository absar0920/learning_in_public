import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">CarCo</div>
    <div className="navbar-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <Link to={"/inventory"}>Inventory</Link>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);


export default Navbar