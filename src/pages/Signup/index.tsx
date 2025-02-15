import { client, clientFile } from "@/api/axios";
import { Button, VStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import { useState } from "react";
import s from "./style.module.scss";
import fillHeart from "@/components/icon/fillHeart";
import lineHeart from "@/components/icon/lineHeart";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    is_favor: false,
  });

  const [fandomData, setFandomData] = useState({
    bannerImg: null,
    desc: "",
    name: "",
    profile_img: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userResponse = await client.post("/user", {
        email: login.email,
        password: login.password,
        is_favor: login.is_favor,
      });

      if (login.is_favor && userResponse.status === 201) {
        const formData = new FormData();
        if (fandomData.bannerImg) {
          formData.append("benner_img", fandomData.bannerImg);
        }
        if (fandomData.profile_img) {
          formData.append("profile_img", fandomData.profile_img);
        }
        formData.append("desc", fandomData.desc);
        formData.append("name", fandomData.name);
        formData.append("owner_id", userResponse.data.id);
        await clientFile({
          method: "POST",
          url: "/fandom",
          data: formData,
        });
        navigate("/signup/confirm");
      } else {
        navigate("/signup/confirm");
      }
    } catch (error) {
      console.error(error);
      setMessage("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <form onSubmit={submitHandle}>
        <VStack gap={40} style={{ width: "100%" }}>
          <h2>회원가입</h2>
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
          <label
            className={s.row}
            onClick={() => setLogin({ ...login, is_favor: !login.is_favor })}
          >
            {login.is_favor ? fillHeart() : lineHeart()}
            <p>팬덤 만들기</p>
          </label>
          {login.is_favor && (
            <>
              <VStack gap={10}>
                <label>팬덤이름</label>
                <input
                  type="text"
                  name="name"
                  className={s.inputContainer}
                  required
                  value={fandomData.name}
                  onChange={(e) =>
                    setFandomData({ ...fandomData, name: e.target.value })
                  }
                />
              </VStack>
              <VStack gap={10}>
                <label>배너 이미지</label>
                <input
                  name="banner_img"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFandomData({
                      ...fandomData,
                      bannerImg: e.target.files?.[0] || null,
                    })
                  }
                />
              </VStack>
              <VStack gap={10}>
                <label>프로필 이미지</label>
                <input
                  name="banner_img"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFandomData({
                      ...fandomData,
                      profile_img: e.target.files?.[0] || null,
                    })
                  }
                />
              </VStack>
              <VStack gap={10}>
                <label>팬덤 설명</label>
                <input
                  name="desc"
                  type="text"
                  className={s.inputContainer}
                  value={fandomData.desc}
                  onChange={(e) =>
                    setFandomData({ ...fandomData, desc: e.target.value })
                  }
                  placeholder="팬덤에 대한 설명을 입력하세요"
                />
              </VStack>
            </>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? "처리 중..." : "회원가입"}
          </Button>
          {message && <p className={s.message}>{message}</p>}
        </VStack>
      </form>
    </Layout>
  );
}
