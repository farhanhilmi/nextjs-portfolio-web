import React, { useState } from 'react';

// Helper function to render form fields based on type
const renderField = (field, handleChange) => {
    const { type, name, label, value, options } = field;

    const commonProps = {
        id: name,
        name,
        value,
        onChange: handleChange,
        className:
            'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700',
        required: true,
    };

    switch (type) {
        case 'text':
        case 'number':
        case 'email':
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
                    <input type="file" {...commonProps} multiple />
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

const DynamicForm = ({ fields, onSubmit }) => {
    const [formData, setFormData] = useState(
        fields.reduce(
            (acc, field) => ({
                ...acc,
                [field.name]:
                    field.type === 'array'
                        ? field.items?.join(',') || ''
                        : field.value || '',
            }),
            {},
        ),
    );

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'file' ? Array.from(files) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            const field = fields.find((field) => field.name === key);
            if (field.type === 'array') {
                value
                    .split(',')
                    .map((item) => item.trim())
                    .forEach((item, i) => {
                        formDataToSubmit.append(`${key}[${i}]`, item);
                    });
            } else if (Array.isArray(value)) {
                value.forEach((file, i) => {
                    formDataToSubmit.append(`${key}[${i}]`, file);
                });
            } else {
                formDataToSubmit.append(key, value);
            }
        });

        onSubmit(formDataToSubmit);
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
