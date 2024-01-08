'use client';

import { useState } from 'react';
import Chips from './Chips';

function Projects({ title, type, description, Stack, onClick, images }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const createMarkup = (htmlString) => ({ __html: htmlString });
    const descriptionToShow = description.slice(0, 200);

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
                <div className="bg-teal-400/10 p-[3px] rounded-lg md:w-[7.5rem] md:h-20 w-full h-full">
                    <img
                        src={images[0]}
                        alt=""
                        srcSet=""
                        className="w-full h-full rounded-lg"
                    />
                </div>
            </div>
            <div className="md:ps-3 col-span-3">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 mb-2">{type}</p>
                <div
                    className="text-sm font-medium text-gray-400 mb-4"
                    dangerouslySetInnerHTML={createMarkup(descriptionToShow)}
                ></div>
                {description.length > 200 && (
                    <span className="text-teal-400/50 hover:underline cursor-pointer">
                        ...See More
                        {/* {showFullDescription ? 'See Less' : 'See More'} */}
                    </span>
                )}

                <ul className="mt-4 flex flex-wrap gap-2">
                    {Stack.map((item, index) => (
                        <Chips text={item} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;
