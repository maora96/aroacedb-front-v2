import { useGetAllCharacters } from "../../hooks/characters";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Character, IGetAllOrCanonCharacters } from "../../types";
import { CharacterCard } from "../../components/CharacterCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import { CharacterRow } from "../../components/CharacterRow";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import { SecondaryButton } from "../../components/Atoms/SecondaryButton";
import styles from "./styles.module.scss";

export function AllCharacters() {
  let { param } = useParams();

  const [viewMode, setViewMode] = useState<string>("card");
  const [allFilters, setAllFilters] = useState<IGetAllOrCanonCharacters>({
    param: param ?? undefined,
    amount: 1000,
    page: 1,
  });

  useEffect(() => {
    setAllFilters({ ...allFilters, param: param! });
  }, [param]);

  const { data: allCharacters } = useGetAllCharacters(allFilters);

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

        {allCharacters?.result?.map((character: Character) => {
          return viewMode === "card" ? (
            <div className={styles.content}>
              <CharacterCard character={character} key={character.id} />
            </div>
          ) : (
            <CharacterRow character={character} key={character.id} />
          );
        })}
      </>
    </GlobalLayout>
  );
}
