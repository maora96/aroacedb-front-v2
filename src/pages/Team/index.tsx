import { GeneralCard } from "../../components/GeneralCard";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { FaBluesky, FaInstagram } from "react-icons/fa6";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";

export function Team() {
  return (
    <GlobalLayout>
      <>
        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>THE CREATOR</h5>

            <p className={styles.cardParagraph}>
              Claudie Arseneault is an asexual and aromantic-spectrum writer of
              queer fantasy centering platonic relationships. In addition to her
              own novels, the City of Spires series and Baker Thief, she edited
              Common Bonds: an Aromantic Speculative Anthology and is a founding
              member of{" "}
              <a href="http://www.krakencollectivebooks.com/">
                The Kraken Collective
              </a>
              , a team of queer specfic self-published writers. Otherwise,
              Claudie tends to be known for her love of croissants and squids.
              Find out more on her{" "}
              <a href="http://claudiearseneault.com/">website</a>!
            </p>

            <a
              href="https://ko-fi.com/claudie"
              target="_blank"
              style={{ margin: "0 auto" }}
            >
              <PrimaryButton
                text="BUY CLAUDIE A KO-FI!"
                paddingY="0.625rem"
                paddingX="2rem"
              />
            </a>

            <div className={styles.icons}>
              <a
                href="https://bsky.app/profile/clh2oars.bsky.social"
                target="_blank"
              >
                <FaBluesky size={24} />
              </a>
              <a
                href="https://www.instagram.com/claudiearseneault"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </GeneralCard>

        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>THE DATABASE GREMLINS</h5>

            <p className={styles.cardParagraph}>
              While the database began as a solo project, it certainly has its
              share of helpers now. Many authors have submitted their
              characters, and many others have sent information about missing
              ones.
            </p>

            <p className={styles.cardParagraph}>
              In addition to the occasional helpers, two have been of invaluable
              help. Massive thanks to fellow author S.L. Dove Cooper
              (@dovelynnwriter), especially for the early volunteer help, and
              Marianne D., whose continuous work is invaluable in keeping
              everything up to date .
            </p>
          </div>
        </GeneralCard>

        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>THE DEV</h5>
            <p className={styles.cardParagraph}>
              Nyphren is writer by night and a web developer by day. Their short
              story <em>Half a Heart</em> was published in{" "}
              <em>Common Bonds: an Aromantic Speculative Anthology</em>.
            </p>

            <a
              href="https://ko-fi.com/nyphren"
              target="_blank"
              style={{ margin: "0 auto" }}
            >
              <PrimaryButton
                text="BUY NYPHREN A KO-FI!"
                paddingY="0.625rem"
                paddingX="2rem"
              />
            </a>
          </div>
        </GeneralCard>
      </>
    </GlobalLayout>
  );
}
