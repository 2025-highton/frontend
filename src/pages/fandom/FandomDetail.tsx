import { client } from "@/api/axios";
import MediaPreviewHeader from "@/components/fandom/MediaPreviewHeader";
import TabProvider from "@/components/fandom/TabProvider";
import { useImage } from "@/hooks/useImage";
import { getTime } from "@/time";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type FandomTab = "소개" | "머플" | "히스토리" | "팬질문";

export interface FandomDetailData {
  id: number;
  name: string;
  desc: string;
  datetime: string;
  owner_id: number;
  benner_img_id: number;
  profile_img_id: number;
  user_ids: number[];
}

export default function FandomDetail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<FandomDetailData>();
  const [bannerImage, setBannerImage] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<FandomTab>("소개");
  const tabs = ["소개", "머플", "히스토리", "팬질문"];
  const { getImage } = useImage();
  const myId = localStorage.getItem("id");

  const getFandomDetailData = async () => {
    try {
      const response = await client({
        method: "GET",
        url: `/fandom/${id}`,
      });
      if (response.status == 200) {
        setDetailData(response.data);
        // 이미지 로드
        const bannerImg = await getImage(
          response.data.benner_img_id
        );
        const profileImg = await getImage(
          response.data.profile_img_id
        );
        setBannerImage(bannerImg);
        setProfileImage(profileImg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFandomDetailData();
  }, []);

  return (
    <>
      <MediaPreviewHeader
        imageSrc={bannerImage || "https://via.placeholder.com/800x400"}
        fandomProfile={{
          profileImageSrc:
            profileImage || "https://via.placeholder.com/100x100",
          fandomName: detailData?.name || "불러오는 중...",
          fandomDescription: `가입 일자: ${
            getTime(new Date(detailData?.datetime as string)) ??
            "불러오는 중..."
          }`,
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
