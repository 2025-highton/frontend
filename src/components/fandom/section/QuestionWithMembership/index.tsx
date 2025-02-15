import { Button, VStack } from "@/components/ui";
import FandomSectionTitle from "../Title";

import s from './style.module.scss';

export default function FandomQuestionWithMembership() {
  return (
    <VStack>
      <FandomSectionTitle>팬질문</FandomSectionTitle>
      <VStack as={"section"} align="center" justify="center" gap={30} className={s.no}>
        <img src="https://media.discordapp.net/attachments/1339575727582089226/1340209376069292043/image.png?ex=67b186bf&is=67b0353f&hm=91ce085514c0d395a9d1b391fddfe90fab570474be8ecac9ffca7d222765e0ad&=&format=webp&quality=lossless&width=1108&height=1386" />
        <span>멤버쉽 가입 후 사용 가능한<br/>기능입니다</span>
      </VStack>
      <Button>멤버쉽 가입하기</Button>
    </VStack>
  );
}
