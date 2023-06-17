'use client';

import { useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Farhan Hilmi',
    description: "Farhan Hilmi's personal website",
};

export default function RootLayout({ children }) {
    const [timeout, setTimeOut] = useState(null);
    const [style, setStyle] = useState({});

    // const handleMouseMove = (e) => {
    //     const x = e.pageX;
    //     const y = e.pageY;
    //     setStyle({
    //         top: `${y}px`,
    //         left: `${x}px`,
    //         display: `block`,
    //     });
    //     children.params.props.style = style;

    //     const handleMouseStop = () => {
    //         setStyle({
    //             display: `none`,
    //         });
    //         children.params.props.style = style;
    //     };
    //     clearTimeout(timeout);
    //     setTimeOut(setTimeOut(handleMouseStop, 1000));
    // };

    // const handleMouseStop = () => {
    //     setStyle({
    //         display: `none`,
    //     });
    //     children.params.props.style = style;
    // };
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body
                // className="bg-[#134E5E] "
                className="bg-gradient-to-r from-[#3A6073] to-[#16222A] font-inter"

                // onMouseOut={handleMouseStop}
                // onMouseMove={handleMouseMove}
                // className={inter.className}
            >
                {children}
            </body>
        </html>
    );
}
