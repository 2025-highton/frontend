import { Button, VStack } from "@/components/ui";
import FandomSectionTitle from "../Title";

import s from "./style.module.scss";
import Snowman from "@/components/icon/Snowman";
import { useNavigate } from "react-router-dom";

export default function FandomQuestionWithMembership() {
  const navigate = useNavigate();
  const redirectMembership = () => {
    navigate("/membership");
  };
  return (
    <VStack>
      <FandomSectionTitle>팬질문</FandomSectionTitle>
      <VStack
        as={"section"}
        align="center"
        justify="center"
        gap={30}
        className={s.no}
      >
        <Snowman />
        <span>
          멤버쉽 가입 후 사용 가능한
          <br />
          기능입니다
        </span>
      </VStack>
      <Button onClick={redirectMembership}>멤버쉽 가입하기</Button>
    </VStack>
  );
}
