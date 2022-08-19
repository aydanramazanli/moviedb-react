import { useState, useEffect, useCallback } from 'react';
import logo from '../../images/logo.svg';
import './_navbar.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar () {
  const location = useLocation();
  const [isOpen, setIOpen] = useState();
  const [userData, setUserData] = useState();
  const visible = () => {
    setIOpen(!isOpen);
  };
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('data'));
    setUserData(local);
  }, [location.pathname]);

  const remove = useCallback(() => {
    if (userData !== null) {
      window.localStorage.removeItem('data');
    }
  }, [userData]);

  return (
    <div className="navbar">
      <div className="navbar-content">
      <div className="logo">
        <Link to="/">
          {' '}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {userData === null
        ? (
        <>
          <nav className="nav">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <div className="auth">
            <button>
              <Link to="/login"> Login</Link>
            </button>
          </div>
        </>
          )
        : (
        <>
          <nav className="nav">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/account">Account</Link>
              </li>
              <li className="nav-item">
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </nav>
          <div className="auth">
            <button onClick={remove}>
              <Link to="/login">Logout</Link>
            </button>
          </div>
        </>
          )}
             <div className="mobile-navbar">
        <i className="fa-solid fa-bars" onClick={visible}></i>
        {isOpen
          ? (
          <nav className="sidebar">
            <ul>
              {userData === null
                ? (
                <>
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Login</Link>
                  </li>
                </>
                  )
                : (
                <>
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/account">Account</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li className="nav-item" onClick={remove}>
                    <Link to="/login">Logout</Link>
                  </li>
                </>
                  )}
            </ul>
          </nav>
            )
          : null}
      </div>
      </div>

    </div>
  );
}
