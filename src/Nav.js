import "./PR.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="Home">
          <li>Home</li>
        </Link>
        <Link to="Jobsearch">
          <li>Jobsearch</li>
        </Link>
        <Link to="Quotes">
          <u><li>Inspirational Quotes</li></u>
        </Link>
        <Link to="ContactForm">
          <li>ContactUs</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
