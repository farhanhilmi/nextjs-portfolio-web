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
// import experienceData from '@/data/experience.js';
// import projectData from '@/data/projects.js';
import Blog from './LinkItem';
import LinkItem from './LinkItem';
import articles from '@/data/articles';
import { readAllData } from '@/services/firebase';

export default function About() {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [selectedProject, setSelectedProject] = useState({});
    const [projectData, setProjectData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);

    const [isDetail, setIsDetail] = useState(false);
    const [sectionContent, setSectionContent] = useState(false);
    const [dataMessage, setDataMessage] = useState({
        fullname: '',
        email: '',
        message: '',
        attachments: null,
    });

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

    const handleDetail = (project) => {
        setIsDetail(true);
        setSelectedProject(project);
    };

    const handleCloseDetail = () => {
        setIsDetail(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projects, experiences] = await Promise.all([
                    await readAllData('projects'),
                    await readAllData('experiences'),
                ]);
                setProjectData(projects);
                setExperienceData(experiences);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="text-white-gray">
            {isDetail ? (
                <DetailProject
                    project={selectedProject}
                    isOpen={isDetail}
                    onClose={handleCloseDetail}
                />
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
                                                    handleSection('blog')
                                                }
                                                to="blog"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                                // href="#about"
                                                activeClass="activeNav"
                                                className={` cursor-pointer NavBar`}
                                            >
                                                BLOG / ARTICLE
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
                            <p className="text-dark-grey font-medium text-sm md:text-lg lg:text-lg xl:text-lg">
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
                            {experienceData.map((experience, index) => (
                                <Experience
                                    key={index}
                                    position={experience.position}
                                    company={experience.company}
                                    description={experience.description}
                                    duration={experience.date}
                                    jobType={experience.type}
                                    Stack={experience.tags}
                                />
                            ))}

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
                            {projectData.map((project, index) => (
                                <Projects
                                    key={index}
                                    onClick={() => handleDetail(project)}
                                    title={project.title}
                                    type={project.type}
                                    description={project.description}
                                    Stack={project.tags}
                                    images={project.images}
                                />
                            ))}

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
                        <div className="mt-28" id="blog">
                            <div className="text-center w-full mb-8 text-3xl font-bold">
                                -------- [Blog / Article] --------
                            </div>
                            {articles.length > 0 ? (
                                <>
                                    <ul className="list-disc ml-5 space-y-2 mb-12">
                                        {articles.map((article, index) => (
                                            <li key={index}>
                                                <LinkItem
                                                    index={index}
                                                    title={article.title}
                                                    link={article.link}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <LinkPage
                                        href={''}
                                        className="font-semibold px-6"
                                    >
                                        <span className="hover:text-teal-300 hover:bg-teal-400/20 hover:rounded-full hover:px-3 hover:py-2 hover:pe-0">
                                            <span className="mr-2 text-teal-300">
                                                <ArrowForwardIosIcon
                                                    sx={{
                                                        color: 'rgb(94, 234, 212)',
                                                    }}
                                                />
                                                _
                                            </span>{' '}
                                            <Chips
                                                fontSize="font-medium"
                                                text={'See all articles'}
                                                // onHover={true}
                                            />
                                        </span>
                                    </LinkPage>
                                </>
                            ) : (
                                <p className="text-dark-grey text-center">
                                    😔 There are no posts available right now.
                                    Please check back later.
                                </p>
                            )}
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
