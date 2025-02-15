import Logo from "@/components/icon/Logo";
import s from "./Onboard.module.scss";
import { Button, VStack } from "@/components/ui";
import { ButtonVariant } from "@/components/ui/Button/index.type";
import Layout from "@/components/ui/Layout";
import { useNavigate } from "react-router-dom";

export default function Onboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <VStack className={s.content}>
        <Logo />
      </VStack>
      <VStack gap={6}>
        <Button onClick={() => navigate("/login")}>로그인</Button>
        <Button
          onClick={() => navigate("/signup")}
          variant={ButtonVariant.OUTLINE}
        >
          회원가입
        </Button>
      </VStack>
    </Layout>
  );
}
