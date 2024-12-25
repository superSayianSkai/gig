"use client";
import { activites } from "@/utilities/Activities";
import { LeadsInfo } from "@/utilities/LeadsInfo";
import Image from "next/image";
import { useContext } from "react";
import AppContext from "../context/context";
const Leads = () => {
  const { setLeads, toggleLead, setTheToggleLead } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-24 text-[.8rem] pb-[.8rem]">
        <p className=" text-left font-bold mt-[40px] lg:mt-0 text-[.7rem]">
          Copilot has pinpointed 20 key leads that show strong purchase intent
          and are actively engaging. These leads need your focus
        </p>

        <h2 className="hidden md:block text-[.7rem]">Other key activities</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="flex flex-col lg:flex-row gap-4 relative lg:w-[70%]">
          {LeadsInfo.map((info, index) => (
            <div
              key={index}
              onClick={setTheToggleLead}
              className="border-[1px] border-slate-200 p-4  rounded-md gap-2 flex flex-col w-[100%] lg:w-[50%] cursor-pointer hover:bg-slate-50"
              data-value={info.name}
            >
              <div className="flex  gap-2 items-center">
                <Image
                  src={info.profilePicture}
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex flex-col ">
                  <h2 className="text-left text-[.6rem] font-bold">
                    {info.name}
                  </h2>
                  <div className="flex gap-2 items-center text-[.5rem]">
                    <h2>{info.desc1}</h2>
                    <span className="h-[4px] w-[4px] bg-slate-200 rounded-full"></span>
                    <h2>{info.desc2}</h2>
                  </div>
                </div>
              </div>
              {info.name === "Jane Reyes" ? (
                <div className="flex flex-col  bg-slate-200 px-4 py-2 rounded-lg relative">
                  <div className="flex gap-2 text-[.7rem] font-bold">
                    <i className="bi bi-envelope"></i>
                    <h2>Engage with jane Reyes</h2>
                  </div>
                  <div className="">
                    <p className="break-words hyphens-auto text-[.6rem] text-left">
                      Jane may be interested in upgrading espresso machines for
                      her instore coffee shop
                    </p>
                  </div>
                  <i className="bi bi-stars absolute right-[-7px] w-[30px] h-[30px] text-[.8rem] bg-white p-2 rounded-full top-[-5px]"></i>
                </div>
              ) : (
                <div className="flex flex-col p-2  bg-slate-200 px-4 py-2 rounded-lg relative">
                  <div className="flex gap-2 text-[.7rem] font-bold">
                    <i className="bi bi-envelope"></i>
                    <h2>Prepare for high-buying meeting with Allan</h2>
                  </div>
                  <div>
                    <p className="break-words hyphens-auto text-[.6rem] text-left">
                      Prepare for high-buying intent meeting Copilot scheduled
                      for 2pm regarding upgrading service contract.
                    </p>
                  </div>
                  <i className="bi bi-stars absolute right-[-7px] w-[30px] h-[30px] text-[.8rem] bg-white p-2 rounded-full top-[-5px]"></i>
                </div>
              )}
              {info.name === "Jane Reyes" ? (
                <div className="flex gap-2 items-center">
                  <p className="text-left text-[.6rem]">Expand business</p>
                  <span className="h-[4px] w-[4px] bg-slate-200 rounded-full"></span>
                  <p className="text-left text-[.6rem]">High buying intent</p>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <p className="text-left text-[.6rem]">Upcoming Meeting</p>
                  <span className="h-[4px] w-[4px] bg-slate-200 rounded-full"></span>
                  <p className="text-left text-[.6rem]">due date</p>
                </div>
              )}
            </div>
          ))}
          <div className="border-[1px] border-r-0 border-b-o border-t-0 absolute bottom-0 h-[220px] right-[-18px] hidden lg:block"></div>
        </div>
        <h2 className=" text-left font-bold text-[1rem] block lg:hidden ">
          Other key activities
        </h2>
        <div className="  flex flex-col gap-4 lg:w-[30%]">
          {activites.map((info, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 border-none bg-white p-2 shadow-md rounded-xl "
            >
              <div className="flex  gap-2 items-center">
                <div className=" text-2xl rounded-full">{info.icon}</div>

                <div className="flex flex-col text-[.5rem]">
                  <h2 className="text-left text-[.8rem] font-bold">
                    {info.title}
                  </h2>
                  <div className="flex gap-2 items-center text-[.6rem]">
                    <h2>{info.desc1}</h2>
                    <span className="h-[4px] w-[4px] bg-slate-200 rounded-full"></span>
                    <h2>{info.desc2}</h2>
                    <span className="h-[4px] w-[4px] bg-slate-200 rounded-full"></span>
                    <h2>{info.desc3}</h2>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 bg-slate-200 p-2 rounded-lg relative items-center">
                <i className="bi bi-envelope text-[10px]"></i>
                <div className="">
                  <p className="break-words hyphens-auto text-[.5rem] text-left">
                    {info.subDesc}
                  </p>
                </div>
                <i className="bi bi-stars absolute right-[-7px] w-[30px] h-[30px] text-[.8rem] bg-white p-2 rounded-full top-[-5px]"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leads;
