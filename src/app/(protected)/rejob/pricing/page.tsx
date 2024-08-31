import React from "react";
import PriceBoardPlain from "@/components/other/PriceBoardPlain";
import PriceBoardFilled from "@/components/other/PriceBoardFilled";


interface PricingProps {
  className?: string;
}

const Pricing: React.FC<PricingProps> = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-[1438px] bg-white flex flex-col items-center justify-center p-[116px_20px_125px] box-border gap-[60px] ${className}`}>
      <section className="w-full max-w-[998px] flex flex-col items-center justify-start gap-6 text-center text-[#212529] font-inter">
        <h1 className="self-stretch text-[72px] font-bold tracking-[-0.02em] m-0">Choose Your Plan</h1>
        <div className="w-full max-w-[979px] text-lg leading-[30px] tracking-[-0.02em] inline-block">
          Find a plan that meets your needs, we offer competitive rates based
          upon your requirements.
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-8 pt-[50px]">
        <PriceBoardPlain type="Personal" cost="$59.99"/>
        <PriceBoardFilled type="Organization" cost="$79.99"/>
        <PriceBoardPlain type="Unlimited" cost="$99.99"/>
      </section>
    </div>
  );
};

export default Pricing;