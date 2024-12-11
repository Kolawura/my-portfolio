export const About = () => {
    return (
        <section id="about" className="py-10 px-4 md:px-12 lg:px-24 md:py-32 bg-gray-50 dark:bg-black md:pt-20 sm:pt-16 2xl:pt-16">
            <div className="min-w-full">
            {/* <h1 className="text-gray-800 dark:text-white text-center pb-8 font-semibold text-4xl md:text-5xl lg:text-6xl">About Me</h1> */}
                <div className="flex items-center flex-col gap-8 md:gap-8 justify-between md:flex-row">
                    <div className="animate-slideInRight text-center md:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-200 sm:text-4xl lg:text-5xl">Hey 👋 I
                            am {' '}
                            <br className="block sm:hidden" />Adekola Adediwura
                        </h2>
                        <p className="mt-3 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                            Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-black"></span>
                                <span className="relative">Have a question?</span>
                            </span>
                            <br className="block sm:hidden" /> Ask me on
                            <a href="#" title="" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"> Twitter</a>
                        </p>
                        <div className="flex sm:flex-row flex-col justify-center items-center md:justify-start gap-4 lg:mt-12 mt-4">
                            <button className="md:px-6 px-2 md:py-[0.75rem] py-1 md:text-md text-sm outline outline-2 hover:font-semibold rounded-md cursor-pointer text-gray-800 border-gray-800 hover:border-blue-600 dark:text-gray-50 dark:border-gra5800">Download CV</button>
                            <button className="md:px-6 px-2 md:py-[0.75rem] py-1 md:text-md text-sm rounded-md gradient hover:font-semibold cursor-pointer text-gray-50">Click For Hire Me</button>
                        </div>
                    </div>
                    <div className=" animate-slideInLeft lg:w-4/5 sm:w-3/5 md:w-1/2 md:min-w-[350px]">
                        <img className="rounded-s-full w-fit shadow-[0_0_30px_10px_rgba(0,0,0,0.1)]" src="./images/software-developer.jpg" alt="" />
                        <img className="    w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}
