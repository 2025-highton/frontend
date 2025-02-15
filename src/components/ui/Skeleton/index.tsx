import { CSSProperties } from "react";
import s from "./style.module.scss";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  className?: string;
}

export default function Skeleton({
  width = "100%",
  height = "1rem",
  rounded = false,
  className = "",
}: SkeletonProps) {
  const styles: CSSProperties = {
    width,
    height,
  };

  return (
    <div
      className={`${s.skeleton} ${rounded ? s.rounded : ""} ${className}`}
      style={styles}
    />
  );
}
