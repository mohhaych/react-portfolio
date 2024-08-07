import logo from "../assets/mohamedHusseinLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/mohamed-hussein-8156a3169/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/mohhaych" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-125"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
