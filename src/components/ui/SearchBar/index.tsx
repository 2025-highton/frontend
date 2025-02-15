import { IoSearch } from "react-icons/io5";

import s from './style.module.scss';
import HStack from "../HStack";

export default function SearchBarMock() {
    return (
        <HStack className={s.inputContainer} align="center" justify="end" gap={6}>
            <IoSearch />
        </HStack>
    )
}