import { client } from "@/api/axios";
import { Button, VStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import { useState } from "react";
import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "aronia@gmail.com",
    password: "1111",
  });

  const submitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 방지
    setLoading(true);
    const email = login.email;
    try {
      const res = await client({
        method: "GET",
        url: "/user",
        params: {
          email,
        },
      });
      console.log(res);
      if (res.status === 200) {
        const { id, is_favor } = res.data;
        localStorage.setItem("id", id);
        localStorage.setItem("is_favor", is_favor); // 로컬 스토리지에 저장

        navigate("/");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <form onSubmit={submitHandle}>
        <VStack
          gap={40}
          style={{ width: "100%", height: "100%" }}
          justify="center"
        >
          <h2>로그인</h2>
          <VStack gap={10}>
            <label>이메일</label>
            <input
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              type="email"
              className={s.inputContainer}
              placeholder="이메일을 입력하세요"
              required
            />
          </VStack>
          <VStack gap={10}>
            <label>비밀번호</label>
            <input
              value={login.password}
              type="password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              className={s.inputContainer}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </VStack>

          <Button type="submit" disabled={loading}>
            {loading ? "처리 중..." : "로그인"}
          </Button>
        </VStack>
      </form>
    </Layout>
  );
}
