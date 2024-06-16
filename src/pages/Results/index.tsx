import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";
import {
  useGetAllCharacters,
  useGetCanonCharacters,
  useGetSearchedCharacter,
} from "../../hooks/characters";
import { dictionary, matcher } from "../../utils/dictionary";
import { Header } from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  Character,
  IGetAllOrCanonCharacters,
  IGetSearchedCharacters,
} from "../../types";
import { CharacterCard } from "../../components/CharacterCard";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function Results() {
  let query = useQuery().get("search");
  let canon = useQuery().get("canon");
  let all = useQuery().get("all");
  console.log("adsa", query, canon, all);

  const [filters, setFilters] = useState<IGetSearchedCharacters>({
    search: undefined,
    amount: 20,
    page: 1,
  });

  const [canonFilters, setCanonFilters] = useState<IGetAllOrCanonCharacters>({
    param: canon ?? undefined,
    amount: 20,
    page: 1,
  });

  const [allFilters, setAllFilters] = useState<IGetAllOrCanonCharacters>({
    param: all ?? undefined,
    amount: 20,
    page: 1,
  });

  useEffect(() => {
    const searchTerm = dictionary[query!];
    setFilters({ ...filters, search: searchTerm });
  }, [query]);

  useEffect(() => {
    setCanonFilters({ ...filters, param: canon! });
  }, [canon]);

  useEffect(() => {
    setAllFilters({ ...filters, param: all! });
  }, [all]);

  const { data } = useGetSearchedCharacter(filters);

  const { data: allCharacters } = useGetAllCharacters(allFilters);
  const { data: canonCharacters } = useGetCanonCharacters(canonFilters);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className="w-5/6 h-full p-4 bg-offwhite">
          <div className="flex flex-col items-center bg-offwhite p-6 h-full gap-y-8 overflow-y-auto">
            {query != undefined &&
              data?.result?.map((character: Character) => {
                return <CharacterCard character={character} />;
              })}

            {all != undefined &&
              allCharacters?.result?.map((character: Character) => {
                return <CharacterCard character={character} />;
              })}

            {canon != undefined &&
              canonCharacters?.result?.map((character: Character) => {
                return <CharacterCard character={character} />;
              })}
          </div>
        </main>
      </div>
    </>
  );
}
