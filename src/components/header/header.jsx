import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            {/* Brand */}
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            {/* Toggler/collapsibe Button */}
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >
                <span className="navbar-toggler-icon" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
