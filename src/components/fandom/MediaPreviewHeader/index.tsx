import s from "./style.module.scss";
import { FaChevronLeft } from "react-icons/fa6";

interface MediaPreviewHeaderProps {
  imageSrc: string;
  height?: number;
}

export default function MediaPreviewHeader({
  imageSrc,
  height = 300,
}: MediaPreviewHeaderProps) {
  return (
    <>
      <img src={imageSrc} className={s.image} style={{ height }} />
      <div className={s.header}>
        <FaChevronLeft color="#fff" size={24} />
      </div>
    </>
  );
}
