export const convertToWebP = async (file) => {
    const img = document.createElement('img');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(
                (blob) => {
                    resolve(
                        new File(
                            [blob],
                            file.name.replace(/\.[^/.]+$/, '.webp'),
                            { type: 'image/webp' },
                        ),
                    );
                },
                'image/webp',
                0.7,
            ); // Adjust the quality if needed
        };

        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
};
