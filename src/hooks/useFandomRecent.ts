import { client } from "@/api/axios";

interface FandomData {
  id: number;
  datetime: string;
  owner_id: number;
  user_ids: number[];
  desc: string;
  name: string;
  benner_img_id: number;
  profile_img_id: number;
}

export const useFandomRecent = () => {
  const getRecentFandom = async (): Promise<FandomData[]> => {
    try {
      const response = await client.get("/fandom?offset=0&limit=100&type=id");
      return [...response.data].reverse();
    } catch (error) {
      console.error("최근 팬덤 로드 실패:", error);
      return [];
    }
  };

  return { getRecentFandom };
};
