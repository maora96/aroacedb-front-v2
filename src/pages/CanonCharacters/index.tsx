import { useGetCanonCharacters } from "../../hooks/characters";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Character, IGetAllOrCanonCharacters } from "../../types";
import { CharacterCard } from "../../components/CharacterCard";
import { GlobalLayout } from "../../components/GlobalLayout";

export function CanonCharacters() {
  let { param } = useParams();

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
        {canonCharacters?.result?.map((character: Character) => {
          return <CharacterCard character={character} key={character.id} />;
        })}
      </>
    </GlobalLayout>
  );
}
