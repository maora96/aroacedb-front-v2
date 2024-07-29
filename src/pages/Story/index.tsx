import { GeneralCard } from "../../components/GeneralCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Tag } from "../../components/Atoms/Tag";
import { Character } from "../../types";
import { ShadowlessGeneralCard } from "../../components/ShadowlessGeneralCard";
import { matcher } from "../../utils/dictionary";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { useGetStory } from "../../hooks/stories";

export function StoryPage() {
  let { id } = useParams();

  const navigate = useNavigate();

  const { data } = useGetStory(id!);

  return (
    <GlobalLayout>
      <div className={styles.boundary}>
        <GeneralCard>
          <div className={styles.content}>
            <div className={styles.cover}>
              <div className={styles.image}>
                <img
                  className={styles.cardImage}
                  src={data?.cover || ""}
                  alt="book cover"
                />
              </div>
              <div className={styles.storyContent}>
                <h5 className={styles.title}>{data?.title}</h5>

                <div className={styles.row}>
                  <div className={styles.item}>
                    <span className={styles.field}>Author</span>
                    <span>{data?.author}</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.field}>Series</span>
                    <span>{data?.series}</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.field}>Volume</span>
                    <span>{data?.volume ?? "Not applicable"}</span>
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.item}>
                    <span className={styles.field}>Age Group</span>
                    <span>{matcher[data?.ageGroup]}</span>
                  </div>
                  <div className={styles.item}>
                    <span className={styles.field}>Length</span>
                    <span>{matcher[data?.length]}</span>
                  </div>
                </div>

                <span className={styles.subtitle}>Genres</span>
                <div className={styles.genres}>
                  {data?.genres?.map((genre: string) => (
                    <Tag color="#b5de9d" text={matcher[genre]} />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.unique}>
                <span className={styles.field}>Description</span>
                <span>{data?.description}</span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.unique}>
                <span className={styles.field}>Notes & Warnings</span>
                <span>{data?.notesAndWarnings}</span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.unique}>
                <span className={styles.field}>Rep Notes & Warnings</span>
                <span>{data?.repNotesAndWarnings}</span>
              </div>
            </div>
          </div>
        </GeneralCard>

        <GeneralCard>
          <div className={styles.storiesContent}>
            <h5 className={styles.title}>Characters</h5>
            {data?.characters?.map((character: Character) => (
              <ShadowlessGeneralCard>
                <>
                  <div className={styles.cardContent}>
                    <div className={styles.cardCompostTitle}>
                      <h5 className={styles.cardSimpleTitle}>
                        {character?.name}
                      </h5>

                      <span>
                        {matcher[character?.gender]}
                        {character?.pairing && ` | ${character.pairing}`}
                      </span>
                    </div>
                    <span className={styles.cardSimpleParagraph}>
                      by {character?.author}
                      {character?.series &&
                        ` | in the ${character?.series} series`}
                    </span>
                    <div className={styles.cardGenres}>
                      {character?.genres?.map((genre: string) => (
                        <Tag
                          color="#b5de9d"
                          text={matcher[genre]}
                          key={genre}
                        />
                      ))}
                    </div>
                    <p className={styles.cardParagraph}>
                      {character?.name} is a {character?.importance} character.
                    </p>
                    <div className={styles.cardInfo}>
                      <Tag
                        color="#800080"
                        text={character?.sexualOrientation}
                      />
                      <Tag
                        color="#b5de9d"
                        text={character?.romanticOrientation}
                      />
                    </div>
                    <hr className={styles.cardDivider} />

                    <div className="flex justify-self-end self-end mt-6 gap-x-4">
                      <PrimaryButton
                        text="profile"
                        paddingY="0.625rem"
                        paddingX="2rem"
                        onClick={() => navigate(`/character/${character.id}`)}
                      />
                    </div>
                  </div>
                </>
              </ShadowlessGeneralCard>
            ))}
          </div>
        </GeneralCard>
      </div>
    </GlobalLayout>
  );
}
