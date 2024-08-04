// pages/index.js
import DashboardLayout from '@/components/DashboardLayout';
import DynamicForm from '@/components/DynamicForm';
import React from 'react';

const fieldConfigs = [
    { type: 'text', name: 'title', label: 'Title' },
    { type: 'array', name: 'tags', label: 'Tech Stack', items: [''] },
    { type: 'file', name: 'profilePicture', label: 'Profile Picture' },
    { type: 'number', name: 'priority', label: 'Priority' },
    { type: 'textarea', name: 'description', label: 'Description' },

    // {
    //     type: 'select',
    //     name: 'country',
    //     label: 'Country',
    //     options: [
    //         { value: 'usa', label: 'United States' },
    //         { value: 'canada', label: 'Canada' },
    //         { value: 'uk', label: 'United Kingdom' },
    //     ],
    // },
];

const HomePage = () => {
    const handleFormSubmit = async (data) => {
        console.log('Form submitted:', data);
        const result = await fetch('google.com', {
            body: data,
            method: 'POST',
        });

        console.log('result', result);
    };

    return (
        <DashboardLayout pageTitle={'Add Data'}>
            <div className="container mx-auto p-4">
                <DynamicForm
                    fields={fieldConfigs}
                    onSubmit={handleFormSubmit}
                />
            </div>
        </DashboardLayout>
    );
};

export default HomePage;
