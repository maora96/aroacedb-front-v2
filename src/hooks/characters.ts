import { useQuery } from "react-query";
import {
  getAdminCharacters,
  getAllCharacters,
  getCanonCharacters,
  getCharacter,
  getFavoriteCharacters,
  getRandomCharacter,
  getRecentlyAddedCharacters,
  getSearchedCharacters,
} from "../api/characters";
import {
  IGetAllOrCanonCharacters,
  IGetFavoriteCharacters,
  IGetSearchedCharacters,
} from "../types";

export const useGetRandomCharacter = () => {
  return useQuery("getRandomcCharacter", async () => getRandomCharacter(), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetRecentlyAddedCharacters = () => {
  return useQuery(
    "getRecentlyAddedCharacters",
    async () => getRecentlyAddedCharacters(),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export const useGetCharacter = (id: string) => {
  return useQuery(["getCharacter", id], async () => getCharacter(id), {
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

export const useGetFavoriteCharacters = (filters: IGetFavoriteCharacters) => {
  return useQuery(
    ["getFavoriteCharacters", filters],
    async () => getFavoriteCharacters(filters),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: !!filters,
    }
  );
};

export const useGetAllCharacters = (params: IGetAllOrCanonCharacters) => {
  return useQuery("getAllCharacters", async () => getAllCharacters(params), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetCanonCharacters = (params: IGetAllOrCanonCharacters) => {
  return useQuery(
    "getCanonCharacters",
    async () => getCanonCharacters(params),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export const useGetAdminCharacters = ({
  status,
  search,
}: {
  status: boolean;
  search: string | undefined;
}) => {
  return useQuery(
    ["getAdminCharacters", status, search],
    async () => getAdminCharacters({ status, search }),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};
