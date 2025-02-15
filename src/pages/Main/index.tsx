import SlideBanner, {
  CircleBanner,
  HotSlideBanner,
  InnerCircleBanner,
} from "@/components/fandom/SlideBanner";
import Header from "@/components/ui/Header";
import NavBar from "@/components/ui/NavBar";
import s from "./style.module.scss";
import { VStack } from "@/components/ui";
import { useHotFandom } from "@/hooks/useFandom";
import { useImage } from "@/hooks/useImage";
import { useFandomRecent } from "@/hooks/useFandomRecent";
import { useEffect, useState } from "react";

interface BannerImage {
  imageUrl: string;
  redirectUrl: string;
  title?: string;
}

export default function Main() {
  const { getHotFandom } = useHotFandom();
  const { getRecentFandom } = useFandomRecent();
  const { getImage } = useImage();
  const [hotImages, setHotImages] = useState<BannerImage[]>([]);
  const [recentImages, setRecentImages] = useState<BannerImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecentLoading, setIsRecentLoading] = useState(true);

  useEffect(() => {
    const fetchHotFandom = async () => {
      try {
        setIsLoading(true);
        const hotFandomData = await getHotFandom();

        const processedImages = await Promise.all(
          hotFandomData.map(async (fandom) => ({
            imageUrl: await getImage(String(fandom.benner_img_id)),
            redirectUrl: `/fandom/${fandom.id}`,
            title: fandom.name,
          }))
        );

        setHotImages(processedImages);
      } catch (error) {
        console.error("Failed to fetch hot fandom:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchRecentFandom = async () => {
      try {
        setIsRecentLoading(true);
        const recentFandomData = await getRecentFandom();

        const processedImages = await Promise.all(
          recentFandomData.map(async (fandom) => ({
            imageUrl: await getImage(String(fandom.benner_img_id)),
            redirectUrl: `/fandom/${fandom.id}`,
            title: fandom.name,
          }))
        );

        setRecentImages(processedImages);
      } catch (error) {
        console.error("Failed to fetch recent fandom:", error);
      } finally {
        setIsRecentLoading(false);
      }
    };

    fetchHotFandom();
    fetchRecentFandom();
  }, []);

  return (
    <>
      <Header />
      <VStack gap={30} align="center" style={{ width: "100%" }}>
        <SlideBanner images={isLoading ? [] : hotImages}></SlideBanner>
        <div className={s.innerBannerContainer}>
          <InnerCircleBanner
            images={isLoading ? [] : hotImages}
          ></InnerCircleBanner>
        </div>
        <VStack style={{ width: "100%" }}>
          <h2 className={s.title}>새로운 머플러</h2>
          <CircleBanner
            style={{ padding: "20px 0 20px 30px" }}
            images={isRecentLoading ? [] : recentImages}
          ></CircleBanner>
        </VStack>
        <VStack style={{ width: "100%" }}>
          <h2 className={s.title}>최고 인기 머플러</h2>
          <HotSlideBanner images={isLoading ? [] : hotImages}></HotSlideBanner>
        </VStack>
        <div style={{ height: 70 }} />
        <NavBar />
      </VStack>
    </>
  );
}