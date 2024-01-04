'use client';

import { useState } from 'react';
import Chips from './Chips';

function Experience({
    position,
    company,
    description,
    duration,
    jobType,
    Stack,
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const createMarkup = (htmlString) => ({ __html: htmlString });

    return (
        <div
            className={`grid grid-cols-4 mb-6 rounded-lg p-6 transition-transform duration-300 ${
                isHovered
                    ? 'hover:translate-y-[-20px] hover:shadow-md hover:backdrop-blur-xl hover:backdrop-filter hover:bg-opacity-10 hover:bg-blue-ocean'
                    : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="">
                <span className="text-sm">{duration}</span>
            </div>
            <div className="ps-3 col-span-3">
                <h3 className="text-xl font-semibold mb-2">{position}</h3>
                <p className="text-gray-500 mb-2">
                    {company} ~ <span className="mr-2">{jobType}</span>
                </p>
                <div
                    className="text-sm font-medium text-gray-400 mb-4"
                    dangerouslySetInnerHTML={createMarkup(description)}
                >
                    {/* {description} */}
                </div>
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

export default Experience;
