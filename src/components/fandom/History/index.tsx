import { VStack } from "@/components/ui";
import s from "./style.module.scss";
import QuestionItem from "@/components/common/QuestionItem";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    console.log("histort");
  }, []);

  return (
    <VStack>
      <h1 className={s.title}>히스토리</h1>
      <VStack gap={24} justify="center">
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
          comment="질문하세요질문질문"
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
          comment="질문하세요질문질문"
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
          comment="질문하세요질문질문"
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
          comment="질문하세요질문질문"
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
          comment="질문하세요질문질문"
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
          comment="질문하세요질문질문"
        />
      </VStack>
    </VStack>
  );
}
