import { GeneralCard } from "../../components/GeneralCard";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";

export function About() {
  return (
    <GlobalLayout>
      <div className={styles.content}>
        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>THE DATABASE</h5>

            <p className={styles.cardParagraph}>
              The AroAce Database is a <strong>searchable</strong>
              compilation of all{" "}
              <strong>aromantic and asexual characters</strong> in prose fiction
              out there--or all that we could find so far, at any rate. Enter as
              many search terms as you need and narrow down the results to what
              you’re looking for!
            </p>

            <p className={styles.cardParagraph}>
              None of the stories within are recommendations. You can, however,
              find Claudie’s recommendations on her website:{" "}
              <a href="http://claudiearseneault.com/?page_id=2107">Aromantic</a>{" "}
              | <a href="http://claudiearseneault.com/?page_id=2013">Asexual</a>
            </p>

            <p className={styles.cardParagraph}>
              Hosting the database requires a monthly upkeep. If you use this
              resource a lot, consider chipping in to help keep it alive!
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
          </div>
        </GeneralCard>

        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>DATABASE STRUCTURE</h5>

            <p className={styles.cardParagraph}>
              Each character has a single entry, to which is attached
              information on individual stories . Entries are separated in two
              sections: the character and the stories they feature in.
            </p>

            <p className={styles.cardParagraph}>
              A caveat, however: classification is a great tool, but it has its
              flaws. Broad categories had to be created in order to keep the
              information easily searchable, and some stories won’t fit neatly
              into them, or will be grossly oversimplified by the term. The
              database has a lot of potential, but it is still missing some key
              parameter, and even those present won’t always give the best idea
              of what to expect.
            </p>
          </div>
        </GeneralCard>

        <GeneralCard>
          <div className={styles.terminology}>
            <div className={styles.single}>
              <div>Character name</div>
              <div>Character's name</div>
            </div>
            <div className={styles.single}>
              <div>Author</div>
              <div>Author's name</div>
            </div>
            <div className={styles.single}>
              <div>Title</div>
              <div>Story or book title</div>
            </div>
            <div className={styles.single}>
              <div>Series</div>
              <div>Name of the series (if applicable)</div>
            </div>
            <div className={styles.single}>
              <div>Genre</div>
              <div>The story's literary genre(s) and age category</div>
            </div>

            <div className={styles.multi}>
              <div className={styles.title}>Length</div>
              <div className={styles.sideContainer}>
                <div className={styles.info}>The length of the story</div>
                <div className={styles.side}>
                  <div>Short story</div>
                  <div>Up to 10.000 words</div>
                </div>
                <div className={styles.side}>
                  <div>Novella</div>
                  <div>10,000 to 50,000 words</div>
                </div>
                <div className={styles.side}>
                  <div>Novel (short)</div>
                  <div>50,000 to 80,000 words</div>
                </div>
                <div className={styles.side}>
                  <div>Novel (long)</div>
                  <div>More than 80,000 words</div>
                </div>
                <div className={styles.side}>
                  <div>Anthology</div>
                  <div>Short story is part of an anthology</div>
                </div>
                <div className={styles.side}>
                  <div>Webseries</div>
                  <div>
                    Published in several installments on the internet (blog,
                    Wattpad, etc.)
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.multi}>
              <div className={styles.title}>Type of Rep</div>
              <div className={styles.sideContainer}>
                <div className={styles.info}>
                  How “involved” the representation is.
                </div>
                <div className={styles.side}>
                  <div>Word of God</div>
                  <div>
                    The character’s sexuality is not explicit on page, but the
                    author has confirmed it
                  </div>
                </div>
                <div className={styles.side}>
                  <div>On page</div>
                  <div>
                    The character’s sexuality is explicitly demonstrated within
                    the text. It should be showed or discussed to an extent that
                    makes it clear to the readers.
                  </div>
                </div>
                <div className={styles.side}>
                  <div>Word used</div>
                  <div>
                    The identity is stated using the actual word (usually also
                    On Page)
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.single}>
              <div>Gender</div>
              <div> Character’s gender (nonbinary characters are grouped)</div>
            </div>

            <div className={styles.multi}>
              <div className={styles.title}>Character importance</div>
              <div className={styles.sideContainer}>
                <div className={styles.info}>
                  The character’s importance to the story
                </div>
                <div className={styles.side}>
                  <div>Lead</div>
                  <div>
                    The character is at the heart of the story’s central
                    storyline
                  </div>
                </div>
                <div className={styles.side}>
                  <div>Main</div>
                  <div>
                    The character plays an important role in the story and is
                    frequently on page
                  </div>
                </div>
                <div className={styles.side}>
                  <div>Side</div>
                  <div>The character plays a minor role in the story</div>
                </div>
              </div>
            </div>

            <div className={styles.single}>
              <div>Sexual Orientation</div>
              <div>The character’s sexual orientation</div>
            </div>

            <div className={styles.single}>
              <div>Romantic Orientation</div>
              <div>The character’s romantic orientation </div>
            </div>

            <div className={styles.single}>
              <div>Relationships</div>
              <div>Most important relationships to the character.</div>
            </div>

            <div className={styles.single}>
              <div>Pairing</div>
              <div>
                Genders of the relationship (qpr or romantic) in which the
                character is involved, if any.
              </div>
            </div>

            <div className={styles.single}>
              <div>Rep Notes&Warnings</div>
              <div> Warnings or notes with regards to the representation.</div>
            </div>

            <div className={styles.single}>
              <div>Other Notes&Warnings</div>
              <div>
                Everything else! This includes notes about polyamory, race,
                disability, known content warnings, explanations, etc.
              </div>
            </div>

            <div className={styles.single}>
              <div>Reviews</div>
              <div>Ownvoices reviews for this story</div>
            </div>
          </div>
        </GeneralCard>
      </div>
    </GlobalLayout>
  );
}
