import { ReactElement } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import styles from "./styles.module.scss";

export function GlobalLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.home}>
          <div className={styles.content}>{children}</div>
        </main>
      </div>
    </>
  );
}
