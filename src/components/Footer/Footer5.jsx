import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* 📌 Frase Inspiradora y Suscripción a la Izquierda */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-[#5b5ee6]">
              Transformemos el aprendizaje
            </h1>
            <p className="text-gray-300">
              Recibe novedades sobre capacitación e innovación en PYMEs.
            </p>
            <div className="flex items-center h-12">
              <input
                className="py-2 px-4 w-full h-full focus:outline-none focus:border-[#5b5ee6] focus:ring-2 focus:ring-[#5b5ee6] bg-gray-800 border-gray-500 border-2 rounded-l-md text-[#5b5ee6]"
                type="email"
                placeholder="Tu correo electrónico"
              />
              <button className="bg-[#5b5ee6] hover:bg-[#4a4dd4] px-5 h-full text-white rounded-r-md">
                Suscribirse
              </button>
            </div>
          </div>

          <div className="text-right sm:text-right">
            <h2 className="text-xl font-bold text-[#5b5ee6]">Enlaces</h2>
            <ul className="mt-3 space-y-2">
            <li>
                <a href="#inicio" className="hover:text-[#5b5ee6] cursor-pointer">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#5b5ee6] cursor-pointer">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#ods" className="hover:text-[#5b5ee6] cursor-pointer">
                  ODS
                </a>
              </li>
              <li>
                <a href="#suscripciones" className="hover:text-[#5b5ee6] cursor-pointer">
                  Suscripciones
                </a>
              </li>
            </ul>
          </div>

          <div className="text-right sm:text-right flex flex-col items-end">
            <h2 className="text-xl font-bold text-[#5b5ee6]">Contáctanos</h2>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-3 justify-end">
                <p>Puebla, México</p>
                <HiLocationMarker className="text-[#5b5ee6] text-2xl" />
              </div>
              <div className="flex items-center gap-3 justify-end">
                <p>contacto@gaiax.com</p>
                <MdEmail className="text-[#5b5ee6] text-2xl" />
              </div>
              <div className="flex items-center gap-3 justify-end">
                <p>+52 222 254 5529</p>
                <MdCall className="text-[#5b5ee6] text-2xl" />
              </div>
            </div>
          </div>

        </div>

        {/* 🔹 Línea divisoria */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* 🔹 Redes Sociales y Derechos Reservados */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center">
          <span className="text-sm text-gray-400">
            © 2025 Gaiax. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#5b5ee6] text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#5b5ee6] text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#5b5ee6] text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
