import { Flex } from "@/components/ui";
import "./index.module.scss";
import { client } from "@/api/axios";
import { useEffect, useState } from "react";
interface Props {
  question: string;
  content: string;
  profileId: string;
}

export default function ({ question, content, profileId }: Props) {
  const [imageFile, setImageFile] = useState<File | null>();
  const getImageFile = (profileId: string) => {
    try {
      const response = client({
        method: "GET",
        params: {
          profileId,
        },
      });
      setImageFile(response.imageFile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImageFile(profileId);
  }, []);

  return (
    <Flex>
      <p>{question}</p>
      <Flex>
        <div>
          {imageFile ? <img src={imageFile} /> : <div>대충 mock image</div>}
        </div>
        <p>{content}</p>
      </Flex>
    </Flex>
  );
}
