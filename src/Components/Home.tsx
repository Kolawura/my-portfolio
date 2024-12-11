export const Home = () => {
    return (
        <section id="home" className="bg-[url('./images/software-developer.jpg')] bg-cover pt-24 pb-10 px-4 md:px-24 md:py-32">
            <div>
                <div className="w-full mx-auto h-full flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="animate-fadeIn h-full xl:w-[50%] md:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-2 justify-center md:text-left text-center">
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">Hi there, I am</h1>
                        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold bg-text">Adekola Adediwura!</h1>
                        <p className="lg:text-2xl sm:text-lg text-base lg:my-6 my-2">I am an Experienced front-end developer with 2+ years of
                            expertise in HTML, CSS, Javascript, Typescript, ReactJS, NextJS and some Flutter experience.</p>
                        <div className="flex md:justify-start justify-center space-x-5">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                            </a>
                            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                            </a>
                        </div>
                        
                    </div>

                    <div className="relative lg:w-4/5 sm:w-3/5 md:w-1/2 md:max-w-[550px] z-0">
                        {/* <img className="rounded-lg w-fit shadow-[0_0_30px_10px_rgba(0,0,0,0.8)]" src='./images/software-developer.jpg' alt="" /> */}
                        <div className="absolute inset-0 bg-gradient-to-center from-black via-transparent to-black"
                            aria-hidden="true"
                        ></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
