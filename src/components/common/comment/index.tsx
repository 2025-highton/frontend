import { Flex, HStack } from "@/components/ui";
import s from "./style.module.scss";
import { client } from "@/api/axios";
import { useEffect, useState } from "react";
import fillHeart from "@/components/icon/fillHeart";
import lineHeart from "@/components/icon/lineHeart";
interface Props {
  profileUrl: string;
  name: string;
  content: string;
}

const CommentItem = ({ profileUrl, name, content }: Props) => {
  const [profileImg, setProfileImg] = useState<File | null>();
  const [emoji, setEmoji] = useState(false);
  const getImageFile = (profileId: string) => {
    try {
      const response = client({
        method: "GET",
        params: {
          profileId,
        },
      });
      setProfileImg(response?.imageFile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImageFile(profileUrl);
  }, []);

  return (
    <Flex
      direction="column"
      className={s.container}
      justify="around"
      gap={10}
      align="start"
    >
      <HStack gap={20} align="center">
        {profileImg ? <img src={profileImg} /> : <img src={""} />}
        <p>{name}</p>
        <label onClick={() => setEmoji(!emoji)}>
          {emoji ? fillHeart() : lineHeart()}
        </label>
      </HStack>
      <p>{content}</p>
    </Flex>
  );
};

export default CommentItem;
