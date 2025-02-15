import HStack from "../HStack";
import s from "./style.module.scss";

export interface TabProps {
  tabs: Array<string>;
  activeTab: string;
  onClick: (tab: string) => void;
}

export default function Tab({ tabs, activeTab, onClick }: TabProps) {
  return (
    <HStack className={s.tabContainer}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${s.tab} ${activeTab === tab ? s.activeTab : ""}`}
          onClick={() => onClick(tab)}
        >
          {tab}
        </div>
      ))}
    </HStack>
  );
}
