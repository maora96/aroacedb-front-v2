import { useGetCharacter } from "../../hooks/characters";
import { GeneralCard } from "../../components/GeneralCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Tag } from "../../components/Atoms/Tag";
import { Story } from "../../types";
import { ShadowlessGeneralCard } from "../../components/ShadowlessGeneralCard";
import { matcher } from "../../utils/dictionary";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";

export function Character() {
  let { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetCharacter(id!);

  return (
    <GlobalLayout>
      <>
        <GeneralCard>
          <div className={styles.content}>
            <h5 className={styles.title}>{data?.name}</h5>

            <div className={styles.row}>
              <div className={styles.item}>
                <span className={styles.field}>Author</span>
                <span>{data?.author}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.field}>Gender</span>
                <span>{matcher[data?.gender]}</span>
              </div>

              <div className={styles.item}>
                <span className={styles.field}>Pairing</span>
                <span>{data?.pairing}</span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <span className={styles.field}>Series</span>
                <span>{data?.series}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.field}>Type of Rep</span>
                <span>{matcher[data?.typeOfRep]}</span>
              </div>

              <div className={styles.item}>
                <span className={styles.field}>Importance</span>
                <span>{matcher[data?.importance]}</span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <span className={styles.field}>Romantic Orientation</span>
                <span>{matcher[data?.romanticOrientation]}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.field}>Sexual Orientation</span>
                <span>{matcher[data?.sexualOrientation]}</span>
              </div>
            </div>

            <span className={styles.subtitle}>Genres</span>
            <div className={styles.genres}>
              {data?.genres?.map((genre: string) => (
                <Tag color="#b5de9d" text={matcher[genre]} />
              ))}
            </div>

            <span className={styles.subtitle}>Relationships</span>
            <div className={styles.genres}>
              {data?.relationships?.map((relationship: string) => (
                <Tag color="#800080" text={relationship} />
              ))}
              {data?.relationships === null && (
                <Tag color="#bcbcbc" text="None" />
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.unique}>
                <span className={styles.field}>Notes & Warnings</span>
                <span>{data?.notesAndWarnings}</span>
              </div>
            </div>
          </div>
        </GeneralCard>

        <GeneralCard>
          <div className={styles.storiesContent}>
            <h5 className={styles.title}>
              Stories{" "}
              <PrimaryButton
                text={"Suggest a story!"}
                paddingY="0.625rem"
                paddingX="2rem"
                onClick={() =>
                  navigate(`/suggest-story`, {
                    state: {
                      characterId: data.id,
                    },
                  })
                }
              />
            </h5>
            {data?.stories?.map((story: Story) => (
              <ShadowlessGeneralCard>
                <>
                  <img
                    className={styles.cardImage}
                    src={story?.cover || ""}
                    alt="book cover"
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.cardCompostTitle}>
                      <h5 className={styles.cardSimpleTitle}>{story?.title}</h5>

                      <h5 className={styles.cardSimpleTitle}>
                        {matcher[story?.length]}
                      </h5>
                    </div>
                    <span className={styles.cardSimpleParagraph}>
                      by {story?.author}
                      {story?.series &&
                        ` | volume ${story?.volume} in the ${story?.series} series`}
                    </span>
                    <div className={styles.cardGenres}>
                      {story?.genres.map((genre: string) => (
                        <Tag
                          color="#b5de9d"
                          text={matcher[genre]}
                          key={genre}
                        />
                      ))}

                      <Tag color="#800080" text={matcher[story?.ageGroup]} />
                    </div>

                    <hr className={styles.cardDivider} />

                    <p className={styles.cardParagraph}>{story?.description}</p>

                    <hr className={styles.cardDivider} />
                    <div className={styles.row}>
                      <div className={styles.unique}>
                        <span className={styles.field}>Notes & Warnings</span>
                        <span>{story?.notesAndWarnings}</span>
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.unique}>
                        <span className={styles.field}>
                          Rep Notes & Warnings
                        </span>
                        <span>{story?.repNotesAndWarnings}</span>
                      </div>
                    </div>
                  </div>
                </>
              </ShadowlessGeneralCard>
            ))}
          </div>
        </GeneralCard>
      </>
    </GlobalLayout>
  );
}
