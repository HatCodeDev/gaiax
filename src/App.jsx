import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import AboutGaiax from "./components/AboutGaiax/AboutGaiax.jsx";
import BgVideo from "./assets/video.mp4";
import wave from "./assets/wave Gif.gif";
import ODSSection from "./components/ODSSection/ODSSection.jsx";
import SubscriptionPlans from "./components/SubscriptionPlans/SubscriptionPlans.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/60 z-[-1]"></div>
        <Navbar />
        <Hero />
      </div>
      <AboutGaiax/>
      <HeroCard/>
      <ODSSection/>
      <SubscriptionPlans />
      <Footer5 />
    </div>
  );
};

export default App;
