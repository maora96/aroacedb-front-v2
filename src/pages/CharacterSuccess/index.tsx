import { GeneralCard } from "../../components/GeneralCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";

export function Success() {
  return (
    <GlobalLayout>
      <>
        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>Submission received!</h5>

            <p className={styles.cardParagraph}>
              We will look through your submission soon!
            </p>
          </div>
        </GeneralCard>
      </>
    </GlobalLayout>
  );
}
