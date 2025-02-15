import QuestionItem from "@/components/common/QuestionItem";
import ChooseQuestionSection from "@/components/QnA/admin/ChooseQuestionSection";
import FandomQnAThumbnail from "@/components/QnA/FandomThumbnail";
import { VStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import NavBar from "@/components/ui/NavBar";
import Title from "@/components/ui/Title";
import { Suspense, useEffect, useState } from "react";

export default function QnA() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const is_favor = localStorage.getItem("is_favor");
    setIsAdmin(is_favor === "true");
  }, []);

  return (
    <>
      {!isAdmin ? (
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
        </Layout>
      ) : (
        <>
          <ChooseQuestionSection />
          <Layout>
            <VStack gap={20} style={{ padding: "30px 0" }}>
              {Array.from({ length: 10 }).map((_, idx) => (
                <QuestionItem
                  key={idx}
                  idx={idx + 2}
                  question="QWER 질문입니다."
                  content="QWER 답변입니다."
                  profileId="https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
                />
              ))}
            </VStack>
          </Layout>
        </>
      )}
      <NavBar />
    </>
  );
}
