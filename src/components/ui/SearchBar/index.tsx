import { IoSearch } from "react-icons/io5";

import s from "./style.module.scss";
import HStack from "../HStack";
import { useNavigate } from "react-router-dom";

export default function SearchBarMock() {
  const navigate = useNavigate();
  return (
    <HStack onClick={() => navigate('/search')} className={s.inputContainer} align="center" justify="end" gap={6}>
      <IoSearch />
    </HStack>
  );
}
