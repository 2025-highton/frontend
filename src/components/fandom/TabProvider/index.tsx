import { Suspense, lazy } from "react";

interface Props {
  tabs: "소개" | "질의응답" | "히스토리" | "팬질문";
}

const QuestionList = lazy(() => import("../QuestionList"));

const TabProvider = ({ tabs }: Props) => {
  const renderContent = () => {
    switch (tabs) {
      case "질의응답":
        return (
          <Suspense fallback={<div>로딩 중...</div>}>
            <QuestionList />
          </Suspense>
        );
      case "소개":
        return <div>소개 탭 내용</div>;
      case "히스토리":
        return <div>히스토리 탭 내용</div>;
      case "팬질문":
        return <div>팬질문 탭 내용</div>;
      default:
        return <div>잘못된 탭입니다.</div>;
    }
  };

  return renderContent(); // 수정된 부분
};

export default TabProvider;
