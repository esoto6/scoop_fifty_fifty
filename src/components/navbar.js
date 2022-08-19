import { useState } from "react";
import { ReactComponent as ReactLogo } from "../assets/img/ice-cream-solid.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full">
      <div className="w-auto justify-between px-4 mx-auto lg:max-w-8xl md:items-left md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div id="logo" className="w-20 ">
              <Link to="/">
                <ReactLogo className="fill-teal-500 hover:fill-cyan-700" />
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-white-700 rounded-md outline-none focus:border-gray-400 focus:border flex-justify right"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 text-2xl">
              <li className="text-white-700 hover:text-cyan-700">
                {/* <a href="javascript:void(0)">Home</a> */}
                <Link to="/">Home</Link>
              </li>
              <li className="text-white-700 hover:text-cyan-700">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="text-white-700 hover:text-cyan-700">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-white-700 hover:text-cyan-700">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}