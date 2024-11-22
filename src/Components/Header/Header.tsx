import React from "react";
import "./Header.css";

function Header() {
    return (
        <nav className="Header navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/logo-2.png" height="80" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link btn btn-nav" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-nav"
                                href="/#/Sponsors"
                            >
                                Sponsors
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-nav"
                                href="/#/History"
                            >
                                History
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-nav"
                                href="/#/Mentors"
                            >
                                Mentors
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-nav"
                                href="mailto:5148nbblitz@gmail.com"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
