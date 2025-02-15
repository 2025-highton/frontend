import { VStack } from "@/components/ui";
import s from "./style.module.scss";
import QuestionItem from "@/components/common/QuestionItem";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HistorySkeletonList from "./index.skeleton";

interface HistoryItemType {
  id: number;
  question: string;
  content: string;
  profileId: string;
  comment: string;
  createdAt: string;
}

const MOCK_DATA: HistoryItemType[] = [
  {
    id: 1,
    question: "가장 인상 깊었던 순간은?",
    content: "첫 팬미팅에서 팬들을 만났을 때입니다!",
    profileId:
      "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg",
    comment: "정말 감동적인 순간이었어요",
    createdAt: "2024-03-15",
  },
  // ...추가 목업 데이터...
];

export default function History() {
  const [historyList, setHistoryList] = useState<HistoryItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // 더 빠른 순차 애니메이션
        delayChildren: 0.3, // 전체 애니메이션 시작 전 약간의 딜레이
      },
    },
  };

  const animationItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const getHistoryList = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setHistoryList(MOCK_DATA);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setIsLoading(false);
      // 로딩이 끝난 후 애니메이션을 위한 상태 변경
      setTimeout(() => setIsLoaded(true), 100);
    }
  };

  useEffect(() => {
    getHistoryList();
  }, []);

  return (
    <VStack>
      <h1 className={s.title}>히스토리</h1>
      {isLoading && <HistorySkeletonList />}

      {!isLoading && (
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <VStack gap={24} justify="center">
              {historyList.map((item) => (
                <motion.div key={item.id} variants={animationItem}>
                  <QuestionItem
                    idx={item.id}
                    question={item.question}
                    content={item.content}
                    profileId={item.profileId}
                    comment={item.comment}
                  />
                </motion.div>
              ))}
            </VStack>
          </motion.div>
        </AnimatePresence>
      )}
    </VStack>
  );
}
