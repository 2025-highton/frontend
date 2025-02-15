import { Flex, HStack } from "@/components/ui";
import Layout from "@/components/ui/Layout";
import { IoSearch } from "react-icons/io5";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "@/api/axios";
import FandomQnAThumbnail from "@/components/QnA/FandomThumbnail";
import useDebounce from "@/hooks/useDebounce";
import Skeleton from "@/components/ui/Skeleton";
import { useImage } from "@/hooks/useImage";

interface Fandom {
  id: string;
  datetime: string;
  owner_id: string;
  user_ids: string[];
  desc: string;
  benner_img_id: string;
  profile_img_id: string;
  name: string;
}

export default function Search() {
  const [recentSearch, setRecentSearch] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Fandom[] | null>(null); // null로 초기값 변경
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { getImage } = useImage();
  const [fandomImages, setFandomImages] = useState<{ [key: string]: string }>(
    {}
  );

  const getRecentSearchData = () => {
    const storedSearches = localStorage.getItem("recentSearch");
    if (storedSearches) {
      setRecentSearch(JSON.parse(storedSearches));
    }
  };

  const submitSearch = async () => {
    if (!searchTerm.trim()) return;

    const updatedSearch = [
      searchTerm,
      ...recentSearch.filter((item) => item !== searchTerm),
    ].slice(0, 10);
    setRecentSearch(updatedSearch);
    localStorage.setItem("recentSearch", JSON.stringify(updatedSearch));

    setIsLoading(true);
    setError(null);
    try {
      const res = await client.get(
        `/fandom?type=name&name=${encodeURIComponent(searchTerm)}`
      );
      console.log("API 응답 데이터:", res.data);

      // 데이터 구조 처리 로직 수정
      if (res.data && typeof res.data === "object") {
        // 응답이 객체인 경우 (단일 결과)
        setData([res.data]);
      } else if (Array.isArray(res.data)) {
        // 응답이 배열인 경우 (다중 결과)
        setData(res.data);
      } else {
        setData([]);
      }

      // 데이터 구조 디버깅
      console.log("처리된 데이터:", data);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
      setError("검색 중 오류가 발생했습니다.");
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loadFandomImages = async (fandoms: Fandom[]) => {
    const imagePromises = fandoms.flatMap((fandom) => {
      const promises = [];
      if (fandom.profile_img_id) {
        promises.push(
          getImage(fandom.profile_img_id).then((url) => ({
            id: fandom.profile_img_id,
            url,
          }))
        );
      }
      if (fandom.benner_img_id) {
        promises.push(
          getImage(fandom.benner_img_id).then((url) => ({
            id: fandom.benner_img_id,
            url,
          }))
        );
      }
      return promises;
    });

    const images = await Promise.all(imagePromises);
    const imageMap = images.reduce((acc, img) => {
      if (img && img.url) {
        acc[img.id] = img.url;
      }
      return acc;
    }, {} as { [key: string]: string });

    setFandomImages(imageMap);
  };

  // Cleanup function for object URLs
  useEffect(() => {
    return () => {
      // Cleanup object URLs when component unmounts
      Object.values(fandomImages).forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [fandomImages]);

  useEffect(() => {
    getRecentSearchData();
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      submitSearch();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (data && data.length > 0) {
      loadFandomImages(data);
    }
  }, [data]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  return (
    <>
      <HStack className={s.inputContainer} align="center" gap={10}>
        <input
          className={s.input}
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <IoSearch
          size={20}
          color="bf3131"
          onClick={submitSearch}
          style={{ cursor: "pointer" }}
        />
      </HStack>
      <Layout>
        {!searchTerm && (
          <section className={s.recentSearchContainer}>
            {!searchTerm && <h2>최근 검색어</h2>}
            <div>
              {recentSearch.length > 0 && !searchTerm
                ? recentSearch.map((search, index) => (
                    <div key={index} className={s.searchItem}>
                      <Link to={`/search/${search}`}>{search}</Link>
                    </div>
                  ))
                : !searchTerm && <div>최근 검색어가 없습니다.</div>}
            </div>
          </section>
        )}
        {searchTerm && (
          <Flex direction="column">
            <h2>"{searchTerm}" 검색결과</h2>
            {error ? (
              <div className={s.noResults}>검색 결과가 없습니다.</div>
            ) : isLoading ? (
              <Flex direction="column" gap={16}>
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} height="200px" />
                ))}
              </Flex>
            ) : (
              <Flex direction="column" gap={16}>
                {" "}
                {/* gap 추가 */}
                {data && data.length > 0 ? (
                  data.map((fandom) => (
                    <Link
                      to={`/fandom/${fandom.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <FandomQnAThumbnail
                        key={fandom.id}
                        thumbnailSrc={
                          fandom.benner_img_id
                            ? fandomImages[fandom.benner_img_id]
                            : ""
                        }
                        profileImageSrc={
                          fandom.profile_img_id
                            ? fandomImages[fandom.profile_img_id]
                            : ""
                        }
                        fandomName={fandom.name || "이름 없음"}
                      />
                    </Link>
                  ))
                ) : (
                  <div className={s.noResults}>검색 결과가 없습니다.</div>
                )}
              </Flex>
            )}
          </Flex>
        )}
      </Layout>
    </>
  );
}
