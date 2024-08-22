import DynamicForm from '@/components/DynamicForm';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function LoginPage() {
    const fieldConfigs = [
        { type: 'email', name: 'email', label: 'Email' },
        { type: 'password', name: 'password', label: 'Password' },
    ];
    const router = useRouter();

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

    const handleSubmit = async (data, e) => {
        e.preventDefault();

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            router.push('/dashboard');
        } else {
            const data = await res.json();
            alert(data.message);
        }
    };

    return (
        <div>
            <DynamicForm
                fields={fieldConfigs}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
            />
        </div>
    );
}

export default LoginPage;
