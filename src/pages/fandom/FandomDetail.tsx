import MediaPreviewHeader from "@/components/fandom/MediaPreviewHeader";
import NavBar from "@/components/ui/NavBar";
import { useState } from "react";

export default function FandomDetail() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["소개", "질의응답", "히스토리", "팬질문"];
  return (
    <>
      <MediaPreviewHeader
        imageSrc="https://cdn.hankyung.com/photo/202410/01.38353572.1.jpg"
        fandomProfile={{
          profileImageSrc:
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg",
          fandomName: "QWER",
          fandomDescription: "가입 일자: 2021년 10월 10일",
        }}
        tab={{
          tabs,
          activeTab,
          onClick: (tab: string) => {
            setActiveTab(tab);
          },
        }}
      />
      <NavBar />
    </>
  );
}
