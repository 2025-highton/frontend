import { client } from "@/api/axios"

export const useImage = () => {
    const getImage = async (id: string): Promise<string> => {
        try {
            const response = await client.get(`/image/${id}`, {
                responseType: 'blob'
            });
            return URL.createObjectURL(response.data);
        } catch (error) {
            console.error('이미지 로드 실패:', error);
            return '';
        }
    }

    return { getImage };
}