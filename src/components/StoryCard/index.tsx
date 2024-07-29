import { GeneralCard } from "../GeneralCard";
import { matcher } from "../../utils/dictionary";
import { Story } from "../../types";
import { Tag } from "../Atoms/Tag";
import styles from "./styles.module.scss";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";

export function StoryCard({ story }: { story: Story }) {
  const navigate = useNavigate();
  return (
    <GeneralCard>
      <div className={styles.container}>
        <div className={styles.cardDescription}>
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
            <p>{story.description}</p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <hr className={styles.cardDivider} />

          <div className={styles.buttons}>
            <PrimaryButton
              text="profile"
              paddingY="0.625rem"
              paddingX="2rem"
              onClick={() => navigate(`/story/${story.id}`)}
            />
          </div>
        </div>
      </div>
    </GeneralCard>
  );
}
