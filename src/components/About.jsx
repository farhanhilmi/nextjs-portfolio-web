'use client';

import { Link } from 'react-scroll/modules';
import LinkPage from 'next/link';
import Experience from './Experience';
import Projects from './Projects';
import LightEffect from './LightEffect';
import { useEffect, useState } from 'react';
import DetailProject from './DetailProject';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chips from './Chips';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import { InputGroup } from './InputGroup';
import Button from './Button';

export default function About() {
    const [isDetail, setIsDetail] = useState(false);
    const [sectionContent, setSectionContent] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        {
            (async () => {
                const res = await fetch(
                    'https://frhnh.free.beeceptor.com/projects',
                );
                const data = await res.json();

                setProjects(data);
            })();
        }
    }, []);
    console.log('projects', projects);

    const router = useRouter();

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
                                            Karim Benzema
                                        </h2>
                                        <span className="font-semibold text-base md:text-xl">
                                            Software Engineer
                                        </span>
                                    </div>
                                    <p className="text-sm text-dark-grey md:text-base w-full md:w-8/12">
                                        I build accessible, inclusive products
                                        and digital experiences for the web.
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
                                    <a href="" target="_blank">
                                        Github
                                    </a>
                                </span>
                                <span className="hover:text-gray-400">
                                    <a href="" target="_blank">
                                        Linkedin
                                    </a>
                                </span>
                                <span className="hover:text-gray-400">
                                    <a href="http://" target="_blank">
                                        Medium
                                    </a>
                                </span>
                                <span className="hover:text-gray-400">
                                    <a href="http://" target="_blank">
                                        Download Resume/CV
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="md:py-20 z-20">
                        <div className="px-6" id="about">
                            <p className="text-dark-grey font-medium text-lg">
                                Back in 2012, I decided to try my hand at
                                creating custom Tumblr themes and tumbled head
                                first into the rabbit hole of coding and web
                                development. Fast-forward to today, and I’ve had
                                the privilege of building software for an
                                advertising agency, a start-up, a student-led
                                design studio, and a huge corporation.
                                <br />
                                <br />
                                My main focus these days is building products
                                and leading projects for our clients at
                                Upstatement. In my free time I've also released
                                an online video course that covers everything
                                you need to know to build a web app with the
                                Spotify API.
                                <br />
                                <br />
                                When I’m not at the computer, I’m usually rock
                                climbing, hanging out with my wife and two cats,
                                or running around Hyrule searching for Korok
                                seeds K o r o k s e e d s.
                            </p>
                        </div>

                        <div className="mt-10" id="experience">
                            <Experience
                                position={'Backend Developer'}
                                company={'Telkom Indonesia'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex dolores laborum impedit, illo a eligendi deleniti praesentium sequi corporis provident neque officia sapiente! Obcaecati perspiciatis saepe fuga eum sit. Perferendis ad nostrum earum doloribus sunt iure, quod corporis, tempore alias quas sed vel nulla! Consectetur eligendi reiciendis rem tempora.'
                                }
                                duration={'August 2022 -- December 2022'}
                                jobType={'Internship'}
                                Stack={['Django', 'PostgresQL', 'Python']}
                            />
                            <Experience
                                position={'Backend Developer'}
                                company={'Telkom Indonesia'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex dolores laborum impedit, illo a eligendi deleniti praesentium sequi corporis provident neque officia sapiente! Obcaecati perspiciatis saepe fuga eum sit. Perferendis ad nostrum earum doloribus sunt iure, quod corporis, tempore alias quas sed vel nulla! Consectetur eligendi reiciendis rem tempora.'
                                }
                                duration={'August 2022 -- December 2022'}
                                jobType={'Internship'}
                                Stack={['Django', 'PostgresQL', 'Python']}
                            />
                            <Experience
                                position={'Backend Developer'}
                                company={'Telkom Indonesia'}
                                description={
                                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex dolores laborum impedit, illo a eligendi deleniti praesentium sequi corporis provident neque officia sapiente! Obcaecati perspiciatis saepe fuga eum sit. Perferendis ad nostrum earum doloribus sunt iure, quod corporis, tempore alias quas sed vel nulla! Consectetur eligendi reiciendis rem tempora.'
                                }
                                duration={'August 2022 -- December 2022'}
                                jobType={'Internship'}
                                Stack={['Django', 'PostgresQL', 'Python']}
                            />
                            <Experience
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
                                        text={'See full resume'}
                                        // onHover={true}
                                    />
                                </span>
                            </LinkPage>
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
                                <span>Email: farhanhilmi32@gmail.com</span>

                                <InputGroup
                                    label="Full name"
                                    placeholder="type your full name here..."
                                    isRequired={true}
                                />
                                <InputGroup
                                    label="E-mail address"
                                    placeholder="type your email address here..."
                                    isRequired={true}
                                />
                                <InputGroup
                                    label="Message"
                                    placeholder="type your message here..."
                                    isRequired={true}
                                    isTextArea={true}
                                />
                                <InputGroup label="Attachments" isFile={true} />
                                <Button
                                    text={'Send message'}
                                    onHover={true}
                                    fontSize="text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
