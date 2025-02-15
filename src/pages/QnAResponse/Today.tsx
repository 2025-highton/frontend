import BackButtonHeader from "@/components/ui/BackButtonHeader";
import Layout from "@/components/ui/Layout";

import { IoCloseOutline } from "react-icons/io5";

import s from "./style.module.scss";
import { Button, VStack } from "@/components/ui";
import { useNavigate } from "react-router-dom";

export default function QnAResponseToday() {
  const navigate = useNavigate();

  function handleComplete() {
    // TODO: 완료 버튼 클릭 시 동작
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
          계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도
          없이 가을 속의 별
        </article>
      </VStack>
      <VStack gap={10} className={s.responseContainer}>
        <h1 className={s.title}>Q. 01</h1>
        <textarea style={{resize: 'none'}} />
      </VStack>
      <div className={s.buttonContainer}>
        <Button style={{ width: "100%" }} onClick={() => handleComplete()}>
          완료
        </Button>
      </div>
    </Layout>
  );
}
