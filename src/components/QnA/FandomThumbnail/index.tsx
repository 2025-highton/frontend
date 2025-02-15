import { HStack } from "@/components/ui";

import s from "./style.module.scss";

interface FandomQnAThumbnailProps {
    thumbnailSrc: string;
    profileImageSrc: string;
    fandomName: string;
}

export default function FandomQnAThumbnail({
  thumbnailSrc,
  profileImageSrc,
  fandomName
}: FandomQnAThumbnailProps) {
  return (
    <div
      className={s.container}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${thumbnailSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HStack align="center">
        <img src={profileImageSrc} alt={fandomName} className={s.fandomProfile} />
        <h1 className={s.fandomName}>{fandomName}</h1>
      </HStack>
    </div>
  );
}
