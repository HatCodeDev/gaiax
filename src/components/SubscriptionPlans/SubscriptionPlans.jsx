import React from "react";
import { FaUsers, FaChartLine, FaBuilding, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";

const subscriptionPlans = [
  {
    title: "Plan Solidario",
    price: "$800 MXN/mes",
    description: "Ideal para micro y pequeñas empresas.",
    features: [
      "Hasta 10 empleados",
      "Flashcards, quizzes interactivos y reportes básicos",
      "Estadísticas en tiempo real",
      "Descuento para negocios en zonas marginadas",
    ],
    icon: <FaUsers className="text-[#5b5ee6] text-5xl" />,
  },
  {
    title: "Plan Crecimiento",
    price: "$2,500 MXN/mes",
    description: "Para PYMEs en expansión.",
    features: [
      "Entre 11 y 50 empleados",
      "Simulaciones, podcasts y feedback personalizado",
      "Reportes detallados y acceso a estadísticas completas",
      "Asesoría en implementación de capacitación",
      "Bonificación en meses gratuitos para empresas con impacto social",
    ],
    icon: <FaChartLine className="text-[#5b5ee6] text-5xl" />,
  },
  {
    title: "Plan Transformación",
    price: "$5,500 MXN/mes",
    description: "Empresas en consolidación.",
    features: [
      "Más de 50 empleados",
      "Casos reales, gamificación y métricas avanzadas",
      "Integración con ERP y LMS",
      "Análisis de impacto de la capacitación",
      "Soporte técnico prioritario y asesoramiento continuo",
      "Parte de los ingresos financia becas para microempresas",
    ],
    icon: <FaBuilding className="text-[#5b5ee6] text-5xl" />,
  },
];

const SubscriptionPlans = () => {
  return (
    <section className="bg-black text-white py-20" id="suscripciones">
      <div className="container mx-auto text-center">
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#5b5ee6]">
            Planes de Suscripción
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Gaiax ofrece planes accesibles y escalables para todo tipo de empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="p-8 border-4 border-[#5b5ee6] rounded-lg shadow-xl bg-gray-900 min-h-[500px] flex flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                {plan.icon}
                <h3 className="text-3xl font-bold text-[#5b5ee6] mt-4">{plan.title}</h3>
                <p className="text-lg font-semibold mt-2">{plan.price}</p>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>
              <ul className="text-gray-300 text-left mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-[#5b5ee6] text-white px-6 py-3 rounded-lg hover:bg-[#4a4dd4] transition-transform duration-300 hover:scale-105">
                Suscribirse
              </button>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-20">
          <h3 className="text-4xl font-bold text-[#5b5ee6]">Pago por Uso</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Para empresas que buscan flexibilidad sin compromiso mensual.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-4 border-[#5b5ee6] flex flex-col items-center">
              <FaMoneyBillWave className="text-[#5b5ee6] text-5xl" />
              <h4 className="text-xl font-semibold text-[#5b5ee6] mt-3">Acceso Básico</h4>
              <p className="text-lg text-white">$100 MXN por empleado/mes</p>
              <p className="text-gray-400 mt-2 text-center">Flashcards, quizzes y reportes básicos</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-4 border-[#5b5ee6] flex flex-col items-center">
              <FaMoneyBillWave className="text-[#5b5ee6] text-5xl" />
              <h4 className="text-xl font-semibold text-[#5b5ee6] mt-3">Acceso Avanzado</h4>
              <p className="text-lg text-white">$200 MXN por empleado/mes</p>
              <p className="text-gray-400 mt-2 text-center">Simulaciones, aprendizaje colaborativo y análisis de desempeño</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-20">
          <h3 className="text-4xl font-bold text-[#5b5ee6]">Servicios de Valor Agregado</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Consultoría estratégica para maximizar la capacitación en tu empresa.
          </p>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6 mx-auto max-w-2xl border-4 border-[#5b5ee6] flex flex-col items-center">
            <FaBriefcase className="text-[#5b5ee6] text-5xl" />
            <h4 className="text-xl font-semibold text-[#5b5ee6] mt-3">Consultoría Personalizada</h4>
            <p className="text-lg text-white">Desde $5,000 MXN por proyecto</p>
            <p className="text-gray-400 mt-2 text-center">
              Diseño de programas de capacitación, estrategias de productividad y diagnóstico gratuito para PYMEs de impacto social.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
