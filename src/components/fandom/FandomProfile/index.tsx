import { Button, Flex, HStack, VStack } from "@/components/ui";
import s from "./style.module.scss";
import { ButtonSize, ButtonVariant } from "@/components/ui/Button/index.type";

export interface FandomProfileProps {
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
    <Flex className={s.fandomProfile} justify="between">
      <HStack gap={16} fullWidth>
        <img src={profileImageSrc} className={s.image} />
        <VStack fullWidth className={s.data} gap={14}>
          <VStack gap={4}>
          <h1>{fandomName}</h1>
          <span>{fandomDescription}</span>
          </VStack>
          <Button style={{width: '100%'}} size={ButtonSize.SMALL}>가입하기</Button>
          <Button variant={ButtonVariant.WHITE} style={{width: '100%'}} size={ButtonSize.SMALL}>가입하기</Button>
        </VStack>
      </HStack>
    </Flex>
  );
}
