import { ReactElement, useMemo } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function GlobalLayout({
  children,
  payload,
  search,
}: {
  children: ReactElement;
  payload?: any;
  search?: string | null;
}) {
  let query = useQuery().get("search");
  return (
    <>
      <Header query={query} />
      <div className={styles.container}>
        <Sidebar payload={payload} search={search} />
        <main className={styles.home}>
          <div className={styles.content}>{children}</div>
        </main>
      </div>
    </>
  );
}
