import React from 'react';

const UploadProgress = ({ uploadProgress }) => {
    return (
        <div className="p-2 space-y-2">
            {Object.keys(uploadProgress).map((fileName) => (
                <div key={fileName} className="flex items-center space-x-4">
                    <div className="w-1/3 font-semibold text-gray-700">
                        {fileName}:
                    </div>
                    <div className="flex-1">
                        <div className="relative pt-1">
                            <div className="flex items-center justify-between mb-1">
                                <div className="text-xs font-semibold text-purple-400">
                                    {uploadProgress[fileName]}%
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-full bg-gray-300 h-2 rounded">
                                    <div
                                        className="h-full bg-purple-400 rounded"
                                        style={{
                                            width: `${uploadProgress[fileName]}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UploadProgress;
