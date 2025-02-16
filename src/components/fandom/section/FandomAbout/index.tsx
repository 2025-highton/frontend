import { VStack } from "@/components/ui";
import s from "./style.module.scss";
import FandomSectionTitle from "../Title";

interface Props {
  fandomName: string;
  description: string;
  debutDate: string;
  fandomCount: number;
}

export default function FandomAboutSection(data: Props) {
  return (
    <VStack>
      <FandomSectionTitle>머플러 소개</FandomSectionTitle>
      <h2 className={s.fandomName}>{data.fandomName}</h2>
      <p className={s.fandomAbout}>{data.description}</p>
    </VStack>
  );
}
