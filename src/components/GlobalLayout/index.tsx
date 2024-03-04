import { ReactElement } from "react";
import { Layout } from "antd";
import styles from "./styles.module.scss";
import { Header } from "../Header";

export function GlobalLayout({ children }: { children: ReactElement }) {
  const { Content } = Layout;

  return (
    <Layout className={styles.container}>
      <Header />
      <Content>{children}</Content>
    </Layout>
  );
}
