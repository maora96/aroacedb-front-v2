import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";
import { useGetSearchedCharacter } from "../../hooks/characters";
import { dictionary, matcher } from "../../utils/dictionary";
import { Header } from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IGetSearchedCharacters } from "../../types";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function Results() {
  let query = useQuery().get("search");
  console.log("adsa", query);

  const [filters, setFilters] = useState<IGetSearchedCharacters>({
    search: undefined,
    amount: 20,
    page: 1,
  });

  useEffect(() => {
    const searchTerm = dictionary[query!];
    console.log("searchterm", searchTerm);
    setFilters({ ...filters, search: searchTerm });
  }, [query]);

  const { data } = useGetSearchedCharacter(filters);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className="w-5/6 h-full p-4 bg-offwhite">
          <div className="flex flex-col items-center bg-offwhite p-6 h-full gap-y-8 overflow-y-auto">
            {data &&
              data.result.map((character: any) => {
                return (
                  <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
                    <img
                      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={character?.cover}
                      alt=""
                    />
                    <div className="flex flex-col justify-start p-6 w-full">
                      <div className="flex justify-between">
                        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                          {character?.name}
                        </h5>

                        <span>
                          {matcher[character?.gender]}
                          {character?.pairing && ` | ${character.pairing}`}
                        </span>
                      </div>
                      <span className="text-sm text-darkgray mb-2">
                        by {character?.author}
                        {character?.series &&
                          ` | in the ${character?.author} series`}
                      </span>
                      <div className="mb-2">
                        {character?.genres.map((genre: string) => (
                          <span className="bg-green text-offwhite text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-green uppercase">
                            {matcher[genre]}
                          </span>
                        ))}
                      </div>
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {character?.name} is a {character?.importance}{" "}
                        character.
                      </p>
                      <div className="mt-2">
                        <span className="bg-ace text-offwhite text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-ace uppercase">
                          {character?.sexualOrientation}
                        </span>
                        <span className="bg-aro text-offwhite text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-aro uppercase">
                          {character?.romanticOrientation}
                        </span>
                      </div>

                      <div className="flex justify-self-end self-end mt-6 gap-x-4">
                        <button
                          type="button"
                          className="text-green bg-darkgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase font-semibold"
                        >
                          books in series
                        </button>
                        <button
                          type="button"
                          className="text-green bg-darkgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase font-semibold"
                        >
                          author
                        </button>
                        <button
                          type="button"
                          className="text-green bg-darkgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase font-semibold"
                        >
                          profile
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </>
  );
}
