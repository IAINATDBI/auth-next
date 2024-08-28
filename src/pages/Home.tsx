import React from "react";
import Hero from "../components/other/Hero";
import SystemModule from "../components/other/SystemModule";

const Home: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Welcome to Our System"
        subtitle="Discover the power of our innovative solutions"
        ctaText="Get Started"
        backgroundImage="/path/to/hero-background.jpg"
      />
      {/* Rest of your Home component content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <SystemModule
          iconAI1="/path/to/icon1.png"
          moduleName="Module 1"
          moduleDescriptions="Description for Module 1"
        />
        {/* ... other SystemModule components ... */}
      </div>
    </div>
  );
};

export default Home;