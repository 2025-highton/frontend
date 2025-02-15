import { VStack } from "@/components/ui";
import { Flex } from "@/components/ui";
import s from "./style.module.scss";
import { useEffect, useState } from "react";
import QuestionItem from "@/components/common/QuestionItem";
import { motion, AnimatePresence } from "framer-motion";
import SkeletonQuestionList from "./index.skeleton";

interface QuestionItemType {
  id: number;
  question: string;
  content: string;
  profileId: string;
  createdAt: string;
}

const MOCK_DATA: QuestionItemType[] = [
  {
    id: 1,
    question: "가장 좋아하는 음식은 무엇인가요?",
    content: "저는 피자를 정말 좋아해요! 특히 치즈가 듬뿍 들어간 피자요.",
    profileId:
      "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg",
    createdAt: "2024-03-15",
  },
  {
    id: 2,
    question: "취미가 무엇인가요?",
    content: "음악 듣기와 그림 그리기를 좋아합니다.",
    profileId:
      "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg",
    createdAt: "2024-03-14",
  },
  {
    id: 3,
    question: "데뷔 전 어떤 준비를 하셨나요?",
    content: "매일 연습하고 운동도 열심히 했어요!",
    profileId:
      "https://thumb.mtstarnews.com/06/2024/02/2024022608330769629_2.jpg",
    createdAt: "2024-03-13",
  },
];

export default function QuestionList() {
  const [questionList, setQuestionList] = useState<QuestionItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
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

  const getQuestionList = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setQuestionList(MOCK_DATA);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 100);
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  return (
    <VStack>
      <h1 className={s.title}>머플</h1>
      {isLoading && <SkeletonQuestionList />}

      {!isLoading && (
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <Flex direction="column" gap={24} justify="center">
              {questionList.map((item) => (
                <motion.div key={item.id} variants={animationItem}>
                  <QuestionItem
                    idx={item.id}
                    question={item.question}
                    content={item.content}
                    profileId={item.profileId}
                  />
                </motion.div>
              ))}
            </Flex>
          </motion.div>
        </AnimatePresence>
      )}
    </VStack>
  );
}
