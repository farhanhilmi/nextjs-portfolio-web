import { useEffect, useState } from 'react';

const LightEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setPosition((prevPosition) => ({
                x: prevPosition.x + window.pageXOffset,
                y: prevPosition.y + window.pageYOffset,
            }));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="absolute w-12 h-12 rounded-full bg-opacity-30 bg-white pointer-events-none mix-blend-screen z-[99]"
            style={{ left: position.x, top: position.y }}
        ></div>
    );
};

export default LightEffect;
