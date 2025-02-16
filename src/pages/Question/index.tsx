import { Flex, VStack } from "@/components/ui";
import { useState, useEffect } from "react";
import { client } from "@/api/axios";
import CommentItem from "@/components/common/comment";
import { useNavigate, useParams } from "react-router-dom";
import s from "./style.module.scss";
import BackCursor from "@/components/icon/backCursor";

export default function CommentList() {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState<>(true);
  const params = useParams();
  const id = Number(params.id);
  const navigate = useNavigate();

  const getDetailData = async () => {
    try {
      const response = await client({
        method: "GET",
        url: `/question/${id}`,
      });

      if (response.status == 200) {
        setDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <VStack justify="center" align="start" className={s.container} gap={20}>
      <VStack justify="center" align="start" gap={20} className={s.Wrapper}>
        <Flex justify="between" align="center" className={s.titleContainer}>
          <label onClick={navigateBack}>
            <BackCursor />
          </label>
          <h1 className={s.title}>질의응답</h1>
          <div></div>
        </Flex>
        <VStack gap={30}>
          <VStack>
            <h2 className={s.questionText}>Q.1</h2>
            <p>{!isLoading ? detail.question : "로딩중..."}</p>
          </VStack>
          <VStack>
            <h2 className={s.questionText}>QWER</h2>
            <p>{!isLoading ? detail.favor_answer : "로딩중..."}</p>
          </VStack>
        </VStack>
      </VStack>
      <VStack className={s.container}>
        <div className={s.line}></div>
        <Flex direction="row" align="start" className={s.commentTitle}>
          <h3>댓글</h3>
        </Flex>
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
          name={"익명"}
          content={
            "오~ 저도 치즈 듬뿍 올라간 피자 완전 좋아해요! 한 조각만 먹어도 행복해지는 그 맛 😋🍕"
          }
        />
      </VStack>
    </VStack>
  );
}
