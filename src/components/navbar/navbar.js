import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
        <section className="navbar">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/" className="navbar-item">About Us</Link>
        <Link to="/" className="navbar-item">Services</Link>
        <Link to="/" className="navbar-item">Training</Link>
        <Link to="/" className="navbar-item">Events</Link>
        <Link to="/" className="navbar-item">Careers</Link>
        <Link to="/" className="navbar-item">Contact</Link>
        <Link to="/" className="navbar-item get-started-btn">Get Started</Link>
        </section>
    )
}

export default Navbar;