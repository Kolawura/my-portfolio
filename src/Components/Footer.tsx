// import { faXTwitter } from "@fortawesome/free-solid-svg-icons";


export const Footer = () => {
  // Handle anchor click for smooth scrolling
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')!;
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <footer className="bg-gray-50 dark:bg-blue-950">
      <div className="flex flex-col p-12 sm:p-16 justify-center gap-6 sm:gap-6 animate-fadeIn">
        <nav className="flex justify-center flex-wrap gap-[0.7rem] sm:gap-6">
          <a className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300" href="#home" onClick={handleAnchorClick}>Home</a>
          <a className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300" href="#about" onClick={handleAnchorClick}>About</a>
          <a className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300" href="#projects" onClick={handleAnchorClick}>Projects</a>
          <a className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300" href="#skills" onClick={handleAnchorClick}>Skills</a>
          <a className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300" href="#contact" onClick={handleAnchorClick}>Contact</a>
        </nav>
        <div className="flex md:justify-start justify-center space-x-5">
          <a href="https://www.linkedin.com/in/adekola-adediwura-17b070176" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a href="https://github.com/Kolawura" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/github.png" />
          </a>
          <a href="https://x.com/kolawura" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitterx.png" />
          </a>
        </div>
        <p className="text-center text-gray-400 dark:text-gray-300 font-medium">&copy; {new Date().getFullYear()} Company Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
