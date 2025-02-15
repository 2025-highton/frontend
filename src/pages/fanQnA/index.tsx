import { client } from "@/api/axios";
import QuestionByFan from "@/components/QnA/QuestionByFan";
import { VStack } from "@/components/ui";
import BackButtonHeader from "@/components/ui/BackButtonHeader";
import Layout from "@/components/ui/Layout";
import NavBar from "@/components/ui/NavBar";
import { useEffect, useState } from "react";

export default function FanQnA() {
  const [listData, setListData] = useState();
  const [loading, setLoading] = useState(true);
  const fandom_id = localStorage.getItem("fandom_id");

  const getQuestionByFan = async () => {
    setLoading(true);
    try {
      const response = await client({
        method: "GET",
        url: "/question",
        params: {
          type: "fandom",
          id: fandom_id,
          offset: 0,
          limit: 100,
        },
      });

      if (response.status == 200) {
        setListData(response.data.filter((i) => !i.favor_answer));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestionByFan();
  }, []);

  return (
    <Layout>
      <BackButtonHeader>팬 질문</BackButtonHeader>
      <VStack gap={15}>
        {!loading && listData
          ? listData.map((i) => (
              <QuestionByFan
                id="1"
                fan={{
                  profileImageSrc:
                    "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg",
                  name: i.question,
                  content: i.favor_answer,
                }}
              />
            ))
          : null}
      </VStack>
      <NavBar />
    </Layout>
  );
}
