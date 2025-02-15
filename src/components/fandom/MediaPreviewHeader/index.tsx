import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";
import { FaChevronLeft } from "react-icons/fa6";

interface MediaPreviewHeaderProps {
  imageSrc: string;
  height?: number;
}

export default function MediaPreviewHeader({
  imageSrc,
  height = 320,
}: MediaPreviewHeaderProps) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  
  return (
    <>
      <img
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageSrc})`,
          height,
        }}
        className={s.image}
      />
      <div className={s.header} onClick={() => handleBack()}>
        <FaChevronLeft color="#fff" size={20} />
      </div>
    </>
  );
}
