import { Flex } from "@/components/ui";
// import { client } from "@/api/axios";
import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  idx: number;
  question: string;
  content: string;
  profileId: string;
  comment?: string;
}

export default function Question({
  idx,
  question,
  content,
  profileId,
  comment,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className={s.container} onClick={() => navigate(`/question/${11}`)}>
      <p className={s.ellipsisContainer}>
        <span>{`Q.${idx}`}</span>
        {question}
      </p>
      <Flex direction="row" gap={10}>
        <div>
          {
            <img
              className={s.imageContainer}
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="profile image"
            />
          }
        </div>
        <p className={s.text}>{content}</p>
      </Flex>
      {comment && (
        <>
          <div className={s.line}></div>
          <p className={s.ellipsisContainer}>
            <span>A. </span>
            {comment}
          </p>
        </>
      )}
    </div>
  );
}
