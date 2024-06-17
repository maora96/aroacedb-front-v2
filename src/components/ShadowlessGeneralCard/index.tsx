import { ReactElement } from "react";
import styles from "./styles.module.scss";

export function ShadowlessGeneralCard({
  children,
}: {
  children: ReactElement;
}) {
  return <div className={styles.card}>{children}</div>;
}
