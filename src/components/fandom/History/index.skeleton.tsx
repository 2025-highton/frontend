import { VStack } from "@/components/ui";
import Skeleton from "@/components/ui/Skeleton";

export default function HistorySkeletonList() {
  return (
    <VStack gap={10}>
      <Skeleton height="150px" rounded />
      <Skeleton height="150px" rounded />
      <Skeleton height="150px" rounded />
      <Skeleton height="150px" rounded />
      <Skeleton height="150px" rounded />
      <Skeleton height="150px" rounded />
    </VStack>
  );
}
