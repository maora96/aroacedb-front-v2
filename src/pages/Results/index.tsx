import { useGetSearchedCharacter } from "../../hooks/characters";
import { dictionary } from "../../utils/dictionary";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Character, IGetSearchedCharacters } from "../../types";
import { CharacterCard } from "../../components/CharacterCard";
import { GlobalLayout } from "../../components/GlobalLayout";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function Results() {
  let query = useQuery().get("search");

  const [filters, setFilters] = useState<IGetSearchedCharacters>({
    search: undefined,
    amount: 20,
    page: 1,
  });

  useEffect(() => {
    const searchTerm = dictionary[query!];
    if (!searchTerm) {
      setFilters({ ...filters, search: query! });
    } else {
      setFilters({ ...filters, search: searchTerm });
    }
  }, [query]);

  const { data } = useGetSearchedCharacter(filters);

  return (
    <GlobalLayout>
      <>
        {query != undefined &&
          data?.result?.map((character: Character) => {
            return <CharacterCard character={character} key={character.id} />;
          })}
      </>
    </GlobalLayout>
  );
}
