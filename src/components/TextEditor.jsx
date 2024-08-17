import dynamic from 'next/dynamic';
import { useMemo, useRef, useState } from 'react';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const MyPage = ({ placeholder, setContent, content }) => {
    const editor = useRef(null);

    const config = useMemo(
        () => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            placeholder: placeholder || 'Start typings...',
        }),
        [placeholder],
    );

    return (
        <div className="!text-gray-800">
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
            />
        </div>
    );
};

export default MyPage;
