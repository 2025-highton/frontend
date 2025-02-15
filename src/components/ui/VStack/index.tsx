import { forwardRef, Ref } from "react";
import Flex, { FlexProps } from "../Flex";

function VStack(props: FlexProps, ref: Ref<unknown>) {
  return <Flex ref={ref} direction="column" {...props} />;
}

export default forwardRef(VStack);
