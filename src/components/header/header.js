import React from 'react';
import Navbar from '../navbar/navbar';

import './header.css';

function Header() {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <h1 className="logo me-auto">
                    <a href="/" className="header-logo">Knila</a>
                    </h1>
                </section>

                <section className="header-top__navbar">
                    <Navbar />
                </section>
            </section>
        </section>
    )
}

export default Header;