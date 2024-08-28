import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, backgroundImage }) => {
  return (
    <div className="flex flex-wrap items-start justify-start max-w-[1031px] px-2 text-left font-inter">
      <div className="flex-1 min-w-[335px] pt-[68.5px] sm:pt-[45px]">
        <div className="flex flex-col items-start justify-start gap-20 sm:gap-10 max-w-full">
          <div className="flex flex-col items-start justify-start gap-[17px] self-stretch max-w-full">
            <h1 className="m-0 text-6xl sm:text-[51px] xs:text-[38px] font-bold tracking-[-0.02em] text-black">
              {title.split(' ').map((word, index) => (
                <span key={index} className={word.toLowerCase() === 'stress' ? 'text-[#ff3e4c]' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="m-0 text-xl xs:text-base tracking-[-0.02em] capitalize font-normal font-poppins text-black/45 max-w-full">
              {subtitle}
            </p>
          </div>
          <div className="self-stretch flex items-start justify-between bg-[#d0d0d2]/25 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-[280px] h-[45px] bg-transparent border-0 outline-none pt-[18px] font-poppins text-lg text-[#949494]"
            />
            <button className="w-[60px] h-[60px] bg-[#ff3e4c] rounded-r-lg flex items-center justify-center p-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img src={backgroundImage} alt="Hero" className="flex-1 min-w-[335px] h-[588px] object-cover overflow-hidden -ml-2" />
    </div>
  );
};

export default Hero;