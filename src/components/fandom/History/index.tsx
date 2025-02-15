import { VStack } from "@/components/ui";
import s from "./style.module.scss";
import QuestionItem from "@/components/common/QuestionItem";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HistorySkeletonList from "./index.skeleton";
import { client } from "@/api/axios";

interface HistoryItemType {
  id: number;
  question: string;
  content: string;
  profileId: string;
  comment: string;
  createdAt: string;
}
export default function History() {
  const [historyList, setHistoryList] = useState<HistoryItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const user_id = localStorage.getItem("id");
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
      const response = await client({
        method: "GET",
        url: "/question",
        params: {
          type: "publisher",
          id: user_id,
          offset: 0,
          limit: 100,
        },
      });
      if (response.status == 200) {
        setHistoryList(response.data);
      }
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
