'use client'
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import MiddleSide from "@/components/MiddleSide";
import MainHeader from "@/components/MainHeader";

const page = () => {
  
  return (
    <div className="grid text-center grid-cols-1 lg:grid-cols-[150px,2fr,40px] h-[100svh]  bg-slate-100 lg:overflow-hidden overflow-scroll border-2">
      <LeftSide />
      <MiddleSide />
      <RightSide />
    </div>
  );
};

export default page;
