import { Flex } from "@/components/ui";
import s from "./style.module.scss";
import { useEffect, useState } from "react";
import { client } from "@/api/axios";
import QuestionItem from "@/components/common/QuestionItem";

export default function () {
  const [questionList, setQuestionList] = useState([]);

  const getQuestionList = async () => {
    await client({
      method: "GET",
      params: {},
    });
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  return (
    <>
      <Flex direction="column" gap={10} justify="center">
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
        />
        <QuestionItem
          idx={1}
          question={
            "질문하세요질문질문~?sssfwfdkdsfdsfwwfljdslsdljdklsjflkdsjlkslsdjfs"
          }
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
        />
        <QuestionItem
          idx={1}
          question={"질문하세요질문질문~?"}
          content={"대답대답대답대답ㅇㄹ늂아ㅠㄱㄹㄷㅇ"}
          profileId={
            "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg"
          }
        />
      </Flex>
    </>
  );
}
