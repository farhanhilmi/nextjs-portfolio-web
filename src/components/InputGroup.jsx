import React, { useState } from 'react';

export const InputGroup = ({
    label,
    name,
    onChange = false,
    placeholder,
    isRequired = false,
    isTextArea = false,
    isFile = false,
    selectedFiles = false,
    value = '',
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
                        <span className="text-xs text-teal-300">
                            *only accept these extensions: png, jpg, jpeg, gif,
                            xlsx, xls, doc, docx, ppt, pptx, txt, pdf
                        </span>
                        <div className="relative mt-4 w-full">
                            <input
                                name={name}
                                type="file"
                                id="fileInput"
                                multiple
                                onChange={onChange}
                                accept="image/png, image/jpg, image/jpeg, image/gif, .xlsx, .xls, .doc, docx, .ppt, pptx, .txt, .pdf"
                                className="absolute opacity-0 w-full h-full cursor-pointer"
                            />
                            <label
                                htmlFor="fileInput"
                                className="relative w-full bg-teal-400/30 py-2.5 px-4 rounded-md cursor-pointer text-white font-medium hover:bg-teal-600"
                            >
                                {selectedFiles
                                    ? `${selectedFiles.length} ${
                                          selectedFiles.length > 1
                                              ? 'files'
                                              : 'file'
                                      } selected`
                                    : 'Choose File'}
                            </label>
                        </div>
                    </>
                ) : isTextArea ? (
                    <textarea
                        className="mt-2 w-full rounded-md py-2.5 pl-2.5 pr-2 bg-transparent outline outline-2 outline-teal-400/30 focus:outline-teal-400/50 text-teal-300 placeholder:text-teal-400/50"
                        placeholder={placeholder}
                        rows={4}
                        name={name}
                        onChange={onChange}
                        value={value}
                    ></textarea>
                ) : (
                    <input
                        type="text"
                        className="mt-2 w-full rounded-md py-2.5 pl-2.5 pr-2 bg-transparent outline outline-2 outline-teal-400/30 focus:outline-teal-400/50 text-teal-300 placeholder:text-teal-400/50"
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                )}
            </div>
        </div>
    );
};
