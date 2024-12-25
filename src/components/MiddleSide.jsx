"use client";
import Header from "./Header";
import Leads from "./LeadsModal";
import Table from "./Table";
import LeadInfo from "./LeadInfo";
import AgentSkill from "./AgentSkill";
import AppContext from "@/context/context";
import { use, useContext } from "react";
const MiddleSide = () => {
  const { agentSkill, toggleLead } = useContext(AppContext);
  return (
    <div className="lg:p-1 h-[100svh] lg:overflow-hidden ">
      <Header />
      <Leads />
      <Table />
      {toggleLead && <LeadInfo />}
      {agentSkill && <AgentSkill />}
    </div>
  );
};

export default MiddleSide;
