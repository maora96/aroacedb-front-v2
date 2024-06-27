import { ReactElement, useMemo, useState } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { MobileSidebar } from "../MobileSidear";
import { FaAngleUp } from "react-icons/fa";

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

  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);
  return (
    <>
      <Header query={query} />
      <div className={styles.container}>
        <Sidebar payload={payload} search={search} />
        {isMobileSidebarVisible && (
          <MobileSidebar
            payload={payload}
            search={search}
            setIsMobileSidebarVisible={setIsMobileSidebarVisible}
          />
        )}
        <main className={styles.home}>
          <div className={styles.content}>{children}</div>
        </main>
        <div
          className={styles.mobileSidebar}
          onClick={() => setIsMobileSidebarVisible(true)}
        >
          <FaAngleUp />
          <span>Advanced search</span>
        </div>
      </div>
    </>
  );
}
