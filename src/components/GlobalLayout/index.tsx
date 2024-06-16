import { ReactElement, useMemo } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

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
