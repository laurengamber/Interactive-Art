import React from 'react';
import '../styles/styles.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
    return (
        <nav>
            <ul>
                <li>
                    <a
                        href="#"
                        className={currentPage === 'Home' ? 'active' : ''}
                        onClick={() => setCurrentPage('Home')}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={currentPage === 'About' ? 'active' : ''}
                        onClick={() => setCurrentPage('About')}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={currentPage === 'Gallery' ? 'active' : ''}
                        onClick={() => setCurrentPage('Gallery')}
                    >
                        Gallery
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={currentPage === 'Services' ? 'active' : ''}
                        onClick={() => setCurrentPage('Services')}
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={currentPage === 'Contact' ? 'active' : ''}
                        onClick={() => setCurrentPage('Contact')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;