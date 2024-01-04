'use client';

import { Link } from 'react-scroll/modules';
import LinkPage from 'next/link';
import Experience from './Experience';
import Projects from './Projects';
import { useEffect, useState } from 'react';
import DetailProject from './DetailProject';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chips from './Chips';
import Navbar from './Navbar';
import { InputGroup } from './InputGroup';
import Button from './Button';
import { toast } from 'react-toastify';
import { checkInputFields } from '@/utils/validation';

export default function About() {
    const [selectedFiles, setSelectedFiles] = useState(null);

    const [isDetail, setIsDetail] = useState(false);
    const [sectionContent, setSectionContent] = useState(false);
    const [projects, setProjects] = useState([]);
    const [dataMessage, setDataMessage] = useState({
        fullname: '',
        email: '',
        message: '',
        attachments: null,
    });

    // useEffect(() => {
    //     {
    //         (async () => {
    //             const res = await fetch(
    //                 'https://frhnh.free.beeceptor.com/projects',
    //             );
    //             const data = await res.json();

    //             setProjects(data);
    //         })();
    //     }
    // }, []);

    const handleInputChange = (e) => {
        setDataMessage({ ...dataMessage, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        setSelectedFiles(files);
        setDataMessage({ ...dataMessage, attachments: e.target.files });
    };

    const sendMailHandler = async (e) => {
        e.preventDefault();
        try {
            const requiredFields = ['fullname', 'email', 'message'];
            const missingFields = checkInputFields(requiredFields, dataMessage);
            if (missingFields.length > 0) {
                alert(`Please fill the ${missingFields.join(', ')} field(s)`);
                return;
            }

            const formDataWithFiles = new FormData();

            formDataWithFiles.append('fullname', dataMessage.fullname);
            formDataWithFiles.append('message', dataMessage.message);
            formDataWithFiles.append('email', dataMessage.email);
            const baseURL = process.env.NEXT_PUBLIC_PERSONAL_API;

            await toast.promise(
                fetch(`${baseURL}/contact-me`, {
                    method: 'POST',
                    body: formDataWithFiles,
                    headers: {
                        Authorization: `Basic ${process.env.NEXT_PUBLIC_PERSONAL_API_CREDENTIALS}`,
                    },
                }),
                {
                    pending: 'Currently sending your message...',
                    success: 'Your message has been sent!',
                    error: 'An error occured. Please try again later.',
                },
                {
                    autoClose: 1500,
                    position: 'bottom-right',
                    // autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                },
            );
            setDataMessage({
                fullname: '',
                email: '',
                message: '',
                attachments: null,
            });
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleSection = (section) => {
        setSectionContent(section);
    };

    const handleDetail = () => {
        setIsDetail(true);
    };

    const handleCloseDetail = () => {
        setIsDetail(false);
    };

    return (
        <div className="text-white-gray">
            {isDetail ? (
                <DetailProject isOpen={isDetail} onClose={handleCloseDetail} />
            ) : null}
            {/* NAVBAR SMALL SCREEN */}
            {sectionContent != 'home' || !sectionContent ? (
                <Navbar sectionContent={sectionContent} />
            ) : null}

            {/* <LightEffect /> */}
            {/* <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.5))] fixed z-1 w-full h-full"></div> */}
            <div className="w-full px-4 lg:px-[280px] bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.1))]  lg:sticky lg:inset-0 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-28">
                    <div className="pt-20 px-6 md:px-0 relative md:sticky w-full min-h-screen lg:inset-0 h-screen">
                        <div className="flex md:px-6 lg:px-0 flex-col md:pb-48 min-h-screen md:justify-between">
                            <div>
                                <div className="mb-20">
                                    <div className="mb-4 text-lobster">
                                        <h2 className="font-bold text-3xl md:text-5xl mb-2">
                                            Farhan Hilmi
                                        </h2>
                                        <span className="font-semibold text-base md:text-xl text-teal-500">
                                            Software Engineer
                                        </span>
                                    </div>
                                    <p className="text-sm text-dark-grey md:text-base w-full md:w-8/12">
                                        a tech enthusiast 🚀 crafting sleek and
                                        powerful solutions. Let's build
                                        something extraordinary together!
                                    </p>
                                </div>
                                <div className="invisible lg:visible xl:visible">
                                    <ul className="font-semibold ContainerNavBar flex flex-col gap-4 text-gray-400">
                                        <div className="relative">
                                            <Link
                                                onSetActive={() =>
                                                    handleSection('home')
                                                }
                                                to="home"
                                                spy={true}
                                                smooth={true}
                                                // offset={-45}
                                                duration={500}
                                                // href="#about"
                                                activeClass=""
                                                className={`cursor-pointer `}
                                            ></Link>
                                            <Link
                                                onSetActive={() =>
                                                    handleSection('about')
                                                }
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                offset={-45}
                                                duration={500}
                                                // href="#about"
                                                activeClass="activeNav"
                                                className={`cursor-pointer NavBar`}
                                            >
                                                ABOUT
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Link
                                                onSetActive={() =>
                                                    handleSection('experience')
                                                }
                                                to="experience"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                                // href="#about"
                                                activeClass="activeNav"
                                                className={` cursor-pointer NavBar`}
                                            >
                                                EXPERIENCE
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Link
                                                onSetActive={() =>
                                                    handleSection('projects')
                                                }
                                                to="projects"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                                // href="#about"
                                                activeClass="activeNav"
                                                className={` cursor-pointer NavBar`}
                                            >
                                                PROJECTS
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Link
                                                onSetActive={() =>
                                                    handleSection('contacts')
                                                }
                                                to="contacts"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                                // href="#about"
                                                activeClass="activeNav"
                                                className={` cursor-pointer NavBar`}
                                            >
                                                CONTACT ME
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-lobster">
                                <span className="hover:text-gray-400">
                                    <a
                                        href="https://www.github.com/farhanhilmi"
                                        target="_blank"
                                    >
                                        Github
                                    </a>
                                </span>
                                <span className="hover:text-gray-400">
                                    <a
                                        href="https://www.linkedin.com/in/farhan-hilmi/"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </a>
                                </span>

                                <span className="hover:text-gray-400">
                                    <a
                                        href="https://drive.google.com/file/d/1YOM9W0bkVPVEeaz2EvzwI5_kn4xPpB6p/view?usp=drive_link"
                                        target="_blank"
                                    >
                                        Download Resume/CV
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="md:py-20 z-20">
                        <div className="px-6" id="about">
                            <p className="text-dark-grey font-medium text-lg">
                                Hello there! 👋 I'm{' '}
                                <span className="text-teal-500">
                                    Farhan Hilmi
                                </span>
                                , a passionate Software Engineer 🚀 with a knack
                                for crafting robust and efficient solutions. My
                                journey in the realm of software development has
                                been shaped by diverse internship experiences
                                and a solid educational foundation.
                                <br />
                                <br />
                                In my recent role as a{' '}
                                <span className="text-teal-500">
                                    Backend Engineer Trainee
                                </span>{' '}
                                at
                                <span className="text-teal-500">
                                    {' '}
                                    PT Shopee International Indonesia - Sea Labs
                                </span>
                                , I completed a rigorous 4-month digital
                                development program. Immersed in a diverse tech
                                stack including Golang, PostgreSQL, Docker, and
                                more, I contributed to a final group project
                                addressing specific study cases. Earlier at
                                <span className="text-teal-500">
                                    {' '}
                                    PT Telekomunikasi Indonesia Tbk
                                </span>
                                , I optimized testing procedures, developed
                                backend services using Django Python, and
                                significantly enhanced system functionality.
                                Notably, at{' '}
                                <span className="text-teal-500">
                                    PT Bank Tabungan Pensiunan Nasional Tbk
                                    (BTPN JENIUS)
                                </span>
                                , I crafted clean and efficient backend
                                microservices using Node.js, MongoDB, and gRPC,
                                creating comprehensive API documentation using
                                Swagger. My journey also includes resolving bugs
                                and optimizing backend performance at
                                <span className="text-teal-500">
                                    PT. Intermedia Multibahasa Indonesia
                                    (LingoTalk)
                                </span>{' '}
                                using TypeScript, Node.js, and Express
                                Framework. 💡
                                <br />
                                <br />I hold a Bachelor's degree in Computer
                                Science from{' '}
                                <span className="text-teal-500">
                                    Telkom University
                                </span>
                                , graduating Cum Laude. During my academic
                                journey, I specialized in Information Systems,
                                and my thesis focused on applying Test-Driven
                                Development in Backend Development for Sharia
                                Peer-to-Peer (P2P) Lending Applications. This
                                involved utilizing NodeJS, MongoDB, and Google
                                Cloud App Engine for deploying the backend
                                application. My coursework covered a spectrum of
                                topics, from Data Structure and Algorithm
                                (Python), Object Oriented Programming (Java) to
                                Web Application Development using PHP Laravel.
                                🎓
                                <br />
                                <br />
                                My skill set spans a wide array of technologies
                                including{' '}
                                <span className="text-teal-500">
                                    SQL, MongoDB, PHP, Go (Golang), gRPC, Gin
                                    Framework, JavaScript, TypeScript, Python,
                                    Django, NodeJs, ExpressJs, and PHP Laravel{' '}
                                </span>
                                . These skills, cultivated through hands-on
                                experiences and coursework, reflect my ability
                                to adapt to diverse challenges in the tech
                                landscape.
                            </p>
                        </div>

                        <div className="mt-10" id="experience">
                            <Experience
                                position={'Backend Engineer Trainee'}
                                company={
                                    'PT Shopee International Indonesia - Sea Labs'
                                }
                                description={
                                    "<ul className='list-disc pl-4 mb-4'> <li> Participated in Shopee's digital development program, completing a comprehensive labs boot camp in batch 1. Engaged in a rigorous 4-month full-time training with a focus on back-end development. </li> <li> Acquired foundational knowledge in programming and adopted industry best practices in software development. Explored concepts such as object-oriented programming, design patterns, clean architecture, transactional databases, and REST API implementation during the program. </li> <li> Contributed to a final group project assigned by Shopee, addressing specific study cases and applying the skills acquired throughout the training. </li> <li> Utilized a diverse Tech Stack that includes Ubuntu Linux, Golang, Git, PostgreSQL, GORM, Gin Framework, Docker, and gRPC, showcasing proficiency in a range of tools and technologies essential for real-world industry applications. </li> </ul>"
                                }
                                duration={'August 2023 -- December 2023'}
                                jobType={'Trainee'}
                                Stack={[
                                    'Go',
                                    'Gin',
                                    'PostgreSQL',
                                    'gRPC',
                                    'Clean Architectur',
                                    'Docker',
                                    'REST API',
                                ]}
                            />
                            <Experience
                                position={'Backend Engineer Intern'}
                                company={'PT Telekomunikasi Indonesia Tbk '}
                                description={
                                    "<ul className='list-disc pl-4 mb-4'> <li> Optimised unit testing procedures by introducing a mock database, leading to enhanced testing efficiency and a substantial reduction in test execution time. </li><li> Developed backend services using Django Python and PostgreSQL, delivering multiple services that contributed significantly to enhancing the overall functionality and performance of the system. </li> </ul>"
                                }
                                duration={'August 2022 -- December 2022'}
                                jobType={'Internship'}
                                Stack={[
                                    'Python',
                                    'Django',
                                    'PostgreSQL',
                                    'REST API',
                                    'Unit Testing',
                                ]}
                            />
                            <Experience
                                position={'Backend Engineer Intern'}
                                company={
                                    'PT Bank Tabungan Pensiunan Nasional Tbk (BTPN JENIUS)'
                                }
                                description={
                                    "<ul className='list-disc pl-4 mb-4'> <li> Produced clean and efficient code based on project requirements, ensuring high-quality software deliverables. </li><li> Developed backend microservices using Node.js, MongoDB, and gRPC as a part of the learning process, resulting in a solid understanding of these technologies. </li><li> Generated comprehensive API documentation using Swagger for a given microservices project, facilitating ease of understanding and usage for developers and stakeholders </li> </ul>"
                                }
                                duration={'February 2022 -- August 2022'}
                                jobType={'Internship'}
                                Stack={[
                                    'JavaScript',
                                    'NodeJs',
                                    'ExpressJs',
                                    'MongoDB',
                                    'KafkaJs',
                                    'Swagger',
                                ]}
                            />
                            <Experience
                                position={'Backend Engineer Intern'}
                                company={
                                    'PT. Intermedia Multibahasa Indonesia (LingoTalk)'
                                }
                                description={
                                    "<ul className='list-disc pl-4 mb-4'> <li> Resolved bugs and optimised backend performance for seamless system operation and implemented new features within given timelines for application enhancement. Collaborated with Front-End, Mobile, and Project Manager to achieve project goals. </li><li> Automated data population in the database, improving data management efficiency. </li><li> Proactively addressed QA-reported bugs, ensuring a high-quality, error-free application </li> </ul>"
                                }
                                duration={'February 2022 -- August 2022'}
                                jobType={'Internship'}
                                Stack={[
                                    'TypeScript',
                                    'NodeJs',
                                    'ExpressJs',
                                    'NoSQL',
                                ]}
                            />

                            <a
                                href={
                                    'https://drive.google.com/file/d/1YOM9W0bkVPVEeaz2EvzwI5_kn4xPpB6p/view?usp=drive_link'
                                }
                                className="font-semibold px-6"
                                target="__blank"
                            >
                                <span className="hover:text-teal-300 hover:bg-teal-400/20 hover:rounded-full hover:px-3 hover:py-2 hover:pe-0">
                                    <span className="mr-2 text-teal-300">
                                        <ArrowForwardIosIcon
                                            sx={{
                                                color: 'rgb(94, 234, 212)',
                                                // ':hover': {
                                                //     color: 'rgba(20, 184, 166, 0.5)',
                                                // },
                                            }}
                                        />
                                        _
                                    </span>{' '}
                                    <Chips
                                        fontSize="font-medium"
                                        text={'See full resume'}
                                        // onHover={true}
                                    />
                                </span>
                            </a>
                        </div>
                        <div className="mt-28" id="projects">
                            <div className="text-center w-full mb-8 text-3xl font-bold">
                                -------- [Projects] --------
                            </div>
                            <Projects
                                onClick={handleDetail}
                                position={'Backend Developer'}
                                company={'Telkom Indonesia'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex dolores laborum impedit, illo a eligendi deleniti praesentium sequi corporis provident neque officia sapiente! Obcaecati perspiciatis saepe fuga eum sit. Perferendis ad nostrum earum doloribus sunt iure, quod corporis, tempore alias quas sed vel nulla! Consectetur eligendi reiciendis rem tempora.'
                                }
                                duration={'August 2022 -- December 2022'}
                                jobType={'Internship'}
                                Stack={['Django', 'PostgresQL', 'Python']}
                            />
                            <Projects
                                onClick={handleDetail}
                                position={'Backend Developer'}
                                company={'Telkom Indonesia'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex dolores laborum impedit, illo a eligendi deleniti praesentium sequi corporis provident neque officia sapiente! Obcaecati perspiciatis saepe fuga eum sit. Perferendis ad nostrum earum doloribus sunt iure, quod corporis, tempore alias quas sed vel nulla! Consectetur eligendi reiciendis rem tempora.'
                                }
                                duration={'August 2022 -- December 2022'}
                                jobType={'Internship'}
                                Stack={['Django', 'PostgresQL', 'Python']}
                            />
                            <Projects
                                onClick={handleDetail}
                                position={'Backend Developer'}
                                company={'Telkom Indonesia'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex dolores laborum impedit, illo a eligendi deleniti praesentium sequi corporis provident neque officia sapiente! Obcaecati perspiciatis saepe fuga eum sit. Perferendis ad nostrum earum doloribus sunt iure, quod corporis, tempore alias quas sed vel nulla! Consectetur eligendi reiciendis rem tempora.'
                                }
                                duration={'August 2022 -- December 2022'}
                                jobType={'Internship'}
                                Stack={['Django', 'PostgresQL', 'Python']}
                            />
                            <LinkPage href={''} className="font-semibold px-6">
                                <span className="hover:text-teal-300 hover:bg-teal-400/20 hover:rounded-full hover:px-3 hover:py-2 hover:pe-0">
                                    <span className="mr-2 text-teal-300">
                                        <ArrowForwardIosIcon
                                            sx={{
                                                color: 'rgb(94, 234, 212)',
                                                // ':hover': {
                                                //     color: 'rgba(20, 184, 166, 0.5)',
                                                // },
                                            }}
                                        />
                                        _
                                    </span>{' '}
                                    <Chips
                                        fontSize="font-medium"
                                        text={'See all projects'}
                                        // onHover={true}
                                    />
                                </span>
                            </LinkPage>
                        </div>
                        <div className="px-6 pt-56" id="contacts">
                            <div className="text-center w-full mb-12 text-3xl font-bold">
                                Let's talk
                            </div>
                            {/* <p className="text-dark-grey font-medium text-lg">

                            </p> */}
                            <div className="flex flex-col mb-6 rounded-lg p-10 transition-transform duration-300 shadow-md hover:backdrop-blur-xl hover:backdrop-filter hover:bg-opacity-20 bg-opacity-10 hover:translate-y-[-20px] bg-blue-ocean text-dark-grey text-lobster">
                                {/* Share your thoughts, and let's connect! */}
                                {/* I'm eagerly waiting to hear from you. Drop me a message, and let's start a conversation. */}
                                <p className="text-xl font-bold mb-4">
                                    Get in Touch!
                                </p>
                                <div className="flex flex-col space-y-2">
                                    <span>
                                        📧 Email: farhanhilmi32@gmail.com
                                    </span>
                                    <span>📱 WhatsApp: +6289668872106</span>
                                </div>
                                <p className="text-gray-400 mb-8 mt-8">
                                    Whether you have questions, ideas, or just
                                    want to say hello, I'm here for you. Drop me
                                    a message, and let's start a conversation.
                                    Your thoughts matter!
                                </p>

                                <form onSubmit={sendMailHandler}>
                                    <InputGroup
                                        label="Full name"
                                        placeholder="type your full name here..."
                                        isRequired={true}
                                        name="fullname"
                                        value={dataMessage.fullname}
                                        onChange={handleInputChange}
                                    />
                                    <InputGroup
                                        label="E-mail address"
                                        placeholder="type your email address here..."
                                        isRequired={true}
                                        name="email"
                                        value={dataMessage.email}
                                        onChange={handleInputChange}
                                    />
                                    <InputGroup
                                        label="Message"
                                        placeholder="type your message here..."
                                        isRequired={true}
                                        isTextArea={true}
                                        name="message"
                                        value={dataMessage.message}
                                        onChange={handleInputChange}
                                    />
                                    {/* <InputGroup
                                        label="Attachments"
                                        isFile={true}
                                        name="attachments"
                                        onChange={handleFileChange}
                                        selectedFiles={selectedFiles}
                                    /> */}
                                    <Button
                                        text={'Send message'}
                                        onHover={true}
                                        fontSize="text-lg"
                                        margin="mt-6"
                                        isOnsubmit={true}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
