import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header";

export function About() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className="w-5/6 h-full p-4 bg-offwhite">
          <div className="flex flex-col items-center bg-offwhite p-6 h-full gap-y-8 overflow-y-auto">
            <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
              <div className="flex justify-between p-4 flex-col">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                  The database
                </h5>
                <span className="text-sm text-darkgray mb-2">
                  The AroAce Database is a <strong>searchable</strong>{" "}
                  compilation of all{" "}
                  <strong>aromantic and asexual characters</strong> in prose
                  fiction out there--or all that we could find so far, at any
                  rate. Enter as many search terms as you need and narrow down
                  the results to what you’re looking for!
                </span>

                <span className="text-sm text-darkgray mb-2">
                  None of the stories within are recommendations. You can,
                  however, find Claudie’s recommendations on her website:{" "}
                  <a
                    href="http://claudiearseneault.com/?page_id=2107"
                    className="text-lightgreen"
                  >
                    Aromantic
                  </a>{" "}
                  |{" "}
                  <a
                    href="http://claudiearseneault.com/?page_id=2013"
                    className="text-lightgreen"
                  >
                    Asexual
                  </a>
                </span>
              </div>
            </div>

            <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
              <div className="flex justify-between p-4 flex-col">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                  Database Structure
                </h5>
                <span className="text-sm text-darkgray mb-2">
                  Each character has a single entry, to which is attached
                  information on individual stories and reviews, when available.
                  Entries are separated in three sections: the character, the
                  stories they feature in, and the reviews.
                </span>

                <span className="text-sm text-darkgray mb-2">
                  A caveat, however: classification is a great tool, but it has
                  its flaws. Broad categories had to be created in order to keep
                  the information easily searchable, and some stories won’t fit
                  neatly into them, or will be grossly oversimplified by the
                  term. The database has a lot of potential, but it is still
                  missing some key parameter, and even those present won’t
                  always give the best idea of what to expect.
                </span>
              </div>
            </div>

            <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
              <div className="flex justify-between p-4 flex-col">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                  The terminology
                </h5>
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
                    <div className={styles["side-container"]}>
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
                          Published in several installments on the internet
                          (blog, Wattpad, etc.)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.multi}>
                    <div className={styles.title}>Type of Rep</div>
                    <div className={styles["side-container"]}>
                      <div className={styles.info}>
                        How “involved” the representation is.
                      </div>
                      <div className={styles.side}>
                        <div>Word of God</div>
                        <div>
                          The character’s sexuality is not explicit on page, but
                          the author has confirmed it
                        </div>
                      </div>
                      <div className={styles.side}>
                        <div>On page</div>
                        <div>
                          The character’s sexuality is explicitly demonstrated
                          within the text. It should be showed or discussed to
                          an extent that makes it clear to the readers.
                        </div>
                      </div>
                      <div className={styles.side}>
                        <div>Word used</div>
                        <div>
                          The identity is stated using the actual word (usually
                          also On Page)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.single}>
                    <div>Gender</div>
                    <div>
                      {" "}
                      Character’s gender (nonbinary characters are grouped)
                    </div>
                  </div>

                  <div className={styles.multi}>
                    <div className={styles.title}>Character importance</div>
                    <div className={styles["side-container"]}>
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
                          The character plays an important role in the story and
                          is frequently on page
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
                    <div>
                      {" "}
                      Warnings or notes with regards to the representation.
                    </div>
                  </div>

                  <div className={styles.single}>
                    <div>Other Notes&Warnings</div>
                    <div>
                      Everything else! This includes notes about polyamory,
                      race, disability, known content warnings, explanations,
                      etc.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
