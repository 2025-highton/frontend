import { Button, HStack, VStack } from "@/components/ui";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import s from "./style.module.scss";

import { AiOutlineClose } from "react-icons/ai";
import { ButtonSize } from "@/components/ui/Button/index.type";
import { client } from "@/api/axios";

interface QuestionRequestModalProps {
  onClose: () => void;
}

export default function QuestionRequestModal({
  onClose,
}: QuestionRequestModalProps) {
  const { id } = useParams();
  const userId = localStorage.getItem("id");
  const [isClosing, setIsClosing] = useState(false);
  const [question, setQuestion] = useState("");
  const submitQuestion = () => {
    client({
      method: "POST",
      data: {
        fandom_id: id,
        publisher_id: userId,
        question: question,
      },
    });
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return createPortal(
    <>
      <div
        className={`${s.modal} ${isClosing ? s.modalExit : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <HStack className={s.header} align="center" justify="between">
          <div />
          <h1 className={s.title}>질문을 적어주세요!</h1>
          <AiOutlineClose className={s.close} onClick={handleClose} />
        </HStack>
        <VStack gap={15} style={{ paddingBottom: 20 }}>
          <textarea
            placeholder="질문을 입력해주세요"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={s.input}
          />
          <Button size={ButtonSize.MEDIUM} onClick={() => submitQuestion()}>
            질문하기
          </Button>
        </VStack>
      </div>
      <div
        className={`${s.backdrop} ${isClosing ? s.backdropExit : ""}`}
        onClick={handleClose}
      />
    </>,
    document.body
  );
}
