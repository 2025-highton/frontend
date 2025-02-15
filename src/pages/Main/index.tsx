import SlideBanner, {
  CircleBanner,
  HotSlideBanner,
  InnerCircleBanner,
} from "@/components/fandom/SlideBanner";
import Header from "@/components/ui/Header";
import Layout from "@/components/ui/Layout";
import NavBar from "@/components/ui/NavBar";
import s from "./style.module.scss";
import { VStack } from "@/components/ui";

export default function Main() {
  const mockImageData = [
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandum/12",
    },
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandum/12",
    },
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandum/12",
    },
    {
      iamgeUrl: "https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg",
      redirectUrl: "/fandum/12",
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

          <CircleBanner images={mockImageData}></CircleBanner>
        </VStack>
        <VStack style={{ width: "100%" }}>
          <h2 className={s.title}>최고 인기 머플러</h2>

          <HotSlideBanner images={mockImageData}></HotSlideBanner>
        </VStack>
        <NavBar />
      </VStack>
    </>
  );
}
