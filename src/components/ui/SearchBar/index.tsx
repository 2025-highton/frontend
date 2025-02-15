import { IoSearch } from "react-icons/io5";

import s from './style.module.scss';
import HStack from "../HStack";

export default function SearchBarMock() {
    return (
        <HStack className={s.inputContainer} align="center" gap={6}>
            <IoSearch />
            <input type="text" placeholder="검색어를 입력하세요" />
        </HStack>
    )
}