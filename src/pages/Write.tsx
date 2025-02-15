import { Flex } from "@/components/ui";
import { useState } from "react";

export default function Write() {
  const [text, setText] = useState<string>("");

  return (
    <Flex direction="column" justify="center">
      <Flex gap={10}>
        <p>Q.12</p>
        <p>대충오늘의질문</p>
      </Flex>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </Flex>
  );
}
