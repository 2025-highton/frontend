import FandomProfile from "@/components/fandom/FandomProfile";
import MediaPreviewHeader from "@/components/fandom/MediaPreviewHeader";
import Tab from "@/components/ui/Tab";
import { useState } from "react";

export default function FandomDetail() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <>
      <MediaPreviewHeader imageSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      <FandomProfile
        profileImageSrc="https://nct-jp.net/assets/images/sp/slide_20241101.jpg"
        fandomName="NCT 아이고"
        fandomDescription="아이고"
      />
      <Tab tabs={tabs} activeTab={activeTab} onClick={setActiveTab} />
    </>
  );
}
