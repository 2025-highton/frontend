import { HStack, VStack } from "@/components/ui";
import s from "./style.module.scss";

interface Props {
  fandomName: string;
  description: string;
  debutDate: string;
  fandomCount: number;
}

export default function FandomAboutSection(data: Props) {
  return (
    <VStack>
      <h1 className={s.title}>머플러 소개</h1>
      <h2 className={s.fandomName}>{data.fandomName}</h2>
      <p className={s.fandomAbout}>{data.description}</p>
      <VStack as={"section"} gap={30} className={s.detailSection}>
        <HStack justify="between" fullWidth align="center">
          <h3 className={s.sectionTitle}>데뷔일</h3>
          <p className={s.sectionContent}>{data.debutDate}</p>
        </HStack>
        <HStack justify="between" fullWidth align="center">
          <h3 className={s.sectionTitle}>팬덤 수</h3>
          <p className={s.sectionContent}>
            {data.fandomCount.toLocaleString()}명
          </p>
        </HStack>
      </VStack>
    </VStack>
  );
}
