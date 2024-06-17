import { GeneralCard } from "../GeneralCard";
import { matcher } from "../../utils/dictionary";
import { Story } from "../../types";
import { Tag } from "../Atoms/Tag";
import styles from "./styles.module.scss";
import { PrimaryButton } from "../Atoms/PrimaryButton";

export function StoryCard({ story }: { story: Story }) {
  return (
    <GeneralCard>
      <>
        <img
          className={styles.cardImage}
          src={story?.cover || ""}
          alt="book cover"
        />
        <div className={styles.cardContent}>
          <div className={styles.cardCompostTitle}>
            <h5 className={styles.cardSimpleTitle}>{story?.title}</h5>
          </div>
          <span className={styles.cardSimpleParagraph}>
            by {story?.author}
            {story?.series && ` | in the ${story?.series} series`}
          </span>
          <div className={styles.cardGenres}>
            {story?.genres.map((genre: string) => (
              <Tag color="#b5de9d" text={matcher[genre]} key={genre} />
            ))}
          </div>

          <hr className={styles.cardDivider} />

          <div className="flex justify-self-end self-end mt-6 gap-x-4">
            <PrimaryButton
              text="book in series"
              paddingY="0.625rem"
              paddingX="2rem"
            />
            <PrimaryButton text="author" paddingY="0.625rem" paddingX="2rem" />
            <PrimaryButton text="profile" paddingY="0.625rem" paddingX="2rem" />
          </div>
        </div>
      </>
    </GeneralCard>
  );
}
