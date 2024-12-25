import Stats from "./Stats";
import Leads from "./Leads";
import copilot from "../../public/copilot-icon.svg";
import Image from "next/image";
import LeadInfo from "./LeadInfo";
const LeadsModal = () => {
  return (
    <div className="bg-white text-black mt-[8px] lg:mt-[10px] lg:w-[98%] lg:mx-auto lg:border-[1px] border-blue-500 flex gap-4 flex-col p-6 lg:rounded-2xl  relative ">
      <div className="flex flex-col lg:flex-row items-center  gap-2 ">
        <Image src={copilot} className="w-[30px] h-[30px]" />
        <p className="text-left text-[.8rem] rounded-lg font-bold w-[100%] ">
          HI Mona, <span className="text-purple-500">68%</span> of goal achieved
          and rest can be achieved by focusing on 20 top leads.
        </p>
        <Stats />
      </div>
      <Leads />
    </div>
  );
};

export default LeadsModal;
