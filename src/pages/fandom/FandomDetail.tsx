import MediaPreviewHeader from "@/components/fandom/MediaPreviewHeader";
import TabProvider from "@/components/fandom/TabProvider";
import { useState } from "react";

export type FandomTab = "소개" | "질의응답" | "히스토리" | "팬질문";

export default function FandomDetail() {
  const [activeTab, setActiveTab] = useState<
    "소개" | "질의응답" | "히스토리" | "팬질문"
  >("소개");
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
          onClick: (tab: FandomTab) => {
            setActiveTab(tab);
          },
        }}
      />
      <TabProvider tabs={activeTab} />
    </>
  );
}
