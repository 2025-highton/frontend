import { forwardRef, Ref } from "react";
import Flex, { FlexProps } from "../Flex";

function HStack(props: FlexProps, ref: Ref<unknown>) {
  return <Flex ref={ref} direction="row" {...props} />;
}

export default forwardRef(HStack);
