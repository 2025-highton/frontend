import { Button, VStack } from "@/components/ui";
import { ButtonSize, ButtonVariant } from "@/components/ui/Button/index.type";

import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export default function ChooseQuestionSection() {
  const navigate = useNavigate();
  return (
    <VStack align="center" gap={15} className={s.container}>
      <Button
        onClick={() => navigate("")}
        variant={ButtonVariant.WHITE}
        size={ButtonSize.MEDIUM}
        style={{ width: "100%" }}
      >
        오늘의 질문 답변하기
      </Button>
      <Button
        onClick={() => navigate("fan")}
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.MEDIUM}
        style={{ width: "100%" }}
      >
        팬 질문 답변하기
      </Button>
    </VStack>
  );
}
