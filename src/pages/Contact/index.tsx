import { GeneralCard } from "../../components/GeneralCard";
import { FaTwitter } from "react-icons/fa6";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";

export function Contact() {
  return (
    <GlobalLayout>
      <>
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
              <a href="https://twitter.com/AroAceDB" target="_blank">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </GeneralCard>
      </>
    </GlobalLayout>
  );
}
