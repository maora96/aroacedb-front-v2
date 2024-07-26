import { api } from ".";
import { ICreateStory, IEditStory, IGetSearchedStories } from "../types";

export const createStory = async (body: ICreateStory) => {
  const data = api.post(`/stories`, {
    ...body,
  });

  return data;
};

export const getSearchedStories = async ({
  search,
  amount,
  page,
}: IGetSearchedStories) => {
  const { data } = await api.get(
    `/stories?search=${search}&amount=${amount}&page=${page}`
  );

  return data.result;
};

export const getRecentlyAddedStories = async () => {
  const { data } = await api.get("/stories/recently-added");

  return data.result;
};

export const getAdminStories = async ({
  status,
  search,
}: {
  status: boolean;
  search: string | undefined;
}) => {
  const newToken = localStorage.getItem("token");
  const { data } = await api.get(
    `/stories/admin/${status}?${search && `search=${search}`}`,
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};

export const approveStory = async (id: string) => {
  const newToken = localStorage.getItem("token");
  const data = api.patch(
    `/stories/status/${id}`,
    {},
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};

export const deleteStory = async (id: string) => {
  const newToken = localStorage.getItem("token");
  const { data } = await api.delete(`/stories/${id}`, {
    headers: { Authorization: `Bearer ${newToken}` },
  });

  return data.result;
};

export const editStory = async ({
  body,
  id,
}: {
  body: IEditStory;
  id: string;
}) => {
  const newToken = localStorage.getItem("token");
  const data = api.patch(
    `/stories/${id}`,
    {
      ...body,
    },
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};

export const getStory = async (id: string) => {
  const { data } = await api.get(`/stories/${id}`);

  return data;
};
