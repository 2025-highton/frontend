import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  
  return (
    <>
      <img src={imageSrc} className={s.image} style={{ height }} />
      <div className={s.header} onClick={() => handleBack()}>
        <FaChevronLeft color="#fff" size={24} />
      </div>
    </>
  );
}
