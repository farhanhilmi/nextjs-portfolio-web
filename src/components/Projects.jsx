'use client';

import { useState } from 'react';
import Chips from './Chips';

function Projects({
    position,
    company,
    description,
    duration,
    jobType,
    Stack,
    onClick,
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`grid md:grid-cols-4 grid-cols-1 mb-6 bg-dark rounded-lg p-6 transition-transform duration-300 ${
                isHovered
                    ? 'hover:translate-y-[-20px] hover:cursor-pointer hover:shadow-md hover:backdrop-blur-xl hover:backdrop-filter hover:bg-opacity-10 hover:bg-blue-ocean'
                    : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <div className="mb-4">
                <div className="bg-red-500 p-[3px] rounded-lg md:w-[7.5rem] md:h-20 w-full h-full">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6R2sHMN23PGg1pyIrPPSAku1fP0A8Kd32w&usqp=CAU"
                        alt=""
                        srcSet=""
                        className="w-full h-full rounded-lg"
                    />
                </div>
            </div>
            <div className="md:ps-3 col-span-3">
                <h3 className="text-xl font-semibold mb-2">{position}</h3>
                <p className="text-gray-500 mb-2">
                    {company} ~ <span className="mr-2">{jobType}</span>
                </p>
                <p className="text-sm text-gray-400 mb-4">{description}</p>
                {/* <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-2">{duration}</span>
                    
                </div> */}
                <ul className="mt-4 flex flex-wrap gap-2">
                    {Stack.map((item, index) => (
                        <Chips text={item} key={index} />
                        // <li
                        //     key={index}
                        //     className="text-xs bg-gray-100 text-gray-500 py-1 px-2 rounded"
                        // >
                        //     {item}
                        // </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;
