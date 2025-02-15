import BackButtonHeader from "@/components/ui/BackButtonHeader";
import Layout from "@/components/ui/Layout";

import { IoCloseOutline } from "react-icons/io5";

import s from "./style.module.scss";
import { Button, HStack, VStack } from "@/components/ui";
import { useNavigate } from "react-router-dom";

export default function QnAResponseFan() {
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
        팬 질문
      </BackButtonHeader>

      <VStack gap={10} className={s.questionContainer}>
        <h1 className={s.title}>Q. 01</h1>
        <VStack as={"article"} gap={15}>
          <HStack align="center" gap={10}>
            <img
              src="https://www.chosun.com/resizer/v2/ILPMAH7RI3HDRTYFHUZPDX7AYM.jpg?auth=0bd04425fba26b475c67128aa446de16be468a0bc20a4ed952bb57810180ec4c&width=616"
              alt="profile"
            />
            <span>김민수</span>
          </HStack>
          <span>
            계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도
            없이 가을 속의 별
          </span>
        </VStack>
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
