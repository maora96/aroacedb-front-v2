import { GeneralCard } from "../../components/GeneralCard";
import { FaEnvelope } from "react-icons/fa6";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";

export function Contact() {
  return (
    <GlobalLayout>
      <div className={styles.content}>
        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>Contact</h5>

            <p className={styles.cardParagraph}>
              Want to provide further information on a character? Ran into a bug
              you want to report? Thought of a cool feature you'd want to see
              (no promise!)? We're always open to suggest and information, so
              contact us!
            </p>

            <div className={styles.icons}>
              <a href="mailto:aroacedatabase@gmail.com">
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className={styles.cardParagraph} style={{ margin: "0 auto" }}>
              aroacedatabase@gmail.com
            </p>
          </div>
        </GeneralCard>
      </div>
    </GlobalLayout>
  );
}
