import { ReactElement } from "react";
import styles from "./styles.module.scss";

export function GeneralModal({ children }: { children: ReactElement }) {
  return <div className={styles.modal}>{children}</div>;
}
