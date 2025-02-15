import { Button, HStack, VStack } from "@/components/ui"

export default function Login() {
    return (
        <div>
            <HStack>
                <button>버튼</button>
                <button>버튼</button>
                <button>버튼</button>
            </HStack>
            <VStack>
                <button>버튼</button>
                <button>버튼</button>
                <button>버튼</button>
                <Button>
                    가입하기
                </Button>
            </VStack>
            <h1>Login</h1>
        </div>
    )
}