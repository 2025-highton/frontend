import { Button, VStack } from "@/components/ui";
import BackButtonHeader from "@/components/ui/BackButtonHeader";
import { ButtonSize } from "@/components/ui/Button/index.type";
import Layout from "@/components/ui/Layout";

import { IoCloseOutline } from "react-icons/io5";

import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/ui/NavBar";

const membership = [
  {
    month: 1,
    price: "2,160 원/한 달",
    prize: [
      "팬질문 참여 가능(1일 1회 제한)",
      "멤버쉽 전용 콘텐츠",
      "1개월 구독 뱃지 부여",
    ],
  },
  {
    month: 3,
    price: "5,580 원/3 달",
    prize: [
      "팬질문 참여 가능(1일 1회 제한)",
      "멤버쉽 전용 콘텐츠",
      "1개월 구독 뱃지 부여",
    ],
  },
  {
    month: 1,
    price: "18,750 원/년",
    prize: [
      "팬질문 참여 가능(1일 1회 제한)",
      "멤버쉽 전용 콘텐츠",
      "1개월 구독 뱃지 부여",
    ],
  },
];

export default function Membership() {
  const navigate = useNavigate();

  const membershipConfirm = () => {
    localStorage.setItem("membership", "true");
    navigate("confirm");
  };

  return (
    <Layout>
      <BackButtonHeader
        hideBackButton
        rightContent={<IoCloseOutline size={40} />}
      >
        멤버쉽 가입
      </BackButtonHeader>
      <VStack gap={20}>
        {membership.map((item, index) => (
          <VStack key={index} className={s.membership}>
            <span>{item.month}개월 구독</span>
            <ul>
              {item.prize.map((prize, index) => (
                <li key={index}>{prize}</li>
              ))}
            </ul>
            <Button onClick={membershipConfirm} size={ButtonSize.MEDIUM}>
              {item.price}
            </Button>
          </VStack>
        ))}
      </VStack>
      <NavBar />
    </Layout>
  );
}
