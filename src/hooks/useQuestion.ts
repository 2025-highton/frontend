import { client } from "@/api/axios";

interface Question {
  id: number;
  datetime: string;
  fandom_id: number;
  publisher_id: number;
  question: string;
  favor_answer: string | null;
  answer_ids: number[];
}

export const useQuestion = () => {
  const getFandomQuestions = async (fandomId: number): Promise<Question[]> => {
    try {
      const response = await client.get(`/question`, {
        params: {
          type: "fandom",
          id: fandomId,
          offset: 0,
          limit: 100,
        },
      });
      return response.data;
    } catch (error) {
      console.error("질문 로드 실패:", error);
      return [];
    }
  };

  return { getFandomQuestions };
};
