import BackButtonHeader from "@/components/ui/BackButtonHeader";
import Layout from "@/components/ui/Layout";

import { IoCloseOutline } from "react-icons/io5";

import s from "./style.module.scss";
import { Button, VStack } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getTodayQuestion } from "@/question";
import { client } from "@/api/axios";

export default function QnAResponseToday() {
  const navigate = useNavigate();
  const question = useRef(getTodayQuestion());
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fandomId = localStorage.getItem("fandomId") || 0;
    client.get(`/fandom/${fandomId}`).then((res) => {
      setName(res.data.name);
    });
  }, []);

  function handleComplete() {
    const fandomId = localStorage.getItem("fandomId") || 0;
    const id = localStorage.getItem("id") || 0;
    // TODO: 완료 버튼 클릭 시 동작
    client.post('/question/plus-answer', {
      fandom_id: fandomId,
      publisher_id: id,
      question: question.current,
      answer: content,
    }).then(() => {
      alert('답변이 등록되었습니다.');
      navigate(-1);
    })
  }

  return (
    <Layout>
      <BackButtonHeader
        hideBackButton
        rightContent={<IoCloseOutline size={30} onClick={() => navigate(-1)} />}
      >
        오늘의 질문
      </BackButtonHeader>
      <VStack gap={10} className={s.questionContainer}>
        <h1 className={s.title}>Q. 01</h1>
        <article>
          {question.current}
        </article>
      </VStack>
      <VStack gap={10} className={s.responseContainer}>
        <h1 className={s.title}>{name}</h1>
        <textarea onChange={(e) => setContent(e.target.value)} style={{resize: 'none'}} />
      </VStack>
      <div className={s.buttonContainer}>
        <Button style={{ width: "100%" }} onClick={() => handleComplete()}>
          완료
        </Button>
      </div>
    </Layout>
  );
}
