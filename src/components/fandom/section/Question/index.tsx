import { Button, VStack } from "@/components/ui";
import FandomSectionTitle from "../Title";
import QuestionRequestModal from "../QuestionModal";
import { useState } from "react";

export default function FandomQuestion() {
  const [questionRequestModal, setQuestionRequestModal] = useState(false);
  return (
    <VStack>
      <FandomSectionTitle mb={20}>팬질문</FandomSectionTitle>
      <Button onClick={() => setQuestionRequestModal(true)}>팬 질문하기</Button>
      {questionRequestModal && (
        <QuestionRequestModal onClose={() => setQuestionRequestModal(false)} />
      )}
    </VStack>
  );
}
