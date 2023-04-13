import React from "react";

interface DetailsProps {
    location?: any
}

const Details: React.FC<DetailsProps> = ({location}) => {
    const time = location?.utc_offset
    const newTime = `${time?.slice(0, 3)}:${time?.slice(3, 5)}`
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white w-[300px] md:w-[900px] h-[280px] md:h-[120px] rounded-md
        absolute md:left-80 md:-top-14 z-10 left-28 -top-24
    ">
      <div className="flex-1 flex flex-col justify-center items-center
        text-[12px] gap-1 flex-wrap
      ">
        <h2>IP ADDRESS</h2>
        <span className="text-[15px] font-semibold">{location?.ip}</span>
      </div>
      <div className="border-l-2 h-[80%] border-slate-300 md:block hidden" />
      <hr className="md:hidden w-[80%]"/>
      <div className="flex-1 flex flex-col justify-center items-center
        text-[12px] gap-1 flex-wrap
      ">
        <h2>LOCATION</h2>
        <span className="text-[15px] font-semibold">{location?.city}, {location?.state}, {location?.country}</span>
      </div>
      <div className="border-l-2 h-[80%] border-slate-300 md:block hidden" />
      <hr className="md:hidden w-[80%]"/>
      <div className="flex-1 flex flex-col justify-center items-center
        text-[12px] gap-1 flex-wrap
      ">
        <h2>TIMEZONE</h2>
        <span className="text-[15px] font-semibold">UTC  {newTime}</span>
      </div>
      <div className="border-l-2 h-[80%] border-slate-300 md:block hidden" />
      <hr className="md:hidden w-[80%]"/>
      <div className="flex-1 flex flex-col justify-center items-center
        text-[12px] gap-1 flex-wrap
      ">
        <h2>ISP</h2>
        <span className="text-[15px] font-semibold wrap text-center">{location?.org}</span>
      </div>
    </div>
  );
};

export default Details;
