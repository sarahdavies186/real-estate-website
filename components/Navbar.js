import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="px-4 flex justify-end pt-4 w-full container">
        <div className="flex-grow">Mulih</div>
        <div
          className={`duration-500 bg-white lg:static absolute md:min-h-fit ${
            isMenuOpen ? "top-0" : "-top-full"
          } md:w-auto w-full flex flex-col px-5`}
        >
          <div className="flex items-center h-full md:h-auto">
            <ul className="flex flex-col items-start md:items-stretch md:flex-row gap-8">
              <li>
                <a
                  href="/#about"
                  className=""
                >
                 Home
                </a>
              </li>
              <li>
                <a
                  href="/#team"
                  className=""
                  onClick={() => navigate("/#team")}
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  className=""
                  onClick={() => navigate("/#features")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  className=""
                  onClick={() => navigate("/#features")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  className=""
                  onClick={() => navigate("/#features")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            onClick={() => onToggleMenu()}
            className={`hamburger-menu cursor-pointer lg:hidden ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
}
