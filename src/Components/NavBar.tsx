import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="backdrop-blur-lg bg-blue-600 dark:bg-blue-950 shadow-md fixed w-full transition-colors duration-300 px-4 md:px-12 lg:px-24 z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-50 ">
            Adekola
          </a>
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300"
              onClick={handleAnchorClick}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300"
              onClick={handleAnchorClick}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300"
              onClick={handleAnchorClick}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300"
              onClick={handleAnchorClick}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-50 dark:hover:text-blue-500 hover:underline hover:font-semibold transition-colors duration-300"
              onClick={handleAnchorClick}
            >
              Contact
            </a>
          </div>
          <div>
            <button
              id="darkModeToggle"
              className={`${darkMode ? 'text-yellow-400 shadow-yellow-100':'text-red-500 shadow-red-100'} p-2 rounded-full text-2xl hover:font-semibold transition-colors duration-300 mr-4`}
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
            >
              {darkMode ? (<FontAwesomeIcon icon={faSun} />) : (<FontAwesomeIcon icon={faMoon} />)}
            </button></div>
          <div className="flex items-center md:hidden">
            <button
              id="mobileMenuToggle"
              className="focus:outline-none text-gray-50"
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-blue-600 dark:bg-blue-950 transition-colors duration-300 py-4`}
      >
        <a
          href="#home"
          className="block py-2 px-4 text-sm text-gray-50 hover:underline hover:font-semibold dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={handleAnchorClick}
        >
          Home
        </a>
        <a
          href="#about"
          className="block py-2 px-4 text-sm text-gray-50 hover:underline hover:font-semibold dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={handleAnchorClick}
        >
          About
        </a>
        <a
          href="#skills"
          className="block py-2 px-4 text-sm text-gray-50 hover:underline hover:font-semibold dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={handleAnchorClick}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block py-2 px-4 text-sm text-gray-50 hover:underline hover:font-semibold dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={handleAnchorClick}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 text-sm text-gray-50 hover:underline hover:font-semibold dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={handleAnchorClick}
        >
          Contact
        </a>
      </div>
    </header>
  );
};
