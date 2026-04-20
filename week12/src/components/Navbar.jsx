import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="right"><Link to="/register">Register</Link></li>
        <li className="right"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
