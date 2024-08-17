import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/DashboardLayout';
import DynamicForm from '@/components/DynamicForm';
import { writeData } from '@/services/firebase';

const HomePage = () => {
    const router = useRouter();
    const [urls, setUrls] = useState([]);

    const handleUploadComplete = (uploadedUrls) => {
        setUrls(uploadedUrls);
        console.log('Image uploaded to:', uploadedUrls);
    };
    const fieldConfigs = [
        { type: 'text', name: 'title', label: 'Title' },
        { type: 'array', name: 'tags', label: 'Tech Stack', items: [''] },
        {
            type: 'file',
            name: 'images',
            label: 'Project Images',
            handleUploadComplete,
            isMultiple: true,
        },
        { type: 'number', name: 'priority', label: 'Priority' },
        { type: 'textarea', name: 'description', label: 'Description' },
    ];

    const [formData, setFormData] = useState(
        fieldConfigs.reduce(
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

    const handleFormSubmit = async (data) => {
        const finalData = {
            id: new Date().getTime(),
            ...data,
            images: urls,
        };

        try {
            // const result = await fetch('https://your-api-endpoint.com', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(finalData),
            // });

            // const response = await result.json();
            // console.log('Response from server:', response);
            writeData('projects/', finalData);

            // Clear the form
            setFormData({
                title: '',
                tags: '',
                images: [],
                priority: '',
                description: '',
            });

            setUrls([]);
            document.querySelector('form').reset();
            // Show success message
            toast.success('Form submitted successfully!', {
                onClose: () => {
                    // Navigate to home page after toast closes
                    router.push('/dashboard/projects');
                },
            });

            // setTimeout(() => {
            //     router.push('/dashboard/projects');
            // }, 1000); // Delay to allow Toastify to display the success message
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <DashboardLayout pageTitle={'Add Data'}>
            <DynamicForm
                fields={fieldConfigs}
                onSubmit={handleFormSubmit}
                formData={formData}
                setFormData={setFormData}
            />
        </DashboardLayout>
    );
};

export default HomePage;
