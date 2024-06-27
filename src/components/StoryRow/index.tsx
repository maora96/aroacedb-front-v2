import { matcher } from "../../utils/dictionary";
import { Story } from "../../types";
import { Tag } from "../Atoms/Tag";
import styles from "./styles.module.scss";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { GeneralRow } from "../GeneralRow";

export function StoryRow({ story }: { story: Story }) {
  const navigate = useNavigate();
  return (
    <GeneralRow>
      <>
        <div className={styles.rowContent}>
          <div className={styles.content}>
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
          </div>

          <div className={styles.button}>
            <PrimaryButton
              text="profile"
              paddingY="0.625rem"
              paddingX="2rem"
              onClick={() => navigate(`/character/${story.id}`)}
            />
          </div>
        </div>
      </>
    </GeneralRow>
  );
}
