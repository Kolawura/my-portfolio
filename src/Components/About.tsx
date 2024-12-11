export const About = () => {
    return (
        <section id="about" className="py-10 px-4 md:px-12 lg:px-24 md:py-32 bg-gray-50 dark:bg-black md:pt-20 sm:pt-16 2xl:pt-16">
            <div className="min-w-full">
                {/* <h1 className="text-gray-800 dark:text-white text-center pb-8 font-semibold text-4xl md:text-5xl lg:text-6xl">About Me</h1> */}
                <div className="flex items-center flex-col gap-8 md:gap-8 justify-between lg:flex-row">
                    <div className="animate-slideInRight text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-200 sm:text-4xl lg:text-5xl">Hey 👋 I
                            am {' '}
                            <br className="block sm:hidden" />Adekola Adediwura
                        </h2>
                        <p className="mt-3 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                            Hello! I’m Adekola Adediwura, a passionate web developer and chemistry graduate with a strong drive to create impactful tech solutions. I specialize in building dynamic and responsive websites using HTML, CSS, JavaScript, and frameworks like React.js, Next.js, and Tailwind CSS.

                            I’m currently exploring Node.js to enhance my backend development capabilities and expanding my expertise into Flutter, a powerful framework for building beautiful, cross-platform applications. My projects showcase my ability to blend functionality with aesthetics, ensuring a seamless user experience.

                            Beyond coding, I’m committed to learning, problem-solving, and helping others through technology. Whether I’m working on a collaborative project or designing tools to teach programming concepts, my focus is always on innovation and quality.
                        </p>
                       
                        <div className="flex flex-row justify-center items-center lg:justify-start gap-4 lg:mt-12 mt-4">
                            <button className="md:px-6 px-2 md:py-[0.75rem] py-1 md:text-md text-sm outline outline-2 hover:font-semibold rounded-md cursor-pointer text-gray-800 border-gray-800 hover:border-blue-600 dark:text-gray-50 dark:border-gra5800">Download CV</button>
                            <button className="md:px-6 px-2 md:py-[0.75rem] py-1 md:text-md text-sm rounded-md gradient hover:font-semibold cursor-pointer text-gray-50">Click For Hire Me</button>
                        </div>
                    </div>
                    <div className=" animate-slideInLeft lg:w-4/5 sm:w-3/5 md:w-1/2 md:min-w-[450px]">
                        <img className="rounded-s-full w-fit shadow-[0_0_30px_10px_rgba(0,0,0,0.1)]" src="./images/software-developer.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}
