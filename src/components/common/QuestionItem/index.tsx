import { Flex } from "@/components/ui";
import { client } from "@/api/axios";
import { useEffect, useState } from "react";
import s from "./style.module.scss";

interface Props {
  idx: number;
  question: string;
  content: string;
  profileId: string;
  comment: string;
}

export default function ({
  idx,
  question,
  content,
  profileId,
  comment = "계절이 지나가는 하늘에는 가을로 가득 차 계절이 지나가는 하늘에는 가을로 가득 차계절이 지나가는 하늘에는 가을로 가득 차s",
}: Props) {
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
    <Flex direction="column" className={s.container} gap={8}>
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
      {comment && <div className={s.line}></div>}
      <p className={s.ellipsisContainer}>
        <span>A. </span>
        {comment}
      </p>
    </Flex>
  );
}
