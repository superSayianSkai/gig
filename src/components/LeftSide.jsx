"use client";
import { LeftSideUtils } from "@/utilities/Utills";
import { useContext } from "react";
import AppContext from "@/context/context";
const LeftSide = () => {
  const { setAgentSkill, agentSkill, setTheToggleLeftSide, openAgent, toggleLeftSide } =
    useContext(AppContext);


  return (
    <div
      className={`text-[.7rem] ${
        toggleLeftSide
          ? `flex absolute bottom-0 top-0 left-0 bg-white z-[300] w-[50%]`
          : `hidden`
      } lg:flex flex-col py-4 gap-4 border-r-[1px] border-gray-300 overflow-scroll overflow-x-hidden scroll`}
    >
      <button onClick={setTheToggleLeftSide} className="flex lg:hidden">
        <i className="bi bi-list flex-start text-[1rem] cursor-pointer mx-2 "></i>
      </button>
      <div className="flex gap-8 flex-col">
        {LeftSideUtils.map((item, index) => (
          <div key={index} className="flex gap-2 flex-col cursor-pointer">
            <div className="text-left font-bold mx-2">{item.sectionTitle}</div>
            {item.sectionItem.map((subItem, subIndex) => (
              <div
                onClick={openAgent}
                data-value={subItem.title} // Correct use of data-value
                key={subIndex}
                className={`group flex gap-2 hover:bg-white p-2 items-center ${
                  agentSkill && subItem.title === "Agent Skill"
                    ? "bg-gray-200"
                    : ""
                }`}
              >
                <div className="w-[2px] h-[20px] bg-red-500 rounded-lg hidden group-hover:block"></div>
                {subItem.icon}
                <h2 className="text-left">{subItem.title}</h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
