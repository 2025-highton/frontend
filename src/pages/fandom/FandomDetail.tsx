import FandomProfile from "@/components/fandom/FandomProfile";
import MediaPreviewHeader from "@/components/fandom/MediaPreviewHeader";
import Layout from "@/components/ui/Layout";
import NavBar from "@/components/ui/NavBar";
import Tab from "@/components/ui/Tab";
import { useState } from "react";

export default function FandomDetail() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <>
      <MediaPreviewHeader imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/NCTWish-240316.jpg/800px-NCTWish-240316.jpg" />
      <FandomProfile
        profileImageSrc="https://phinf.wevpstatic.net/MjAyNDA5MjRfMTU0/MDAxNzI3MTY4MzQwODAz.inbxWmasfUxMZ6aK-CtXze5AY7GpGqCmjhBrrFjKMIIg.tRb51nQXrv-IPd9D1sraaYHnadDBh_93mVHX2T90H7Eg.JPEG/0b97f398-b833-4283-a1ba-7acaa3249370.jpeg?type=w670"
        fandomName="NCT 127"
        fandomDescription="2024-08-24 가입"
      />

      <Layout>
        <Tab tabs={tabs} activeTab={activeTab} onClick={setActiveTab} />
      </Layout>
      <NavBar />
    </>
  );
}
