import s from './Onboard.module.scss';
import { Button, VStack } from "@/components/ui";
import { ButtonVariant } from "@/components/ui/Button/index.type";
import Layout from "@/components/ui/Layout";

export default function Onboard() {
    return (
        <Layout>
            <VStack className={s.content}>
                <h1>Onboard</h1>
            </VStack>
            <VStack gap={6}>
                <Button>
                    로그인
                </Button>
                <Button variant={ButtonVariant.SECONDARY}>
                    회원가입
                </Button>
            </VStack>
        </Layout>
    )
}