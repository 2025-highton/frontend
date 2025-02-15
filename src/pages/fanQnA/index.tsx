import QuestionByFan from "@/components/QnA/QuestionByFan";
import { VStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import NavBar from "@/components/ui/NavBar";

export default function FanQnA() {
  return (
    <Layout>
      <VStack gap={15}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <QuestionByFan
            key={idx}
            id="1"
            fan={{
              profileImageSrc:
                "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg",
              name: "김팬",
              content:
                "계절이 지나가는 하늘에는 가을로 가득 차 있습니다..... 나는 아무 걱정도 없이 가을 속의 별",
            }}
          />
        ))}
      </VStack>
      <NavBar />
    </Layout>
  );
}
