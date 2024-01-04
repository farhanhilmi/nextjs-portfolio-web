import './globals.css';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Farhan Hilmi',
    description: "Farhan Hilmi's personal website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body className="bg-gradient-to-r from-[#3A6073] to-[#16222A] font-inter">
                <ToastContainer />

                {children}
            </body>
        </html>
    );
}
