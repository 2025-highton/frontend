import FandomProfile from "@/components/fandom/FandomProfile";
import MediaPreviewHeader from "@/components/fandom/MediaPreviewHeader";
import Tab from "@/components/ui/Tab";
import { useState } from "react";

export default function FandomDetail() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <>
      <MediaPreviewHeader imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzlaqFaLoi5T625SHM81VVE7LV4T2nGN8UA&s" />
      <FandomProfile
        profileImageSrc="https://phinf.wevpstatic.net/MjAyNDA5MjRfMTU0/MDAxNzI3MTY4MzQwODAz.inbxWmasfUxMZ6aK-CtXze5AY7GpGqCmjhBrrFjKMIIg.tRb51nQXrv-IPd9D1sraaYHnadDBh_93mVHX2T90H7Eg.JPEG/0b97f398-b833-4283-a1ba-7acaa3249370.jpeg?type=w670"
        fandomName="NCT 127"
        fandomDescription="123,123명 가입"
      />
      <Tab tabs={tabs} activeTab={activeTab} onClick={setActiveTab} />
    </>
  );
}
