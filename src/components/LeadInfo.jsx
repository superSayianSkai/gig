import sealedEmail from "../../public/sealedEmail.png";
import Image from "next/image";
import { LeadsInfo } from "@/utilities/LeadsInfo";
import { TheLeadInfo } from "@/utilities/TheLeadInfo";
import checkMark from "../../public/checkMark.png";
import padlock from "../../public/unlock.png";
import sales from "../../public/sales.png";
import AppContext from "@/context/context";
import { useContext } from "react";
const LeadInfo = () => {
  const { setTheToggleLead } = useContext(AppContext);
  const info = LeadsInfo[0];

  return (
    <div className="absolute bg-slate-100 w-[100%] h-[100svh]  lg:w-[60%] lg:h-[85vh] overflow-scroll  border-2 border-blue-500 left-1/2 top-[51%] transform -translate-x-1/2 -translate-y-1/2 lg:rounded-lg overflow-x-hidden scroll px-4 pt-[80px] lg:p-6 gap-4 flex flex-col  pb-5">
          <i
          onClick={setTheToggleLead}
          className="bi bi-x-lg absolute  lg:top-[20px] right-[40px] hover:opacity-35 cursor-pointer"
        ></i>
      <div className="text-[.8rem] flex ">
        <Image src={sealedEmail} className="w-[40px] object-cover" />
        <h2 className="font-bold">Engage with Jane Reyes</h2>
      </div>

      <div className="flex  gap-2 items-center bg-white shadow-md py-2 px-4 rounded-md">
        <Image
          src={info.profilePicture}
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="flex flex-col ">
          <h2 className="text-left text-[.6rem] font-bold">{info.name}</h2>
          <div className="flex gap-2 items-center text-[.5rem]">
            <h2>{info.desc1}</h2>
            <span className="h-[4px] w-[4px] bg-slate-200 rounded-full"></span>
            <h2>{info.desc2}</h2>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 flex items-center justify-between  p-1 rounded-lg ">
        <div className="flex items-center gap-2 px-4">
          <i className="bi bi-stars text-[.8rem] "></i>
          <p className="text-[.7rem]">
            Jane may be interested in upgrading espresso machines for her
            in-store coffee shop
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex text-[.7rem] gap-2 bg-white rounded-md px-4 py-1 justify-center items-center">
            <i className="bi bi-pencil"></i>
            <p className="">Edit</p>
          </div>
          <div className="flex items-center text-[.7rem] gap-2 px-4 py-1 bg-blue-600 text-white rounded-md">
            <i className="bi bi-arrow-right"></i>
            <p>Approve</p>
          </div>
        </div>
      </div>
      <div className="text-[.8rem] flex gap-4 items-center bg-white shadow-md px-8 pt-3 leading-[30px] rounded-md">
        <h2>Engage</h2>
        <h2 className="border-b-[2px] border-blue-500">Research</h2>
      </div>
      <div className=" py-1 px-4 bg-white rounded-lg shadow-lg">
        <div className="bg-slate-100 p-4 rounded-lg  ">
          <div className="text-[.8rem] flex flex-col gap-2">
            <p className="text-blue-500 font-bold text-left ">
              Why I picked this Lead
            </p>

            <ul className="list-disc mx-6 my-2 text-left text-[.7rem]">
              <div className="flex items-center gap-2">
                <li>
                  Jane is a key decision maker and was browsing 'espresso
                  machines' on First Coffee's website.
                </li>
                <div className="text-[.6rem] bg-white border-[1px] w-[15px] h-[15px] border-gray-300 block text-center">
                  1
                </div>
              </div>
              <div className="flex items-center gap-4">
                <li>
                  Multiple people at her company have reported 'slowness' during
                  service requests
                </li>
                <div className="text-[.6rem] bg-white border-[1px] w-[15px] h-[15px] block text-center border-gray-300">
                  2
                </div>
              </div>
              <div className="flex gap-16">
                <li>
                  Northwind Traders currently see $200M in revenue from thier
                  in-stone coffe shops
                </li>
                <div className="text-[.6rem] bg-white border-[1px] w-[15px] h-[15px] block text-center border-gray-300">
                  3
                </div>
              </div>
            </ul>
            <div className="flex gap-2 flex-col lg:flex-row">
              {TheLeadInfo[0].why.map((item, index) => (
                <div
                  key={index}
                  className="shadow-md bg-white  rounded-xl px-4 py-3 flex gap-2 "
                >
                  <Image src={item.image} className="w-[35px] h-[35px]" />
                  <div className="flex flex-col text-left text-[.7rem]">
                    <h2>{item.label}</h2>
                    <h2 className="text-blue-600 font-bold">{item.value}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex pb-2  flex-col lg:flex-row justify-between items-center">
          <div className="flex gap-2 p-2 items-center">
            <Image
              src={padlock}
              className="w-[20px] h-[20px] bg-gray-200 p-1 border-[1px] border-gray-300 rounded-sm"
            />
            <div className="flex gap-2 bg-gray-200  px-2 border-[1px] border-gray-300 rounded-sm items-center">
              <span className="text-[.6rem] border-r-gray-400 border-[1px] pr-2">
                1
              </span>
              <Image src={sales} className="w-[10px] h-[10px]" />
              <span className="text-[.6rem]">D365 Sales</span>
            </div>
            <div className="w-[20px] h-[20px] bg-gray-200 p-1 border-[1px] border-gray-300 text-[.6rem] text-center  rounded-sm">
              +2
            </div>
          </div>
          <div>
            <div className="flex gap-2 bg-gray-200  px-2 border-[1px] border-gray-300 rounded-sm items-center ">
              <p className="text-[.6rem]">
                AI-generated content may be incorrect
              </p>
              <div className="flex gap-2 text-[.8rem]">
                <i className="bi bi-hand-thumbs-up"></i>
                <i className="bi bi-hand-thumbs-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left text-[.7rem] bg-white py-2 px-4 rounded-xl shadow-lg ">
        <h2 className="font-bold">About Jane</h2>
        <p>
          {TheLeadInfo.map((info) => (
            <div>{info.About}</div>
          ))}
        </p>
      </div>
      <div className="text-left text-[.8rem]">Showing 1 of 9 </div>
    </div>
  );
};

export default LeadInfo;
