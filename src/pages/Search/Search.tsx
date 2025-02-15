import { Flex, HStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import { IoSearch } from "react-icons/io5";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Search() {
  const [recentSearch, setRecentSearch] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRecentSearchData = () => {
    const storedSearches = localStorage.getItem("recentSearch");
    if (storedSearches) {
      setRecentSearch(JSON.parse(storedSearches));
    }
  };

  const submitSearch = () => {
    if (searchTerm.length < 0) return;
    console.log("ddd");
    const updatedSearch = [searchTerm, ...recentSearch].slice(0, 10);
    setRecentSearch(updatedSearch);
    localStorage.setItem("recentSearch", JSON.stringify(updatedSearch));
    setSearchTerm("");
  };

  useEffect(() => {
    getRecentSearchData();
  }, []);

  return (
    <>
      <HStack className={s.inputContainer} align="center" gap={10}>
        <input
          className={s.input}
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={submitSearch}
        />
        <IoSearch size={20} color="bf3131" onClick={submitSearch} />
      </HStack>{" "}
      <Layout>
        <section className={s.recentSearchContainer}>
          <h2>최근 검색어</h2>
          <div>
            {recentSearch.length > 0 ? (
              recentSearch.map((search, index) => (
                <div key={index} className={s.searchItem}>
                  <Link to={`/search/${search}`}>{search}</Link>
                </div>
              ))
            ) : (
              <p>최근 검색어가 없습니다.</p>
            )}
          </div>
        </section>
        <Flex direction="column">
          <h2>{}</h2>
          <Flex direction="column">"검색리스트"</Flex>
        </Flex>
      </Layout>
    </>
  );
}
