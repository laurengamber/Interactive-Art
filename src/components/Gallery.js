import React from 'react';
import Drawing from './drawing'; // Ensure path matches the file structure

const Gallery = () => {
    return (
        <div>
            <h2>Gallery</h2>
            <Drawing /> {/* This renders the drawing app */}
        </div>
    );
};

export default Gallery;