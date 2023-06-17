import { Link } from 'react-scroll';
import Logo from '../../public/assets/web/logo.png';

export default function Navbar({ sectionContent }) {
    return (
        <nav className="fixed w-full top-0 z-[99999] text-dark-grey bg-blue-ocean shadow backdrop-filter backdrop-blur-lg bg-opacity-20 ">
            <div className="max-w-5xl mx-auto px-10">
                <div className="flex items-center justify-between h-16">
                    <span
                        className="text-2xl text-lobster z-[9999999999] font-semibold"
                        // style={{
                        //     backgroundImage: `url(${Logo.src})`,
                        //     width: '100px',
                        //     height: '50px',
                        //     // backgroundColor: 'red',
                        // }}
                    >
                        <Link
                            // onSetActive={() => handleSection('home')}
                            to="home"
                            href="/"
                            spy={true}
                            smooth={true}
                            // offset={-45}
                            duration={500}
                            // href="#about"
                            activeClass=""
                            className={`cursor-pointer `}
                        >
                            Home
                        </Link>

                        {/* <img src={Logo.src} alt="" width={50} srcset="" /> */}
                    </span>
                    <div className="flex space-x-4 text-base font-semibold">
                        {sectionContent
                            ? sectionContent.toUpperCase()
                            : sectionContent}
                    </div>
                </div>
            </div>
        </nav>
    );
}
