import { HStack, VStack } from "@/components/ui";

import s from "./style.module.scss";

export default function FandomAboutSection() {
  return (
    <VStack>
      <h1 className={s.title}>머플러 소개</h1>
      <h2 className={s.fandomName}>QWER</h2>
      <p className={s.fandomAbout}>
        2023년 10월 18일 데뷔한 타마고 프로덕션 소속 4인조 걸밴드 김계란이
        기획한 '최애의 아이들' 프로젝트를 통해 결성되었다.
      </p>
      <VStack as={"section"} gap={30} className={s.detailSection}>
        <HStack justify="between" fullWidth align="center">
          <h3 className={s.sectionTitle}>데뷔일</h3>
          <p className={s.sectionContent}>2023. 10. 08</p>
        </HStack>
        <HStack justify="between" fullWidth align="center">
          <h3 className={s.sectionTitle}>팬덤 수</h3>
          <p className={s.sectionContent}>298,287명</p>
        </HStack>
      </VStack>
    </VStack>
  );
}
