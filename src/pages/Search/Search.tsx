import { HStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";

import { IoSearch } from "react-icons/io5";

import s from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <>
      <HStack className={s.inputContainer} align="center" gap={10}>
        <IoSearch size={20} />
        <input
          className={s.input}
          type="text"
          placeholder="검색어를 입력하세요"
        />
      </HStack>
      <Layout>
        <section className={s.recentSearchContainer}>
          <h2>최근 검색어</h2>
          <div>
            <Link to={"/asd"}>NCT 127</Link>
            <Link to={"/asd"}>BBTS</Link>
            <Link to={"/asd"}>BTS</Link>
            <Link to={"/asd"}>엔ㅅ씨티</Link>
            <Link to={"/asd"}>엔ㅅ씨티</Link>
            <Link to={"/asd"}>엔ㅅ씨티</Link>
            <Link to={"/asd"}>엔ㅅ씨티</Link>
            <Link to={"/asd"}>엔ㅅ씨티</Link>
            <Link to={"/asd"}>엔ㅅ씨티</Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
