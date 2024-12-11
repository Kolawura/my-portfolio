
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
        <div className="animate-slideInRight bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">Responsive Blog Platform</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
            A fully responsive blog platform built with Next.js and Tailwind CSS.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        {/* Project 2 */}
        <div className="animate-slideInLeft bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">Task Management App</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
            A React-based task management application with drag-and-drop functionality.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        {/* Project 3 */}
        <div className="animate-slideInRight bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">E-commerce Website</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
            A full-stack e-commerce platform built with Node.js, Express, and MongoDB.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        {/* Project 4 */}
        <div className="animate-slideInLeft bg-white dark:bg-blue-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-50">Weather Dashboard</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-50">
            A weather dashboard using OpenWeatherMap API and Chart.js for data visualization.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>
    </section>
  );
};

