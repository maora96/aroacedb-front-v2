import { useGetFavoriteCharacters } from "../../hooks/characters";
import { useEffect, useState } from "react";
import { Character } from "../../types";
import { CharacterCard } from "../../components/CharacterCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import { GeneralCard } from "../../components/GeneralCard";
import styles from "./styles.module.scss";
import { SecondaryButton } from "../../components/Atoms/SecondaryButton";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { CharacterRow } from "../../components/CharacterRow";

export function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<string>("card");

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      setFavorites(JSON.parse(favoritesFromStorage));
    }
  }, []);

  const { data } = useGetFavoriteCharacters({ favorites: favorites });

  return (
    <GlobalLayout>
      <>
        <div className={styles.buttons}>
          {viewMode === "card" ? (
            <PrimaryButton
              text="Card View"
              onClick={() => setViewMode("card")}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          ) : (
            <SecondaryButton
              text="Card View"
              onClick={() => setViewMode("card")}
              paddingY="0.625rem"
              paddingX="1rem"
            />
          )}

          {viewMode === "row" ? (
            <PrimaryButton
              text="Table View"
              onClick={() => setViewMode("row")}
              paddingY="0.625rem"
              paddingX="2rem"
            />
          ) : (
            <SecondaryButton
              text="Table View"
              onClick={() => setViewMode("row")}
              paddingY="0.625rem"
              paddingX="2rem"
            />
          )}
        </div>
        {data?.data?.favorites?.map((character: Character) => {
          return viewMode === "card" ? (
            <div className={styles.content}>
              <CharacterCard character={character} key={character.id} />
            </div>
          ) : (
            <CharacterRow character={character} key={character.id} />
          );
        })}
        {data?.data?.favorites?.length === 0 && (
          <GeneralCard>
            <div className={styles.cardContent}>
              <h5 className={styles.cardTitle}>No entries found!</h5>

              <p className={styles.cardParagraph}>
                To favorite a character, go to their page and click the "Add to
                favorites" button!
              </p>
            </div>
          </GeneralCard>
        )}
      </>
    </GlobalLayout>
  );
}
