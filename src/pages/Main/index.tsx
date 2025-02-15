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
import { useEffect, useState } from "react";

export default function Main() {
  const { getHotFandom } = useHotFandom();
  const { getImage } = useImage();
  const [hotImages, setHotImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotFandom = async () => {
      try {
        setIsLoading(true);
        const hotFandomData = await getHotFandom();

        const processedImages = await Promise.all(
          hotFandomData.map(async (fandom) => ({
            iamgeUrl: await getImage(String(fandom.benner_img_id)),
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

    fetchHotFandom();
  }, []);

  const mockImageData = [
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandom/12",
      title: "QWER",
    },
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandom/12",
      title: "QWER",
    },
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandom/12",
      title: "QWER",
    },
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandom/12",
    },
  ];

  return (
    <>
      <Header />
      <VStack gap={30} align="center" style={{ width: "100%" }}>
        <SlideBanner images={mockImageData}></SlideBanner>
        <div className={s.innerBannerContainer}>
          <InnerCircleBanner images={mockImageData}></InnerCircleBanner>
        </div>
        <VStack style={{ width: "100%" }}>
          <h2 className={s.title}>새로운 머플러</h2>

          <CircleBanner
            style={{ padding: "20px 0 20px 30px" }}
            images={mockImageData}
          ></CircleBanner>
        </VStack>
        <VStack style={{ width: "100%" }}>
          <h2 className={s.title}>최고 인기 머플러</h2>
          <HotSlideBanner images={isLoading ? [] : hotImages}></HotSlideBanner>
        </VStack>
        <div style={{height: 70}} />
        <NavBar />
      </VStack>
    </>
  );
}
