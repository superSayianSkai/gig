import copilot from "../../public/copilot-icon.svg";
import Image from "next/image";
import AppContext from "@/context/context";
import { use, useContext } from "react";
import outlook from "../../public/outlook.png";
const AgentSkill = () => {
  const { openAgent} = useContext(AppContext);

  return (
    <div className=" z-[4000]">
      <div className="absolute inset-0 bg-black opacity-30 z-[400]"></div>
      <div className="bg-white w-[100%] lg:w-[50%] lg:h-[80vh]  absolute rounded-lg justify-center flex p-5 flex-col lg:left-[50%] inset-0 lg:top-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2   z-[1000]">
        <i
          onClick={openAgent}
          className="bi bi-x-lg absolute top-[40px] right-[40px] hover:opacity-35 cursor-pointer"
        ></i>
        <div className="flex items-center gap-2">
          <Image src={copilot} className="w-[30px] h-[30px]" />
          <h2 className="font-bold">Agent Skill</h2>
        </div>
        <div className="bg-white shadow-md  text-[.8rem] text-left p-5 my-[20px] flex flex-col gap-2 font-bold leading-[30px] tracking-wide">
          <p>
            Check if on-hand inventory will allow all sales orders to ship
            without delay
          </p>
          <p>
            When{" "}
            <span className="bg-blue-100 py-1 px-4 rounded-xl text-blue-400">
              {" "}
              <i className="bi bi-person"></i> any vendor
            </span>{" "}
            sends an email with changes to{" "}
            <span className="bg-blue-100 py-1 px-4 rounded-xl text-blue-400 ">
              <i className="bi bi-file-earmark-text"></i> confirmed purchase
              orders
            </span>{" "}
            , check if the resulting{" "}
            <span className="bg-blue-100 py-1 px-4 rounded-xl text-blue-400">
              {" "}
              <i className="bi bi-filter-left"></i> on-hand inventory
            </span>{" "}
            will allow{" "}
            <span className="bg-blue-100 py-1 px-4 rounded-xl text-blue-400">
              {" "}
              <i className="bi bi-clipboard2"></i> all sales orders
            </span>{" "}
            to <span>ship without delay</span>. if so{" "}
            <span className="bg-blue-100 py-1 px-4 rounded-xl text-blue-400">
              <i className="bi bi-box-arrow-up-right"></i>update the purchase
              order
            </span>{" "}
            to reflect change.
          </p>
        </div>
        <div className="text-left text-[.8rem] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image src={outlook} className="w-[30px] h-[30px]" />
            <h2 className="font-bold">
              {" "}
              <h1 className="text[1rem]">Enable email access</h1>
            </h2>
          </div>

          <p className="text-[.9rem]">
            Allow the agent to access email inboxes to read mail from known
            vendors
          </p>
          <div className="flex gap-2">
            <div className="w-[80%] border-[1px] border-black p-1 flex items-center">
              <div className="flex gap-2  items-center px-2">
                <div className="bg-pink-200 text-[.8rem] h-[20px] w-[20px] text-center rounded-full">
                  P
                </div>
                <div className="bg-slate-200 rounded-xl px-2 py-1 text-[.8rem]">
                  purchasing@contoso.com
                </div>
              </div>
            </div>
            <div className="bg bg-blue-600 p-2 text-white rounded-md">
              Allow Access
            </div>
          </div>
        </div>
        <div className="flex gap-2 self-end mt-[40px] text-[.8rem]">
          <div className="opacity-40 bg-gray-300 px-4 py-2">Activate</div>
          <div className="px-4 py-2 text-black border-[1px] bg-white">
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSkill;
