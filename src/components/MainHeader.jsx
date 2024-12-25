"use client";
import Image from "next/image";
import man from "../../public/man.jpeg";
import AppContext from "@/context/context";
import { useContext } from "react";
const MainHeader = () => {
  const { setTheToggleLeftSide, toggleLeftSide } = useContext(AppContext);
  console.log(toggleLeftSide);
  return (
    <div className="bg-black text-white flex items-center justify-between p-2 fixed left-0 right-0 w-[100%] z-[1000]">
      <i className="bi bi-list md:hidden" onClick={setTheToggleLeftSide}></i>

      <h1 className="text-[1rem]  md:hidden">Dynamic 365</h1>


      <div className="md:flex items-center  text-[.8rem] gap-8 px-2 hidden">
        <i className="bi bi-columns hidden md:block"></i>

        <div className="flex gap-5">
          <h1 className="hidden md:block">Dynamics 365</h1>
          <h1 className="hidden md:block"> Sales hub</h1>
        </div>
      </div>
      <div className="md:flex items-center gap-2 text-[.9rem]">
        <i className="bi bi-lightbulb hidden md:block"></i>
        <i className="bi bi-plus hidden md:block"></i>
        <i className="bi bi-gear hidden md:block"></i>
        <i className="bi bi-question-lg hidden md:block"></i>
        <i className="bi bi-chat-square-dots hidden md:block"></i>
        <Image src={man} className="w-[20px] h-[20px] rounded-full ml-4" />
      </div>
    </div>
  );
};

export default MainHeader;
