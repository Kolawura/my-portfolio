import { Section } from "./Section";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 px-4 md:px-12 lg:px-24 md:py-32 bg-gray-50 dark:bg-black"
      style={{ animationDelay: '0.2s' }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-50 animate-fadeIn">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <Section  className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" id={'pro1'} animationClass={'animate-slideInRight'}>
          <><h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">Random Quote App</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
            A simple JavaScript random quote app.
          </p>
          <a
            href="https://random-quotes-site.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
          </>
        </Section>
        {/* Project 2 */}
        <Section className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" id={'pro2'} animationClass={'animate-slideInLeft'}>
        <><h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">Task Management App</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
            A task management application with, edit, functionality using Typescript and TailwindCSS.
          </p>
          <a
            href="https://kolawura-todo-list.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
          </>
        </Section>
        {/* Project 3 */}
        <Section className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" id={'pro3'} animationClass={'animate-slideInRight'}>
        <> <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">Product list cart</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
             A product list cart using ReactJS and Tailwind CSS
          </p>
          <a
            href="https://kolawura.github.io/product-cart/" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
          </>
        </Section>
        {/* Project 4 */}
        <Section className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" id={'pro4'} animationClass={'animate-slideInLeft'}>
        <><h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">AuDev Solution</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
            AuDev solution websites that give necessary information about the IT firm
          </p>
          <a
            href="https://au-dev.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
          </>
        </Section>
        {/* Project 5 */}
        <Section className="bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105" id={'pro4'} animationClass={'animate-slideInLeft'}>
        <><h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">Aaerobarchi Foundation</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
          Built a responsive landing page for a non-profit, featuring animated stats, donation prompts, and a mobile-friendly layout using a HTML, Tailwind CSS and JavaScript.
          </p>
          <a
            href="https://www.aerobarchifoundation.org/" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
          </>
        </Section>
      </div>
    </section>
  );
};

