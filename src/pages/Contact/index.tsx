import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { GeneralCard } from "../../components/GeneralCard";
import { FaTwitter } from "react-icons/fa6";
import styles from "./styles.module.scss";

export function Contact() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.home}>
          <div className="flex flex-col items-center bg-offwhite p-6 h-full gap-y-8 overflow-y-auto">
            <GeneralCard>
              <div className={styles.cardContent}>
                <h5 className={styles.cardTitle}>Contact</h5>

                <p className={styles.cardParagraph}>
                  Want to provide further information on a character? Ran into a
                  bug you want to report? Thought of a cool feature you'd want
                  to see (no promise!)? We're always open to suggest and
                  information, so contact us!
                </p>

                <div className={styles.icons}>
                  <a href="https://twitter.com/AroAceDB" target="_blank">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </GeneralCard>
          </div>
        </main>
      </div>
    </>
  );
}
