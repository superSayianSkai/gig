"use client";
import { createContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [leads, setLeads] = useState("");
  const [agentSkill, setAgentSkill] = useState(false);
  const [toggleLeftSide, setToggleLeftSide] = useState(false);
  const [toggleLead, setToggleLead] = useState(false);
  const setTheToggleLeftSide = () => {
    setToggleLeftSide((prev) => !prev);
  };

  const setTheToggleLead = () => {
    setToggleLead((prev) => !prev);
  };
  const openAgent = () => {
    setAgentSkill((prev) => !prev);
  };
  return (
    <AppContext.Provider
      value={{
        leads,
        setLeads,
        agentSkill,
        setAgentSkill,
        toggleLeftSide,
        setTheToggleLeftSide,
        toggleLead,
        setTheToggleLead,
        openAgent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
