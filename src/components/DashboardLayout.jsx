import React, { useEffect, useRef } from 'react';
// import feather from 'feather-icons';
import '../app/globals.css';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import feather from 'feather-icons';
import Link from 'next/link';
import Script from 'next/script';
// import { useRouter } from 'next/router';

export const metadata = {
    title: 'Dashboard | Farhan Hilmi',
    description: "Farhan Hilmi's personal website",
};

const DashboardLayout = ({ children, pageTitle }) => {
    const btnOpenMenuRef = useRef(null);
    const btnCloseMenuRef = useRef(null);
    const asideRef = useRef(null);
    // const router = useRouter();

    // const isAuth = false;

    useEffect(() => {
        // if (!isAuth) {
        //     router.push('/');
        // }
        feather.replace();
    }, []);

    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== 'undefined') {
            const bodyRef = document.body;

            const handleOpenMenu = (event) => {
                event.stopPropagation();
                if (asideRef.current && bodyRef) {
                    asideRef.current.classList.remove('closed');
                    bodyRef.classList.add(
                        'pointer-events-none',
                        'overflow-hidden',
                    );
                    asideRef.current.classList.add('pointer-events-auto');
                }
            };

            const handleCloseMenu = (event) => {
                if (asideRef.current && bodyRef) {
                    asideRef.current.classList.add('closed');
                    bodyRef.classList.remove(
                        'pointer-events-none',
                        'overflow-hidden',
                    );
                }
            };

            const handleAsideClick = (event) => {
                event.stopPropagation();
            };

            const handleDocumentClick = () => {
                if (asideRef.current && bodyRef) {
                    asideRef.current.classList.add('closed');
                    bodyRef.classList.remove(
                        'pointer-events-none',
                        'overflow-hidden',
                    );
                }
            };

            const btnOpenMenu = btnOpenMenuRef.current;
            const btnCloseMenu = btnCloseMenuRef.current;
            const aside = asideRef.current;

            if (btnOpenMenu)
                btnOpenMenu.addEventListener('click', handleOpenMenu);
            if (btnCloseMenu)
                btnCloseMenu.addEventListener('click', handleCloseMenu);
            if (aside) aside.addEventListener('click', handleAsideClick);
            document.addEventListener('click', handleDocumentClick);

            return () => {
                if (btnOpenMenu)
                    btnOpenMenu.removeEventListener('click', handleOpenMenu);
                if (btnCloseMenu)
                    btnCloseMenu.removeEventListener('click', handleCloseMenu);
                if (aside) aside.removeEventListener('click', handleAsideClick);
                document.removeEventListener('click', handleDocumentClick);
            };
        }
    }, []);

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.datatables.net/2.1.3/css/dataTables.dataTables.css"
                />
            </Head>
            <Script>
                <script src="https://cdn.datatables.net/2.1.3/js/dataTables.js"></script>
            </Script>
            <ToastContainer />
            <div className="flex bg-gray-100">
                <aside
                    ref={asideRef}
                    className="h-screen bg-white fixed lg:sticky top-0 border-r-2 p-6 pt-10 whitespace-nowrap z-10 closed shadow-xl"
                >
                    <div className="mb-10 flex items-center justify-between">
                        <div className="p-2 bg-purple-600 text-white rounded">
                            <i data-feather="box"></i>
                        </div>
                        <button
                            ref={btnCloseMenuRef}
                            className="lg:hidden bg-gray-200 text-gray-500 rounded leading-none p-1 btn-close-menu"
                        >
                            <i data-feather="chevron-left"></i>
                        </button>
                    </div>
                    <ul className="text-gray-500 font-semibold flex flex-col gap-2">
                        <li>
                            <a
                                href="/"
                                className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <i
                                    data-feather="home"
                                    className="mr-3"
                                    style={{ width: '1.2em' }}
                                ></i>
                                <span className="flex-grow">Home</span>
                                <span className="text-sm bg-gray-200 leading-none rounded py-1 px-2 ml-10">
                                    H
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/dashboard"
                                className="active text-black bg-gray-100 flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <i
                                    data-feather="columns"
                                    className="mr-3"
                                    style={{ width: '1.2em' }}
                                ></i>
                                <span className="flex-grow">My Dashboard</span>
                                <span className="text-sm bg-gray-200 text-gray-500 leading-none rounded py-1 px-2 ml-10">
                                    D
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <span className="flex items-center gap-3">
                                    <i
                                        data-feather="bell"
                                        style={{ width: '1.2em' }}
                                    ></i>
                                    Notifications
                                    <span className="bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs">
                                        2
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li className="border my-2"></li>
                        {/* <li>
                            <a
                                href="#"
                                className="flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <span className="flex items-center gap-3">
                                    <i
                                        data-feather="rss"
                                        style={{ width: '1.2em' }}
                                    ></i>
                                    News
                                    <span className="bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs">
                                        99+
                                    </span>
                                </span>
                            </a>
                        </li> */}
                        <li>
                            <Link
                                href="/dashboard/projects"
                                className="flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <span className="flex items-center gap-3">
                                    <i
                                        data-feather="codepen"
                                        style={{ width: '1.2em' }}
                                    ></i>
                                    Projects
                                </span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <i
                                    data-feather="calendar"
                                    className="mr-3"
                                    style={{ width: '1.2em' }}
                                ></i>
                                <span className="flex-grow">Events</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <i
                                    data-feather="user"
                                    className="mr-3"
                                    style={{ width: '1.2em' }}
                                ></i>
                                <span className="flex-grow">People</span>
                                <i
                                    data-feather="chevron-down"
                                    style={{ width: '1.2em' }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <i
                                    data-feather="users"
                                    className="mr-3"
                                    style={{ width: '1.2em' }}
                                ></i>
                                <span className="flex-grow">Groups</span>
                                <i
                                    data-feather="chevron-down"
                                    style={{ width: '1.2em' }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <i
                                    data-feather="archive"
                                    className="mr-3"
                                    style={{ width: '1.2em' }}
                                ></i>
                                <span className="flex-grow">Resources</span>
                                <i
                                    data-feather="chevron-down"
                                    style={{ width: '1.2em' }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
                            >
                                <i
                                    data-feather="briefcase"
                                    className="mr-3"
                                    style={{ width: '1.2em' }}
                                ></i>
                                <span className="flex-grow">Offices</span>
                            </a>
                        </li>
                    </ul>
                </aside>
                <div className="w-full">
                    <header className="px-6 lg:px-8 pb-2 lg:pb-4 pt-4 lg:pt-8 shadow bg-white mb-1 sticky text-gray-800 top-0">
                        <h1 className="text-xl font-semibold mb-6 flex items-center">
                            <button
                                ref={btnOpenMenuRef}
                                className="btn-open-menu inline-block lg:hidden mr-6"
                            >
                                <i data-feather="menu"></i>
                            </button>
                            <span>{pageTitle}</span>
                        </h1>
                    </header>
                    <main className="px-6 py-8 lg:px-8 bg-gray-100 flex flex-col gap-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
