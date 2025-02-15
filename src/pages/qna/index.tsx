import FandomQnAThumbnail from "@/components/QnA/FandomThumbnail";
import { VStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import NavBar from "@/components/ui/NavBar";
import Title from "@/components/ui/Title";
import { Suspense } from "react";

export default function QnA() {
  return (
    <Layout>
      <Title>질의응답</Title>
      <VStack gap={20}>
        <Suspense fallback={<div>Loading...</div>}>
          <FandomQnAThumbnail
            fandomName="QWER"
            profileImageSrc="https://kr.wowkorea.live/img/topic/26/133492/273578_1280W.webp"
            thumbnailSrc="https://i.ytimg.com/vi/QonXUELzeRw/maxresdefault.jpg"
          />
          <FandomQnAThumbnail
            fandomName="TWICE"
            profileImageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logo_of_TWICE.svg/1839px-Logo_of_TWICE.svg.png"
            thumbnailSrc="https://i.namu.wiki/i/MbL1_mxWdN9HYjLZXAMn4ywaeWiGmtafAqeL6wqlS7v8a-8qXSyC4yx_SzReXkHxTsS7PKLV2BF3jfNgqyGymA.webp"
          />
        </Suspense>
      </VStack>
      <NavBar />
    </Layout>
  );
}
