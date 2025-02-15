import QuestionItem from "@/components/common/QuestionItem";
import { useQuestion } from "@/hooks/useQuestion";
import { useEffect, useState } from "react";
import s from "./style.module.scss";

interface Props {
  fandomId: number;
}

export default function RecentQuestionList({ fandomId }: Props) {
  const { getFandomQuestions } = useQuestion();
  const [questions, setQuestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      const data = await getFandomQuestions(fandomId);
      setQuestions(data);
      setIsLoading(false);
    };

    fetchQuestions();
  }, [fandomId]);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      {questions.length === 0 || !questions.some((q) => q.favor_answer) ? (
        <div className={s.noData}>아직 답변한 질문이 없습니다.</div>
      ) : (
        questions.map(
          (question, idx) =>
            question.favor_answer && (
              <QuestionItem
                key={question.id}
                idx={idx + 1}
                question={question.question}
                content={question.favor_answer}
                profileId="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
            )
        )
      )}
    </>
  );
}
