import React, { useState, useEffect } from "react";
import Logo from "../../assets/logoGaiax.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 font-bold text-3xl">
          <img src={Logo} alt="Logo Gaiax" className="w-32 " />
          <span
            className={`hidden sm:block font-bold transition-colors duration-300 ${
              scrolled ? "text-[#5b5ee6]" : "text-white"
            }`}
          >
          </span>
        </div>

        {/* <div className="hidden sm:block">
          <ul className="flex items-center gap-6 text-lg font-medium">
            {["About", "Technology", "Galaxy", "Satellite"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`relative transition-all duration-300 ${
                    scrolled ? "text-[#5b5ee6]" : "text-white"
                  } hover:text-[#5b5ee6]`}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5b5ee6] transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="flex items-center gap-4">
          <button className="text-white bg-[#5b5ee6] hover:bg-[#4a4dd4] px-6 py-2 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105">
            Login
          </button>

          <button className="text-[#5b5ee6] border-2 border-[#5b5ee6] hover:bg-[#5b5ee6] hover:text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
