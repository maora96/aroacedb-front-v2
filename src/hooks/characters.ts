import { useQuery } from "react-query";
import { getRandomCharacter, getSearchedCharacters } from "../api/characters";
import { IGetSearchedCharacters } from "../types";

export const useGetRandomCharacter = () => {
  return useQuery("getRandomcCharacter", async () => getRandomCharacter(), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetSearchedCharacter = (filters: IGetSearchedCharacters) => {
  return useQuery(
    ["getSearchedCharacter", filters],
    async () => getSearchedCharacters(filters),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: !!filters,
    }
  );
};
