import { client } from "@/api/axios";
import Logo from "@/components/icon/Logo";
import { Button, VStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import { useState } from "react";
export default function Login() {
  const [login, setLogin] = useState({
    email: "aronia@gmail.com",
    password: "1111",
    is_favor: true,
  });

  const submitHandle = () => {
    client({
      method: "POST",
      url: "/user",
      params: {
        email: login.email,
        password: login.password,
        is_favor: login.is_favor,
      },
    });

    if (login.is_favor) {
      client({
        method: "POST",
        url: "/fandom",
        data: "",
      });
    }
  };
  return (
    <Layout>
      <form onSubmit={submitHandle}>
        <VStack gap={40} style={{ width: "100%" }}>
          <Logo />
          <input
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            type="text"
          />
          <input
            value={login.password}
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <input
            type="checkbox"
            value={login.is_favor}
            onChange={() => setLogin({ ...login, is_favor: !login.is_favor })}
          />
          {login.is_favor && (
            <>
              <input name="benner_img" type="file" />
              <input name="desc" type="text" />
            </>
          )}
          <Button type="submit">로그인</Button>
        </VStack>
      </form>
    </Layout>
  );
}
