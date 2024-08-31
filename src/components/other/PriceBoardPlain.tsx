import React from "react";
import Link from "next/link";

interface PriceBoardPlainProps {
  type: string;
  cost: string;
}

const PriceBoardPlain: React.FC<PriceBoardPlainProps> = ({ type, cost }) => {
  const getPurchaseRoute = () => {
    switch (type) {
      case "Personal":
        return "/rejob/purchase/personal";
      case "Unlimited":
        return "/rejob/purchase/unlimited";
      default:
        return null;
    }
  };

  const purchaseRoute = getPurchaseRoute();

  const buttonContent = (
    <div className="relative text-base tracking-[-0.02em] font-medium font-poppins text-white text-left inline-block min-w-[86px]">
      Get Started
    </div>
  );

  return (
    <div className="flex-1 rounded-[10px] bg-white border border-[#ff3e4c] box-border flex flex-col items-center justify-center p-[38px_40px] gap-[25px] min-w-[300px] max-w-[300px] text-left text-2xl text-[#ff3e4c] font-poppins">
      <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
        <a className="self-stretch relative leading-9 font-semibold text-inherit no-underline">{type}</a>
        <b className="self-stretch relative text-[36px] tracking-[-0.02em] whitespace-nowrap">{cost}</b>
        <div className="self-stretch relative text-lg leading-[23px] font-medium tracking-[-0.02em]">
          Capture ideas and find them quickly
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-start justify-start gap-[28px] text-base">
        <div className="self-stretch bg-white flex flex-row items-center justify-start gap-[19px] whitespace-nowrap">
          <img className="h-[18px] w-[18px] relative" loading="lazy" alt="" src="/icon.svg" />
          <div className="flex-1 relative tracking-[-0.02em] leading-5">Sync unlimited devices</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start gap-[19px] whitespace-nowrap">
          <img className="h-[18px] w-[18px] relative" loading="lazy" alt="" src="/icon.svg" />
          <div className="flex-1 relative tracking-[-0.02em] leading-5">10 GB monthly uploads</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start gap-[19px] whitespace-nowrap">
          <img className="h-[18px] w-[18px] relative" loading="lazy" alt="" src="/icon.svg" />
          <div className="flex-1 relative tracking-[-0.02em] leading-5">200 MB max. note size</div>
        </div>
      </div>
      {purchaseRoute ? (
        <Link href={purchaseRoute} passHref>
          <button className="cursor-pointer border-0 py-4 px-10 bg-[#ff3e4c] rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#ff5766]">
            {buttonContent}
          </button>
        </Link>
      ) : (
        <button className="cursor-pointer border-0 py-4 px-10 bg-[#ff3e4c] rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#ff5766]">
          {buttonContent}
        </button>
      )}
    </div>
  );
};

export default PriceBoardPlain;