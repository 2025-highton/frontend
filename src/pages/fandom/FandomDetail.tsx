import { client } from "@/api/axios";
import MediaPreviewHeader from "@/components/fandom/MediaPreviewHeader";
import TabProvider from "@/components/fandom/TabProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type FandomTab = "소개" | "머플" | "히스토리" | "팬질문";

export default function FandomDetail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [activeTab, setActiveTab] = useState<
    "소개" | "머플" | "히스토리" | "팬질문"
  >("소개");
  const tabs = ["소개", "머플", "히스토리", "팬질문"];

  const getFandomDetailData = async () => {
    try {
      const response = await client({
        method: "GET",
        url: `/fandom/${id}`,
      });
      if (response.status == 200) {
        setDetailData(response.data);
      }
    } catch (error) {
      console.Console.log(error);
    }
  };

  useEffect(() => {
    getFandomDetailData();
  }, []);

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
      <TabProvider tabs={activeTab} data={detailData} />
    </>
  );
}
