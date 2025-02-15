import { Button, VStack } from "@/components/ui";
import { ButtonSize, ButtonVariant } from "@/components/ui/Button/index.type";

import s from "./style.module.scss";

export default function ChooseQuestionSection() {
  return (
    <VStack align="center" gap={15} className={s.container}>
      <Button
        variant={ButtonVariant.WHITE}
        size={ButtonSize.MEDIUM}
        style={{ width: "100%" }}
      >
        오늘의 질문 답변하기
      </Button>
      <Button
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.MEDIUM}
        style={{ width: "100%" }}
      >
        팬 질문 답변하기
      </Button>
    </VStack>
  );
}
