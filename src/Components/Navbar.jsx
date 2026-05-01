import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-16 py-6 text-white border-b border-b-gray-900 bg-black/50 backdrop-blur-md md:justify-evenly">
      <a
        href="#"
        className="text-3xl font-semibold text-transparent transition-all duration-300 bg-stone-500 bg-gradient-to-r from-zinc-400 to bg-clip-text opacity-80 hover:opacity-100"
      >
        DwiLady
      </a>

      {/* Desktop Menu */}
      <ul className="hidden gap-10 md:flex">
        {["home", "education", "experiences", "projects", "contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item}`}
              className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100 capitalize"
            >
              <li>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
            </a>
          )
        )}
      </ul>

      {/* Desktop Social Icons */}
      <ul className="hidden gap-5 md:flex">
        <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity-100">
          <a target="_blank" href="https://www.youtube.com/@dwilady3957" rel="noopener noreferrer">
            <BsYoutube />
          </a>
        </li>
        <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-blue-500 hover:opacity-100">
          <a target="_blank" href="https://www.linkedin.com/in/dwiladypandiangan/" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </li>
        <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-pink-500 hover:opacity-100">
          <a target="_blank" href="https://www.instagram.com/dwilady_lyy/?next=%2F" rel="noopener noreferrer">
            <BsInstagram />
          </a>
        </li>
        <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-gray-500 hover:opacity-100">
          <a target="_blank" href="https://github.com/dreamyyily" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      {isOpen ? (
        <BiX
          className="block text-4xl text-gray-400 cursor-pointer md:hidden"
          onClick={menuOpen}
        />
      ) : (
        <BiMenu
          className="block text-4xl text-gray-400 cursor-pointer md:hidden"
          onClick={menuOpen}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[85px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#education", label: "Education" },
              { href: "#experiences", label: "Experiences" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
              >
                <li>{item.label}</li>
              </a>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="text-xl transition-all duration-500 cursor-pointer opacity-70 hover:text-red-500 hover:opacity-100">
              <a target="_blank" href="https://www.youtube.com/@dwilady3957" rel="noopener noreferrer">
                <BsYoutube />
              </a>
            </li>
            <li className="text-xl transition-all duration-500 cursor-pointer opacity-70 hover:text-blue-500 hover:opacity-100">
              <a target="_blank" href="https://www.linkedin.com/in/dwiladypandiangan/" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </li>
            <li className="text-xl transition-all duration-500 cursor-pointer opacity-70 hover:text-pink-500 hover:opacity-100">
              <a target="_blank" href="https://www.instagram.com/dwilady_lyy/?next=%2F" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </li>
            <li className="text-xl transition-all duration-500 cursor-pointer opacity-70 hover:text-gray-500 hover:opacity-100">
              <a target="_blank" href="https://github.com/dreamyyily" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;