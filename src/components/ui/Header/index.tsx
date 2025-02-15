import HStack from "../HStack";
import SearchBarMock from "../SearchBar";

import s from "./style.module.scss";
import LogoMini from "@/components/icon/LogoMini";

export default function Header() {
  return (
    <HStack
      as={"header"}
      justify="between"
      align="center"
      className={s.header}
      gap={20}
    >
      <LogoMini />
      <SearchBarMock />
    </HStack>
  );
}
