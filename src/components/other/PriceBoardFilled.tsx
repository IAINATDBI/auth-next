import React from "react";

interface PriceBoardFilledProps {
  className?: string;
  type?: string;
  cost?: string;
  prodSlogan?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
}

const PriceBoardFilled: React.FC<PriceBoardFilledProps> = ({
  className = "",
  type = "Personal",
  cost = "$11.99",
  prodSlogan = "Keep home and family on track",
  feature1 = "Sync unlimited devices",
  feature2 = "10 GB monthly uploads",
  feature3 = "200 MB max. note size",
}) => {
  return (
    <div
      className={`w-[300px] shadow-[0px_4px_50px_rgba(0,_0,_0,_0.08)] rounded-[10px] bg-[#ff3e4c] flex flex-col items-center justify-center py-[74px] px-[40px] box-border gap-[25px] min-w-[300px] max-w-[300px] min-h-[550px] max-h-[550px] leading-[normal] tracking-[normal] font-poppins ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[25px] text-left text-[24px] text-[#fff]">
        <a className="[text-decoration:none] self-stretch relative leading-[36px] font-semibold text-[inherit]">
          {type}
        </a>
        <b className="self-stretch relative text-[36px] tracking-[-0.02em] whitespace-nowrap">
          {cost}
        </b>
        <div className="self-stretch relative text-[18px] tracking-[-0.02em] leading-[23px] font-medium">
          {prodSlogan}
        </div>
      </section>
      <section className="flex flex-col items-start justify-start gap-[28px] text-left text-[18px] text-[#fff]">
        <div className="flex flex-row items-center justify-start gap-[19px]">
          <img
            className="h-[18px] w-[18px] relative"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[23px] font-medium">
            {feature1}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[19px]">
          <img
            className="h-[18px] w-[18px] relative"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[23px] font-medium">
            {feature2}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[19px]">
          <img
            className="h-[18px] w-[18px] relative"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[23px] font-medium">
            {feature3}
          </div>
        </div>
      </section>
      <button className="cursor-pointer [border:none] py-[16px] px-[40px] bg-[#fff] rounded-[8px] flex flex-row items-center justify-center whitespace-nowrap">
        <div className="relative text-[16px] tracking-[-0.02em] font-medium text-[#ff3e4c] text-left inline-block min-w-[86px]">
          Get Started
        </div>
      </button>
    </div>
  );
};

export default PriceBoardFilled;