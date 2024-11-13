import React, { useEffect, useRef } from 'react';
import '../styles/styles.css';

const Drawing = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let isDrawing = false;
        let prevX = null;
        let prevY = null;

        const getMousePos = (canvas, evt) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top,
            };
        };

        const drawLine = (e) => {
            if (!isDrawing) return;
            const { x, y } = getMousePos(canvas, e);
            if (prevX === null || prevY === null) {
                prevX = x;
                prevY = y;
                return;
            }
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
            prevX = x;
            prevY = y;
        };

        canvas.addEventListener('mousedown', () => (isDrawing = true));
        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
            prevX = null;
            prevY = null;
        });
        canvas.addEventListener('mousemove', drawLine);

        return () => {
            canvas.removeEventListener('mousedown', () => {});
            canvas.removeEventListener('mouseup', () => {});
            canvas.removeEventListener('mousemove', drawLine);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="canvas"
            width={600}
            height={400}
            style={{ border: '1px solid black', display: 'block', margin: 'auto' }}
        ></canvas>
    );
};

export default Drawing;