import React from "react";
import Lexi from "../../assets/lexi.png";
import { FaBullseye, FaEye } from "react-icons/fa";

const AboutGaiax = () => {
  return (
    <section className="text-white" id="nosotros">
      <div className="py-20 px-6 sm:px-12 bg-black">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
          
          <div data-aos="fade-in" className="text-center sm:text-left">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-[#5b5ee6] mb-6">
              ¿Quiénes Somos?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto sm:mx-0"
            >
              Gaiax es una plataforma impulsada por inteligencia artificial, diseñada para revolucionar la capacitación en pequeñas y medianas empresas. Con tecnología avanzada, optimizamos el aprendizaje y mejoramos la eficiencia en los procesos empresariales.
            </p>
          </div>
          <div className="flex justify-center" data-aos="zoom-in">
            <img 
              src={Lexi} 
              alt="Lexi - Asistente IA" 
              className="w-[80%] sm:w-[60%] md:w-[50%] max-w-md object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>

      <div className="py-20 px-6 sm:px-12 bg-black">
        <div className="container mx-auto">
          <h2 
            data-aos="fade-up"
            className="text-5xl sm:text-6xl font-extrabold text-[#5b5ee6] text-center mb-12"
          >
            Nuestra Misión y Visión
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div 
              data-aos="fade-up"
              className="bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <FaBullseye className="text-[#5b5ee6] text-6xl mb-4" />
              <h3 className="text-3xl font-semibold mb-3">Nuestra Misión</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Brindar herramientas tecnológicas innovadoras que optimicen la capacitación en PYMES, impulsando su crecimiento y competitividad.
              </p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <FaEye className="text-[#5b5ee6] text-6xl mb-4" />
              <h3 className="text-3xl font-semibold mb-3">Nuestra Visión</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
              Hacer que cada pyme en México crezca a través del talento de su gente, con formación innovadora y al alcance de todos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGaiax;
