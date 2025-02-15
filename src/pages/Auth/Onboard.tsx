import { Button, VStack } from "@/components/ui";
import { ButtonSize, ButtonVariant } from "@/components/ui/Button/index.type";

export default function Onboard() {
    return (
        <VStack as={'main'}>
            <h1>Onboard</h1>
            <VStack gap={6}>
                <Button>
                    로그인
                </Button>
                <Button variant={ButtonVariant.SECONDARY}>
                    회원가입
                </Button>
            </VStack>
        </VStack>
    )
}