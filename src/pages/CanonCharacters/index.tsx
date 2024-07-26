import { useGetCanonCharacters } from "../../hooks/characters";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Character, IGetAllOrCanonCharacters } from "../../types";
import { CharacterCard } from "../../components/CharacterCard";
import { GlobalLayout } from "../../components/GlobalLayout";
import { SecondaryButton } from "../../components/Atoms/SecondaryButton";
import { PrimaryButton } from "../../components/Atoms/PrimaryButton";
import styles from "./styles.module.scss";
import { CharacterRow } from "../../components/CharacterRow";

export function CanonCharacters() {
  let { param } = useParams();

  const [viewMode, setViewMode] = useState<string>("card");
  const [canonFilters, setCanonFilters] = useState<IGetAllOrCanonCharacters>({
    param: param ?? undefined,
    amount: 1000,
    page: 1,
  });

  useEffect(() => {
    setCanonFilters({ ...canonFilters, param: param! });
  }, [param]);

  const { data: canonCharacters } = useGetCanonCharacters(canonFilters);

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
        <div className={styles.content}>
          {canonCharacters?.result?.map((character: Character) => {
            return viewMode === "card" ? (
              <CharacterCard character={character} key={character.id} />
            ) : (
              <CharacterRow character={character} key={character.id} />
            );
          })}
        </div>
      </>
    </GlobalLayout>
  );
}
