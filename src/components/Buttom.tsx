import { useState } from 'react';

const Button = () => {
    const [position, setPosition] = useState({ x: '50%', y: '50%' });

    const handleMouseMove = () => {
        setTimeout(() => {
            const newPosX = Math.random() * (window.innerWidth - 100);
            const newPosY = Math.random() * (window.innerHeight - 40);
            setPosition({ x: `${newPosX}px`, y: `${newPosY}px` });
        }, 1)
    };

    return (
        <button
            className="absolute transition-all duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{ top: position.y, left: position.x }}
            onMouseEnter={handleMouseMove}
        >
            Aceitar
        </button>
    );
};

export default Button;