import { Button, Flex, HStack, VStack } from "@/components/ui";
import s from "./style.module.scss";
import { ButtonSize, ButtonVariant } from "@/components/ui/Button/index.type";
import { client } from "@/api/axios";
import { useNavigate, useParams } from "react-router-dom";

export interface FandomProfileProps {
  profileImageSrc: string;
  fandomName: string;
  fandomDescription: string;
  isJoin: boolean;
}

export default function FandomProfile({
  profileImageSrc,
  fandomDescription,
  fandomName,
  isJoin,
}: FandomProfileProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const user_id = localStorage.getItem("id");
  const joinFandom = async () => {
    try {
      const response = await client({
        method: "PATCH",
        url: `/fandom/join/${id}`,
        data: {
          user_id: user_id,
        },
      });
      if (response.status == 200) {
        navigate(0);
      }
    } catch (error) {}
  };

  return (
    <Flex className={s.fandomProfile} justify="between">
      <HStack gap={16} fullWidth>
        <img src={profileImageSrc} className={s.image} />
        <VStack fullWidth className={s.data} gap={14}>
          <VStack gap={4}>
            <h1>{fandomName}</h1>
            <span>{fandomDescription}</span>
          </VStack>
          {!isJoin ? (
            <Button
              style={{ width: "100%" }}
              size={ButtonSize.SMALL}
              onClick={() => joinFandom()}
            >
              가입하기
            </Button>
          ) : (
            <Button
              variant={ButtonVariant.WHITE}
              style={{ width: "100%" }}
              size={ButtonSize.SMALL}
            >
              가입중
            </Button>
          )}
        </VStack>
      </HStack>
    </Flex>
  );
}
