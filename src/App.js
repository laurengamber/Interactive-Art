import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import './styles/styles.css';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                console.log('Rendering About Page');
                return <About />;
            case 'Gallery':
                console.log('Rendering Gallery'); // Add this log to confirm Gallery rendering
                return <Gallery />;
            case 'Services':
                console.log('Rendering Services Page');
                return <Services />;
            case 'Contact':
                console.log('Rendering Contact Page');
                return <Contact />;
            default:
                console.log('Rendering Home Page');
                return <h2>Home</h2>;
        }
    };

    return (
        <div>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div>{renderPage()}</div>
        </div>
    );
}

export default App;