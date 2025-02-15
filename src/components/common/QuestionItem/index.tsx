import { Flex } from "@/components/ui";
// import { client } from "@/api/axios";
import { useEffect } from "react";
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

  // const [imageFile, setImageFile] = useState<File | null>();
  // const getImageFile = (profileId: string) => {
  //   try {
  //     const response = client({
  //       method: "GET",
  //       params: {
  //         profileId,
  //       },
  //     });
  //     setImageFile(response.imageFile);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // getImageFile(profileId);
  }, []);

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
              src={profileId}
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
