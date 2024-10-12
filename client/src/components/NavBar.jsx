import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <br />
      <Link to="/reviews" className="nav-link">
        Reviews
      </Link>
      <br />
      <Link to="/add-review" className="nav-link">
        Add your review
      </Link>
    </nav>
  );
}
