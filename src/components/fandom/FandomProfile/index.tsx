import { Button, Flex, HStack, VStack } from "@/components/ui";
import s from "./style.module.scss";
import { ButtonSize } from "@/components/ui/Button/index.type";

interface FandomProfileProps {
  profileImageSrc: string;
  fandomName: string;
  fandomDescription: string;
}

export default function FandomProfile({
  profileImageSrc,
  fandomDescription,
  fandomName,
}: FandomProfileProps) {
  return (
    <Flex className={s.fandomProfile} justify='between'>
      <HStack gap={16}>
        <img src={profileImageSrc} className={s.image} />
        <VStack className={s.data} gap={10}>
          <h1>{fandomName}</h1>
          <span>{fandomDescription}</span>
        </VStack>
      </HStack>
      <Button size={ButtonSize.MEDIUM}>
        가입하기
      </Button>
    </Flex>
  );
}
