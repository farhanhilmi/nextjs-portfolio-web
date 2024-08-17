import React, { useState } from 'react';
import useImageUpload from '@/hooks/useImageUpload';
import UploadProgress from './UploadProgress';

const ImageUploader = ({
    path,
    onUploadComplete,
    isMultiple = false,
    ...props
}) => {
    const { uploadImage, uploadProgress, error } = useImageUpload();
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
        if (props.onChange) {
            props.onChange(e);
        }
    };

    const handleUpload = async () => {
        if (files.length > 0) {
            try {
                const urls = await uploadImage(files, path);
                if (onUploadComplete) {
                    onUploadComplete(urls);
                }
            } catch (error) {
                console.error('Upload failed:', error);
            }
        }
    };

    return (
        <div className={props.className}>
            <input
                type="file"
                id={props.id}
                name={props.name}
                onChange={handleFileChange}
                multiple={isMultiple}
                required={props.required}
                className={props.className}
            />
            <button
                onClick={handleUpload}
                className="bg-purple-500/75 hover:bg-purple-500 px-2.5 py-1 rounded-md text-white mt-2 mb-4"
            >
                Upload now
            </button>

            <UploadProgress uploadProgress={uploadProgress} />

            {error && (
                <div style={{ color: 'red' }}>Error: {error.message}</div>
            )}
        </div>
    );
};

export default ImageUploader;
