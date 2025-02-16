import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";
import { FaChevronLeft } from "react-icons/fa6";
import FandomProfile, { FandomProfileProps } from "../FandomProfile";
import { VStack } from "@/components/ui";
import Tab, { TabProps } from "@/components/ui/Tab";

interface MediaPreviewHeaderProps {
  imageSrc: string;
  height?: number;
  isJoin: boolean;
  fandomProfile: FandomProfileProps;

  tab: TabProps;
}

export default function MediaPreviewHeader({
  imageSrc,
  height = 320,
  fandomProfile,
  isJoin,
  tab,
}: MediaPreviewHeaderProps) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height,
        }}
        className={s.image}
      >
        <div className={s.header} onClick={() => handleBack()}>
          <FaChevronLeft color="#fff" size={20} />
        </div>
        <VStack gap={10}>
          <FandomProfile
            isJoin={isJoin}
            profileImageSrc={fandomProfile.profileImageSrc}
            fandomName={fandomProfile.fandomName}
            fandomDescription={fandomProfile.fandomDescription}
          />
          <div style={{ padding: "0 30px" }}>
            <Tab
              tabs={tab.tabs}
              activeTab={tab.activeTab}
              onClick={tab.onClick}
            />
          </div>
        </VStack>
      </div>
    </>
  );
}
