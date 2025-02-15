import s from "./style.module.scss";

export default function FandomSectionTitle({
  children,
  mb = 32,
}: {
  children: React.ReactNode;
  mb?: number;
}) {
  return <h1 style={{marginBottom: mb}} className={s.title}>{children}</h1>;
}
