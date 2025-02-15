import { Flex } from "@/components/ui";
import { useState, useEffect } from "react";
import { client } from "@/api/axios";
import CommentItem from "@/components/common/comment";
import { useParams } from "react-router-dom";
import "./style.module.scss";

interface CommentListType {
  id: number;
  create_date: Date;
  questionId: number;
  userId: number;
  content: string;
  isEmotion: boolean;
  profile_url?: string;
}

export default function CommentList() {
  const [commentList, setCommentList] = useState<CommentListType[] | []>([]);
  const params = useParams();
  const id = Number(params.id);

  const getCommentList = async (questionId: number) => {
    await client
      .get<CommentListType[]>("대충유알앨", {
        params: { questionId },
      })
      .then((res) => {
        setCommentList(res.data ?? []);
      })
      .catch((error) => {
        console.error("댓글 목록을 불러오는 중 오류 발생:", error);
      });
  };

  useEffect(() => {
    getCommentList(id);
  }, []);

  return (
    <Flex justify="center">
      <Flex direction="column">
        {commentList && commentList.length > 0 ? (
          commentList.map((comment) => (
            <CommentItem
              key={comment.id}
              profileUrl={comment.profile_url || ""}
              name={"익명"}
              content={comment.content}
            />
          ))
        ) : (
          <div>질문이 존재하지 않아요</div>
        )}
      </Flex>
    </Flex>
  );
}
