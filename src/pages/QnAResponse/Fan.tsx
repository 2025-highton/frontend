import BackButtonHeader from "@/components/ui/BackButtonHeader";
import Layout from "@/components/ui/Layout";

import { IoCloseOutline } from "react-icons/io5";

import s from "./style.module.scss";
import { Button, HStack, VStack } from "@/components/ui";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "@/api/axios";

export default function QnAResponseFan() {
  const navigate = useNavigate();
  const params = useParams();
  const [question, setQuestion] = useState("");
  const [fandomName, setFandomName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    client.get(`/question/${params.id}`).then((res) => {
      console.log(res.data);
      setQuestion(res.data.question);

      client.get(`/fandom/${res.data.fandom_id}`).then((res) => {
        setFandomName(res.data.name);
      })
    });
  }, []);

  function handleComplete() {
    // TODO: 완료 버튼 클릭 시 동작
    const id = localStorage.getItem("id") || 0;
    client.post('/answer', {
      question_id: params.id,
      publisher_id: id,
      answer: content,
    }).then(() => {
      alert('답변이 등록되었습니다.');
      navigate(-1);
    });
  }

  return (
    <Layout>
      <BackButtonHeader
        hideBackButton
        rightContent={<IoCloseOutline size={30} onClick={() => navigate(-1)} />}
      >
        팬 질문
      </BackButtonHeader>

      <VStack gap={10} className={s.questionContainer}>
        <h1 className={s.title}>Q. 01</h1>
        <VStack as={"article"} gap={15}>
          <HStack align="center" gap={10}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile"
            />
            <span>익명</span>
          </HStack>
          <span>
            {question}
          </span>
        </VStack>
      </VStack>
      <VStack gap={10} className={s.responseContainer}>
        <h1 className={s.title}>{fandomName}</h1>
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
