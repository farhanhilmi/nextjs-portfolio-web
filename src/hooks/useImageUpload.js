import { useState } from 'react';
import { storage } from '@/services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { convertToWebP } from '@/utils/format';

const useImageUpload = () => {
    const [uploadProgress, setUploadProgress] = useState({});
    const [error, setError] = useState(null);

    const uploadImage = async (files, path) => {
        const promises = [];
        setError(null);

        for (let file of Array.from(files)) {
            const timestamp = new Date().getTime();
            const webpFile = await convertToWebP(file);

            const sanitizedFileName = webpFile.name
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^a-zA-Z0-9.-]/g, '');

            const uniqueFileName = `${timestamp}-${sanitizedFileName}`;
            const storageRef = ref(storage, `${path}/${uniqueFileName}`);
            const uploadTask = uploadBytesResumable(storageRef, webpFile);

            const uploadPromise = new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                            100;
                        setUploadProgress((prev) => ({
                            ...prev,
                            [file.name]: progress,
                        }));
                    },
                    (error) => {
                        setError(error);
                        reject(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then((url) => {
                                resolve(url);
                            })
                            .catch(reject);
                    },
                );
            });

            promises.push(uploadPromise);
        }

        return Promise.all(promises);
    };

    return { uploadImage, uploadProgress, error };
};

export default useImageUpload;
