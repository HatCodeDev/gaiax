import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaBolt, FaUserShield, FaBrain } from "react-icons/fa";

const ServiceData = [
  {
    title: "Innovación con IA",
    content: "Tecnología avanzada",
    description:
      "Utilizamos inteligencia artificial para personalizar la capacitación, adaptándonos a las necesidades de cada empresa.",
    icon: <FaBolt className="text-7xl text-[#5b5ee6]" />,
    aosDelay: "300",
  },
  {
    title: "Seguridad y Confiabilidad",
    content: "Protección de datos",
    description:
      "Nuestra plataforma garantiza la seguridad de la información con encriptación avanzada y protección total.",
    icon: <FaUserShield className="text-7xl text-[#5b5ee6]" />,
    aosDelay: "500",
  },
  {
    title: "Entrenamiento Práctico",
    content: "Aprender haciendo, no solo viendo",
    description:
      "Mientras otras plataformas ofrecen solo videos y lecturas, nuestra app incluye simulaciones, retos interactivos y resolución de problemas.",
    icon: <FaBrain className="text-7xl text-[#5b5ee6]" />,
    aosDelay: "700",
  },
];

const HeroCard = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-[#5b5ee6]">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              En Gaiax, nos diferenciamos al ofrecer una plataforma de
              capacitación inteligente que optimiza procesos y mejora el
              rendimiento de las PYMES.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="flex flex-col justify-center items-center rounded-xl gap-4 bg-gray-800 p-8 text-white text-center shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  {data.icon}
                  <h1 className="text-2xl font-semibold">{data.title}</h1>
                  <p className="text-lg text-[#5b5ee6] font-medium">{data.content}</p>
                  <p className="text-gray-300 leading-relaxed">{data.description}</p>
                </div>
              );
            })}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </section>
    </>
  );
};

export default HeroCard;
