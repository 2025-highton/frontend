import { Flex, VStack } from "@/components/ui";
import { useState, useEffect } from "react";
import { client } from "@/api/axios";
import CommentItem from "@/components/common/comment";
import { useParams } from "react-router-dom";
import s from "./style.module.scss";
import BackCursor from "@/components/icon/backCursor";

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
    <VStack justify="center" align="start" className={s.container} gap={20}>
      <Flex justify="between" align="center" className={s.titleContainer}>
        <BackCursor />
        <h1 className={s.title}>질의응답</h1>
        <div></div>
      </Flex>
      <VStack gap={30}>
        <VStack>
          <h2 className={s.questionText}>Q.1</h2>
          <p>
            계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도
            없이 가을 속의
          </p>
        </VStack>
        <VStack>
          <h2 className={s.questionText}>QWER</h2>
          <p>
            계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도
            없이 가을 속의
          </p>
        </VStack>
      </VStack>
      <VStack className={s.commentContainer}>
        {/* {commentList && commentList.length > 0 ? (
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
        )} */}
        <CommentItem
          key={11}
          profileUrl={11}
          name={"팬1"}
          content={"ajhflsdsfvrewdascvfdsfvfrew"}
        />{" "}
      </VStack>
    </VStack>
  );
}
