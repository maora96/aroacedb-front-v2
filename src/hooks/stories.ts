import { useQuery } from "react-query";
import {
  getAdminStories,
  getRecentlyAddedStories,
  getSearchedStories,
  getStory,
} from "../api/story";
import { IGetSearchedStories } from "../types";

export const useGetRecentlyAddedStories = () => {
  return useQuery(
    "getRecentlyAddedStories",
    async () => getRecentlyAddedStories(),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export const useGetAdminStories = ({
  status,
  search,
}: {
  status: boolean;
  search: string | undefined;
}) => {
  return useQuery(
    ["getAdminStories", status, search],
    async () => getAdminStories({ status, search }),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export const useGetSearchedStories = (filters: IGetSearchedStories) => {
  return useQuery(
    ["getSearchedStories", filters],
    async () => getSearchedStories(filters),
    {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: !!filters,
    }
  );
};

export const useGetStory = (id: string) => {
  return useQuery("getStory", async () => getStory(id), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
