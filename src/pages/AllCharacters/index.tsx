import { useGetAllCharacters } from "../../hooks/characters";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Character, IGetAllOrCanonCharacters } from "../../types";
import { CharacterCard } from "../../components/CharacterCard";
import { GlobalLayout } from "../../components/GlobalLayout";

export function AllCharacters() {
  let { param } = useParams();

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
        {allCharacters?.result?.map((character: Character) => {
          return <CharacterCard character={character} key={character.id} />;
        })}
      </>
    </GlobalLayout>
  );
}
