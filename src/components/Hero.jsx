import BGHero from '../../public/assets/web/bg_hero.png';

export default function Hero() {
    return (
        <>
            <div id="home">
                <div
                    className="hero__background inset-0 "
                    style={{
                        backgroundImage: `url(${BGHero.src})`,
                        // width: '100%',
                        height: '100vh',
                        // backgroundColor: 'red',
                    }}
                >
                    {/* bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 */}
                    <div className="bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.5))] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute w-full h-full"></div>
                    <div className="hero__content h-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                        <div className="text-center p-6">
                            <h1 className="hero__title text-5xl md:text-7xl lg:text-9xl font-extrabold">
                                FARHAN HILMI
                            </h1>
                            <span className="hero__highlight text-center text-lg md:text-2xl lg:text-4xl font-medium">
                                SOFTWARE ENGINEER, FRONT END & BACK END
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
