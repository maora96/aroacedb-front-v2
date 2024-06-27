import { ReactElement } from "react";
import styles from "./styles.module.scss";

export function GeneralRow({ children }: { children: ReactElement }) {
  return <div className={styles.row}>{children}</div>;
}
