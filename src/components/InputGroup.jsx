import React from 'react';

export const InputGroup = ({
    label,
    placeholder,
    isRequired = false,
    isTextArea = false,
    isFile = false,
}) => {
    return (
        <div className="flex flex-col w-full mb-6">
            <div>
                <label className="text-lg">
                    {label}
                    {isRequired ? (
                        <span className="text-red-50 text-sm">*</span>
                    ) : (
                        <span className="text-sm"> (optional)</span>
                    )}
                </label>
                {isFile ? (
                    <>
                        <br />
                        <span className="text-xs">
                            *only accept this extension: png, jpg, jpeg, gif,
                            xlsx, xls, doc, docx, ppt, pptx, txt, pdf
                        </span>
                        <input
                            type="file"
                            multiple
                            accept="image/png, image/jpg, image/jpeg, image/gif, .xlsx, .xls, .doc, docx, .ppt, pptx, .txt, .pdf"
                            className="mt-2 w-full rounded-md py-2.5 pl-2.5 pr-2 bg-transparent outline outline-2 outline-teal-400/30 focus:outline-teal-400/50 text-teal-300 placeholder:text-teal-400/50"
                        />
                    </>
                ) : isTextArea ? (
                    <textarea
                        className="mt-2 w-full rounded-md py-2.5 pl-2.5 pr-2 bg-transparent outline outline-2 outline-teal-400/30 focus:outline-teal-400/50 text-teal-300 placeholder:text-teal-400/50"
                        placeholder={placeholder}
                        rows={4}
                    ></textarea>
                ) : (
                    <input
                        type="text"
                        className="mt-2 w-full rounded-md py-2.5 pl-2.5 pr-2 bg-transparent outline outline-2 outline-teal-400/30 focus:outline-teal-400/50 text-teal-300 placeholder:text-teal-400/50"
                        placeholder={placeholder}
                    />
                )}
            </div>
        </div>
    );
};
