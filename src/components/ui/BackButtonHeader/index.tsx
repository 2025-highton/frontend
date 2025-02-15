import HStack from "../HStack";
import { FaChevronLeft } from "react-icons/fa6";

import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

interface BackButtonHeaderProps {
  children: React.ReactNode;
  hideBackButton?: boolean;
  rightContent?: React.ReactNode;
}

export default function BackButtonHeader({
  children,
  hideBackButton,
  rightContent,
}: BackButtonHeaderProps) {
    const navigate = useNavigate();
  return (
    <HStack
      as="header"
      justify="between"
      align="center"
      className={s.container}
    >
      <div onClick={() => navigate(-1)}>{!hideBackButton && <FaChevronLeft size={22} />}</div>
      <span>{children}</span>
      <div>{rightContent}</div>
    </HStack>
  );
}
