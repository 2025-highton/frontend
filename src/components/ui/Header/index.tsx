import HStack from "../HStack";
import SearchBarMock from "../SearchBar";

import s from "./style.module.scss";

export default function Header() {
  return (
    <HStack as={"header"} justify="between" align="center" className={s.header} gap={20}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/640px-Vercel_logo_black.svg.png" />
      <SearchBarMock />
    </HStack>
  );
}
