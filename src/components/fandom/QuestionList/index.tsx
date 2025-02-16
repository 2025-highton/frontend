import { VStack } from "@/components/ui";
import { Flex } from "@/components/ui";
import s from "./style.module.scss";
import { useEffect, useState } from "react";
import QuestionItem from "@/components/common/QuestionItem";
import { motion, AnimatePresence } from "framer-motion";
import SkeletonQuestionList from "./index.skeleton";
import { client } from "@/api/axios";
import { useParams } from "react-router-dom";

interface QuestionItemType {
  id: number;
  question: string;
  content: string;
  profileId: string;
  createdAt: string;
}

export default function QuestionList() {
  const [questionList, setQuestionList] = useState<QuestionItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

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
      const response = await client({
        method: "GET",
        url: "/question",
        params: {
          type: "fandom",
          id: id,
          offset: 0,
          limit: 100,
        },
      });

      if (response.status === 200) {
        setQuestionList(response.data.filter((i) => i.favor_answer != null));
      }
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
                    id={item.id}
                    idx={item.id}
                    question={item.question}
                    content={item.favor_answer}
                    profileId={item.profileId}
                  />
                </motion.div>
              ))}
              {questionList.length > 0 ? null : (
                <h4>머플이 존재하지 않아요!</h4>
              )}
            </Flex>
          </motion.div>
        </AnimatePresence>
      )}
    </VStack>
  );
}
