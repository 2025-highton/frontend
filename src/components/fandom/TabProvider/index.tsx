import { Suspense, lazy } from "react";
import FandomAboutSection from "../section/FandomAbout";
import Layout from "@/components/ui/Layout";
import FandomQuestionWithMembership from "../section/QuestionWithMembership";
import FandomQuestion from "../section/Question";

interface Props {
  tabs: "소개" | "머플" | "히스토리" | "팬질문";
  data: any;
}

const QuestionList = lazy(() => import("../QuestionList"));
const History = lazy(() => import("../History"));

const TabProvider = ({ tabs, data }: Props) => {
  const membership = localStorage.getItem("membership");
  const renderContent = () => {
    switch (tabs) {
      case "머플":
        return (
          <Suspense fallback={<div>로딩 중...</div>}>
            <QuestionList />
          </Suspense>
        );
      case "소개":
        return (
          <Suspense fallback={<div>로딩 중...</div>}>
            <FandomAboutSection
              fandomName="QWER"
              description="2023년 10월 18일 데뷔한 타마고 프로덕션 소속 4인조 걸밴드
김계란이 기획한 '최애의 아이들' 프로젝트를 통해 결성되었다."
              debutDate="2021년 10월 10일"
              fandomCount={10000}
            />
          </Suspense>
        );
      case "히스토리":
        return (
          <Suspense fallback={<div>로딩 중...</div>}>
            <History />
          </Suspense>
        );
        return;
      case "팬질문":
        return membership ? (
          <FandomQuestion />
        ) : (
          <FandomQuestionWithMembership />
        );
      default:
        return <div>잘못된 탭입니다.</div>;
    }
  };

  return (
    <>
      <Layout style={{ padding: "30px" }}>{renderContent()}</Layout>
    </>
  ); // 수정된 부분
};

export default TabProvider;
