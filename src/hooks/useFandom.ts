import { client } from "@/api/axios";

interface Fandom {
  id: number;
  datetime: string;
  owner_id: number;
  user_ids: number[];
  desc: string;
  name: string;
  benner_img_id: number;
  profile_img_id: number;
}

export const useHotFandom = () => {
  const getHotFandom = async (): Promise<Fandom[]> => {
    const { data } = await client.get("/fandom/hot?offset=0&limit=100");
    return data;
  };

  return { getHotFandom };
};
