import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Correct import for Link

export default function Navbar(props) {
  const { title, aboutText, mode } = props;
  const navbarClassName = mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'; // Adjust class names based on mode

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClassName}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary'); }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success'); }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning'); }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            </div>
          </ul>
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
