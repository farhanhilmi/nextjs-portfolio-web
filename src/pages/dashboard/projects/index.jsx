import DashboardLayout from '@/components/DashboardLayout';
import DataTable from '@/components/Datatable';
import PlainButton from '@/components/PlainButton';
import { readAllData } from '@/services/firebase';
import React, { useEffect, useState } from 'react';

const columns = [
    {
        Header: 'Title',
        accessor: 'title',
    },
    {
        Header: 'Tags',
        accessor: 'tags',
    },
    {
        Header: 'Images',
        accessor: 'images',
    },
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Type',
        accessor: 'type',
    },
    {
        Header: 'Priority',
        accessor: 'priority',
    },
];

const Dashboard = () => {
    const [dataProjects, setDataProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await readAllData('projects');
                setDataProjects(projects);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <DashboardLayout pageTitle={'Projects'}>
            <div>
                <section className="bg-white p-6 shadow rounded mx-auto">
                    <PlainButton text="Add Data" to="/dashboard/projects/add" />
                    <hr className="mt-4" />
                    <DataTable columns={columns} data={dataProjects} />
                </section>
            </div>
        </DashboardLayout>
    );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
