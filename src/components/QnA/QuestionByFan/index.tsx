import { useNavigate } from "react-router-dom";

import s from './style.module.scss';
import { HStack, VStack } from "@/components/ui";

interface QuestionByFanProps {
    id: string;
    fan: {
        profileImageSrc: string;
        name: string;
        content: string;
    }
}

export default function QuestionByFan({id, fan}: QuestionByFanProps) {
    const navigate = useNavigate();

    return (
        <VStack gap={15} className={s.container} onClick={() => navigate(`/question/${id}`)}>
            <HStack align="center" gap={10} className={s.senderInfo}>
                <img src={fan.profileImageSrc} alt={fan.name} className={s.profileImage} />
                <span>{fan.name}</span>
            </HStack>
            <p className={s.content}>{fan.content}</p>
        </VStack>
    )
}