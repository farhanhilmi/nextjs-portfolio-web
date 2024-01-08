import { useEffect, useState } from 'react';
import Chips from './Chips';

const DetailProject = ({ isOpen, onClose, project }) => {
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
            className={`fixed inset-0 h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-10 flex items-center justify-center ${
                isOpen ? 'visible z-[99999999999999]' : 'invisible'
            }`}
            onClick={onClose}
        >
            <div
                className="max-w-5xl w-[90%] h-[70%] p-4 rounded-2xl bg-blue-ocean overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Add your detail content here */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="w-full h-[20rem] rounded-lg">
                        <img
                            src={previewImage}
                            alt=""
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col py-4">
                        <h4 className="text-3xl font-bold">#{project.title}</h4>
                        <div className="mt-auto">
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
                        <div className="flex gap-2 mt-auto">
                            {project.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-500 w-28 h-20 rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                                    onClick={() =>
                                        setPreviewImageHandler(image)
                                    }
                                >
                                    <img
                                        key={image}
                                        src={image}
                                        alt=""
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="font-semibold text-lg">Description:</span>
                    <div
                        className="font-medium mb-4"
                        dangerouslySetInnerHTML={createMarkup(
                            project.description,
                        )}
                    ></div>
                </div>
                <button
                    className="absolute top-[90%] right-[50%] lg:top-8 md:top-8 xl:top-14 lg:right-10 xl:right-36 md:right-10 text-red-200 hover:text-gray-700"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default DetailProject;
