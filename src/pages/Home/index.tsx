import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";
import { useGetRandomCharacter } from "../../hooks/characters";
import { Header } from "../../components/Header";
import { GeneralCard } from "../../components/GeneralCard";
import { CharacterCard } from "../../components/CharacterCard";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";

export function Home() {
  const { data, refetch } = useGetRandomCharacter();
  console.log(data);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.home}>
          <div className="flex flex-col items-center bg-offwhite p-6 h-full gap-y-8 overflow-y-auto">
            <GeneralCard>
              <div className={styles.cardContent}>
                <h5 className={styles.cardTitle}>
                  WELCOME TO THE AROACE DATABASE
                </h5>

                <p className={styles.cardParagraph}>
                  Enter a few keywords in the search bar below to find an
                  aromantic or asexual character in the database! These can be
                  orientations (demisexual, grayromantic, etc.), story genres
                  (fantasy, contemporary), or many more—and you can use more
                  than one.
                </p>

                <p className={styles.cardParagraph}>
                  Not sure what to enter? Check out the About the Database page
                  for the list of categories and terms used, or hit the “Give me
                  a new character” button for inspiration!
                </p>
              </div>
            </GeneralCard>

            <h4 className={styles.homeTitle}>your random character</h4>

            <CharacterCard character={data} />

            <div className={styles.button}>
              <PrimaryButton text="give me another!" onClick={refetch} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
