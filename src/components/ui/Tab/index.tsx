import { FandomTab } from "@/pages/fandom/FandomDetail";
import HStack from "../HStack";
import s from "./style.module.scss";

export interface TabProps {
  tabs: Array<string>;
  activeTab: string;
  onClick: (tab: FandomTab) => void;
}

export default function Tab({ tabs, activeTab, onClick }: TabProps) {
  return (
    <HStack className={s.tabContainer}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${s.tab} ${activeTab === tab ? s.activeTab : ""}`}
          onClick={() => onClick(tab as FandomTab)}
        >
          {tab}
        </div>
      ))}
    </HStack>
  );
}
