import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

const renderField = (field, handleChange) => {
    const { type, name, label, handleUploadComplete, isMultiple } = field;

    const commonProps = {
        id: name,
        name,
        onChange: handleChange,
        className:
            'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700',
        required: true,
    };

    switch (type) {
        case 'text':
        case 'number':
        case 'email':
        case 'password':
            return (
                <div key={name} className="mb-4">
                    <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                    <input type={type} {...commonProps} />
                </div>
            );
        case 'select':
            return (
                <div key={name} className="mb-4">
                    <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                    <select {...commonProps}>
                        {options.map((option, i) => (
                            <option key={i} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case 'textarea':
            return (
                <div key={name} className="mb-4">
                    <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                    <textarea {...commonProps} rows="4" />
                </div>
            );
        case 'file':
            return (
                <div key={name} className="mb-4">
                    <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                    <ImageUploader
                        path="public/image/projects"
                        onUploadComplete={handleUploadComplete}
                        isMultiple={isMultiple}
                        {...commonProps}
                    />
                </div>
            );
        case 'array':
            return (
                <div key={name} className="mb-4">
                    <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                    <input
                        type="text"
                        {...commonProps}
                        placeholder="Enter items separated by commas"
                    />
                </div>
            );
        default:
            return null;
    }
};

const DynamicForm = ({ fields, onSubmit, formData, setFormData }) => {
    // const [formData, setFormData] = useState(
    //     fields.reduce(
    //         (acc, field) => ({
    //             ...acc,
    //             [field.name]:
    //                 field.type === 'array'
    //                     ? field.items?.join(',') || ''
    //                     : field.value || '',
    //         }),
    //         {},
    //     ),
    // );

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'file' ? Array.from(files) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const jsonObject = {};

        Object.entries(formData).forEach(([key, value]) => {
            const field = fields.find((field) => field.name === key);
            if (field.type === 'array') {
                jsonObject[key] = value.split(',').map((item) => item.trim());
            } else if (Array.isArray(value)) {
                jsonObject[key] = value.map((file) => file); // Customize as needed
            } else if (field.type === 'number') {
                jsonObject[key] = parseInt(value);
            } else {
                jsonObject[key] = value;
            }
        });

        onSubmit(jsonObject, e);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg"
            >
                {fields.map((field) => renderField(field, handleChange))}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DynamicForm;
