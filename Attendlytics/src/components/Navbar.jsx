import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#050505]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-6">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl text-gray-100">
            <span className="font-bold">A</span>
            <span className="text-3xl italic text-gray-100 font-bold">L</span>
          </span>
        </a>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:underline"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <p className="text-white text-base">Menu</p>
          </button>
        </div>

        <div
          className={`items-center md:pl-[1.5rem] justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen
              ? "fixed inset-0 z-40 bg-[#050505] top-[4rem] md:top-16 md:relative md:bg-transparent"
              : "hidden"
          }`}
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-6 md:p-0 mt-0 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
