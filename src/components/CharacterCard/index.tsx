import { GeneralCard } from "../GeneralCard";
import { matcher } from "../../utils/dictionary";
import { Character } from "../../types";
import { Tag } from "../Atoms/Tag";
import styles from "./styles.module.scss";
import { PrimaryButton } from "../Atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";

export function CharacterCard({ character }: { character: Character }) {
  const navigate = useNavigate();
  return (
    <GeneralCard>
      <>
        <img
          className={styles.cardImage}
          src={character?.cover || ""}
          alt="book cover"
        />
        <div className={styles.cardContent}>
          <div className={styles.cardCompostTitle}>
            <h5 className={styles.cardSimpleTitle}>{character?.name}</h5>

            <span>
              {matcher[character?.gender]}
              {character?.pairing && ` | ${character.pairing}`}
            </span>
          </div>
          <span className={styles.cardSimpleParagraph}>
            by {character?.author}
            {character?.series && ` | in the ${character?.series} series`}
          </span>
          <div className={styles.cardGenres}>
            {character?.genres?.map((genre: string) => (
              <Tag color="#b5de9d" text={matcher[genre]} key={genre} />
            ))}
          </div>
          <p className={styles.cardParagraph}>
            {character?.name} is a {character?.importance} character.
          </p>
          <div className={styles.cardInfo}>
            <Tag color="#800080" text={character?.sexualOrientation} />
            <Tag color="#b5de9d" text={character?.romanticOrientation} />
          </div>
          <hr className={styles.cardDivider} />

          <div className="flex justify-self-end self-end mt-6 gap-x-4">
            {/* <PrimaryButton
              text="book in series"
              paddingY="0.625rem"
              paddingX="2rem"
            /> */}

            <PrimaryButton
              text="profile"
              paddingY="0.625rem"
              paddingX="2rem"
              onClick={() => navigate(`/character/${character.id}`)}
            />
          </div>
        </div>
      </>
    </GeneralCard>
  );
}
