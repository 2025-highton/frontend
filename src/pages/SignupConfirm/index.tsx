import { Button, VStack } from "@/components/ui";
import BackButtonHeader from "@/components/ui/BackButtonHeader";
import Layout from "@/components/ui/Layout";

import { IoCloseOutline } from "react-icons/io5";

import s from "./style.module.scss";
import Snowman from "@/components/icon/Snowman";
import { useNavigate } from "react-router-dom";

export default function MembershipConfirm() {
  const navigate = useNavigate();
  return (
    <Layout>
      <BackButtonHeader
        hideBackButton
        rightContent={<IoCloseOutline size={40} />}
      >
        회원가입
      </BackButtonHeader>
      <VStack
        fullWidth
        align="center"
        justify="center"
        gap={30}
        className={s.confirmContent}
      >
        <Snowman />
        <span>
          <b>회원가입</b>이 완료되었습니다!
        </span>
      </VStack>
      <div className={s.confirm}>
        <Button onClick={() => navigate("/")} style={{ width: "100%" }}>
          홈으로
        </Button>
      </div>
    </Layout>
  );
}
