import React from "react";

interface SystemModuleProps {
  className?: string;
  iconAI1: string;
  moduleName: string;
  moduleDescriptions: string;
}

const SystemModule: React.FC<SystemModuleProps> = ({
  className = "",
  iconAI1,
  moduleName,
  moduleDescriptions,
}) => {
  return (
    <div className={`flex flex-col items-center justify-start w-[206px] p-0 pb-[41px] gap-[9px] text-center text-xl text-black font-poppins ${className}`}>
      <div className="flex flex-col items-center justify-start px-[65px]">
        <img className="w-[75px] h-[75px] relative" loading="lazy" alt="" src={iconAI1} />
      </div>
      <div className="flex flex-row items-center justify-center py-[5px] px-[20px]">
        <h3 className="m-0 w-[165px] relative text-inherit tracking-[-0.02em] capitalize font-bold font-inherit inline-block">
          {moduleName}
        </h3>
      </div>
      <div className="w-[216px] flex flex-row items-center justify-center py-[5px] px-[10px] box-border text-sm text-[#646464]">
        <div className="flex-1 relative tracking-[-0.02em] capitalize">
          {moduleDescriptions}
        </div>
      </div>
    </div>
  );
};

export default SystemModule;