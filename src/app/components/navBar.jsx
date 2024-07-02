import { Link } from 'react-router-dom';
import logo from '../components/logo.svg'

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div>
          <img src={logo} className="nav-logo" alt="logo" />
        </div>
        <div>
          <Link className="nav_reg-btn" to="/">
            Main page
          </Link>
        </div>
        <div className="nav-reg">
          <Link className="nav_reg-btn" to="/signin">
            Signin
          </Link>
          <Link className="nav_reg-btn" to="/signout">
            Signout
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;