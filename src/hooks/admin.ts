import { useQuery } from "react-query";
import { getPermissions, getStats } from "../api/admin";

export const useGetStats = () => {
  return useQuery("getStats", async () => getStats(), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetPermissions = () => {
  return useQuery("getPermissions", async () => getPermissions(), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
