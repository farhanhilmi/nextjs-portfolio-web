import { useEffect } from 'react';

const DetailProject = ({ isOpen, onClose }) => {
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

    return (
        <div
            className={`fixed inset-0 h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-10 flex items-center justify-center ${
                isOpen ? 'visible z-[99999999999999]' : 'invisible'
            }`}
            onClick={onClose}
        >
            <div
                className="max-w-5xl w-[90%] h-[70%] p-4 rounded-2xl bg-blue-ocean"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Add your detail content here */}
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
