import { Flex } from "@/components/ui";
import "./style.module.scss";
import { client } from "@/api/axios";
import { useEffect, useState } from "react";

interface Props {
  profileUrl: string;
  name: string;
  content: string;
}

const CommentItem = ({ profileUrl, name, content }: Props) => {
  const [profileImg, setProfileImg] = useState<File | null>();

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
    <Flex>
      {profileImg ? <img src={profileImg} /> : <img src={""} />}
      <p>{name}</p>
      <p>{content}</p>
    </Flex>
  );
};

export default CommentItem;
