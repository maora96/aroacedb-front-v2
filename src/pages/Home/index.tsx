import { useGetRandomCharacter } from "../../hooks/characters";
import { GeneralCard } from "../../components/GeneralCard";
import { CharacterCard } from "../../components/CharacterCard";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { GlobalLayout } from "../../components/GlobalLayout";
import styles from "./styles.module.scss";

export function Home() {
  const { data, refetch } = useGetRandomCharacter();

  return (
    <GlobalLayout>
      <div className={styles.boundary}>
        <GeneralCard>
          <div className={styles.cardContent}>
            <h5 className={styles.cardTitle}>WELCOME TO THE AROACE DATABASE</h5>

            <p className={styles.cardParagraph}>
              Enter a few keywords in the search bar below to find an aromantic
              or asexual character in the database! These can be orientations
              (demisexual, grayromantic, etc.), story genres (fantasy,
              contemporary), or many more—and you can use more than one.
            </p>

            <p className={styles.cardParagraph}>
              Not sure what to enter? Check out the About the Database page for
              the list of categories and terms used, or hit the “Give me a new
              character” button for inspiration!
            </p>
          </div>
        </GeneralCard>

        <h4 className={styles.homeTitle}>your random character</h4>

        <CharacterCard character={data} />

        <div className={styles.button}>
          <PrimaryButton
            text="give me another!"
            onClick={refetch}
            paddingY="0.625rem"
            paddingX="2rem"
          />
        </div>
      </div>
    </GlobalLayout>
  );
}
