import { client } from "@/api/axios";
import QuestionItem from "@/components/common/QuestionItem";
import ChooseQuestionSection from "@/components/QnA/admin/ChooseQuestionSection";
import FandomQnAThumbnail from "@/components/QnA/FandomThumbnail";
import RecentQuestionList from "@/components/QnA/RecentQuestionList";
import { VStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import NavBar from "@/components/ui/NavBar";
import Title from "@/components/ui/Title";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function QnA() {
  const [detailData, setDetailData] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getDetailData = async () => {
    try {
      setLoading(true);
      const response = await client({
        method: "GET",
        url: `/question/${id}`,
      });
      if (response.status == 200) {
        setDetailData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const is_favor = localStorage.getItem("is_favor");
    setIsAdmin(is_favor === "true");
    getDetailData();
  }, []);

  const fandomId = localStorage.getItem("fandom_id") || 0;

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
              <RecentQuestionList fandomId={fandomId as number} />
            </VStack>
          </Layout>
        </>
      )}
      <NavBar />
    </>
  );
}
