import { Link } from 'react-router-dom';
import '../navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <h1>Student Result Management System</h1>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/students" className="nav-link">Students</Link></li>
            <li className="nav-item"><Link to="/courses" className="nav-link">Courses</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
