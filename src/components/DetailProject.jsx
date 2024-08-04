import { useEffect, useState } from 'react';
import Chips from './Chips';

const DetailProject = ({
    isOpen,
    onClose,
    project,
    bgColor = 'bg-blue-ocean',
    isEditable = false,
}) => {
    const [previewImage, setPreviewImage] = useState(project.images[0]);

    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }

        return () => {
            body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    const setPreviewImageHandler = (image) => {
        setPreviewImage(image);
    };

    const createMarkup = (htmlString) => ({ __html: htmlString });

    return (
        <div
            className={`fixed inset-0 h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-10 flex items-center justify-center ${
                isOpen ? 'visible z-[99999999999999]' : 'invisible'
            }`}
            onClick={onClose}
        >
            <div
                className={`max-w-5xl w-[90%] h-[70%] p-4 rounded-2xl ${bgColor} overflow-auto relative`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Add your detail content here */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="w-full h-[20rem] rounded-l">
                        <img
                            src={previewImage}
                            alt=""
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col py-4">
                        <div className="mobile-order-1 flex gap-2 mt-4 ">
                            {project.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-500 w-26 h-18 rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                                    onClick={() =>
                                        setPreviewImageHandler(image)
                                    }
                                >
                                    <img
                                        src={image}
                                        alt=""
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                        {isEditable && (
                            <span className="border border-gray-100/70 rounded-full px-2 mx-auto cursor-pointer hover:bg-teal-400/10 hover:text-teal-300 hover:border-teal-300">
                                Update
                            </span>
                        )}
                        <h4 className="mobile-order-2 sm:text-3xl text-lg font-bold mt-4">
                            #{project.title}
                        </h4>
                        <div className="mt-auto mobile-order-3">
                            <span className="font-medium">
                                Tech Stack/Technologies/Tools/Concepts:
                            </span>
                            <br />
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <Chips
                                        text={tag}
                                        key={index}
                                        onHover={true}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="font-semibold text-lg">Description:</span>
                    <div
                        className="font-normal text-sm sm:text-base mb-4"
                        dangerouslySetInnerHTML={createMarkup(
                            project.description,
                        )}
                    ></div>
                </div>
                {/* <button
                    className="absolute top-[90%] right-[50%] lg:top-1 md:top-1 xl:top-1 lg:right-1 xl:right-1 md:right-1 text-red-200 hover:text-gray-700"
                    onClick={onClose}
                >
                    X
                </button> */}
                {/* <button class="absolute top-3 right-2 " onClick={onClose}>
                    <Chips
                        text={'X'}
                        key={1}
                        onHover={true}
                        fontWeight="font-bold"
                        fontSize="text-lg"
                    />
                </button> */}
            </div>
        </div>
    );
};

export default DetailProject;
