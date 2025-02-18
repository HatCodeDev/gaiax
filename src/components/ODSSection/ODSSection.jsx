import React from "react";
import ODS4 from "../../assets/ODS4.jpg";
import ODS9 from "../../assets/ODS9.png";

const ODSSection = () => {
  return (
    <>
      <section className="bg-black text-white py-20" id="ods">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-[#5b5ee6]">
              Nuestro Compromiso con los ODS
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              En Gaiax, alineamos nuestro proyecto con los Objetivos de Desarrollo Sostenible para generar impacto positivo en la educación y la innovación industrial.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-12">
            <div className="space-y-4 xl:pr-36 p-6 border-l-4 border-b-4 border-[#5b5ee6] rounded-lg">
              <h3 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold text-[#5b5ee6]">
                ODS 4 - Educación de Calidad
              </h3>
              <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-gray-300 leading-relaxed">
                Gaiax contribuye a garantizar una educación inclusiva y equitativa mediante el uso de IA para personalizar la capacitación en PYMES, mejorando el acceso al conocimiento y el desarrollo profesional.
              </p>
            </div>

            <div data-aos="zoom-in" className="flex justify-center">
              <img
                src={ODS4}
                alt="ODS 4 - Educación de Calidad"
                className="w-[300px] h-[300px] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in" className="flex justify-center">
              <img
                src={ODS9}
                alt="ODS 9 - Industria, Innovación e Infraestructura"
                className="w-[300px] h-[300px] object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 xl:pr-36 p-6 border-l-4 border-b-4 border-[#5b5ee6] rounded-lg">
              <h3 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold text-[#5b5ee6]">
                ODS 9 - Innovación e Infraestructura
              </h3>
              <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-gray-300 leading-relaxed">
                Gaiax impulsa la transformación digital en las PYMES con tecnologías innovadoras, promoviendo la automatización y el crecimiento sostenible en el sector empresarial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ODSSection;
