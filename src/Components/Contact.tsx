export const Contact = () => {
    return (
        <section id="contact" className="py-10 md:pt-20 animate-pingh-screen bg-gray-100 dark:bg-gray-950">
            <div className="">
                <div className="p-4 md:p-8">
                    <h1 className="text-gray-800 dark:text-white text-center pb-8 font-semibold text-4xl md:text-5xl lg:text-6xl animate-fadeIn">Contact Me</h1>
                    <form className="animate-scaleUp flex flex-col items-center">
                        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <div className="flex flex-col md:flex-row">
                                <input id="name" type="text" className="my-2 py-2 px-4 rounded-md dark:bg-blue-950  text-gray-600 dark:text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Name" />
                                <input id="email" type="email" className="my-2 py-2 px-4 rounded-md dark:bg-blue-950 text-gray-600 dark:text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Email" />
                            </div>
                            <input id="subject" type="text" placeholder="Subject" className="my-2 py-2 px-4 rounded-md dark:bg-blue-950  text-gray-600 dark:text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600" />
                            <textarea id="message"  placeholder="Say Something" className="h-80 my-2 py-2 px-4 rounded-md dark:bg-blue-950  text-gray-600 dark:text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                        </div>
                        <button className="text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Send Message
                        </button>
                    </form>
                </div>  
            </div>
        </section>
    )
}
