import { api } from ".";
import {
  ICreateCharacter,
  IEditCharacter,
  IGetAdvancedSearchedCharacters,
  IGetAllOrCanonCharacters,
  IGetSearchedCharacters,
} from "../types";

export const getRandomCharacter = async () => {
  const { data } = await api.get("/characters/random");

  return data.result;
};

export const getRecentlyAddedCharacters = async () => {
  const { data } = await api.get("/characters/recently-added");

  return data.result;
};

export const getCharacter = async (id: string) => {
  const { data } = await api.get(`/characters/${id}`);

  return data.result;
};

export const deleteCharacter = async (id: string) => {
  const newToken = localStorage.getItem("token");
  const { data } = await api.delete(`/characters/${id}`, {
    headers: { Authorization: `Bearer ${newToken}` },
  });

  return data.result;
};

export const removeStoryFromCharacter = async (id: string, storyId: string) => {
  const newToken = localStorage.getItem("token");
  const { data } = await api.delete(`/characters/${id}/stories/${storyId}`, {
    headers: { Authorization: `Bearer ${newToken}` },
  });

  return data;
};

export const getSearchedCharacters = async ({
  search,
  amount,
  page,
}: IGetSearchedCharacters) => {
  const { data } = await api.get(
    `/characters?search=${search}&amount=${amount}&page=${page}`
  );

  return data;
};

export const getAllCharacters = async ({
  param,
  amount,
  page,
}: IGetAllOrCanonCharacters) => {
  const { data } = await api.get(
    `/characters/all-characters?param=${param}&amount=${amount}&page=${page}`
  );

  return data;
};

export const getCanonCharacters = async ({
  param,
  amount,
  page,
}: IGetAllOrCanonCharacters) => {
  const { data } = await api.get(
    `/characters/canon?param=${param}&amount=${amount}&page=${page}`
  );

  return data;
};

export const getAdvancedResults = async ({
  params,
  search,
}: {
  params: IGetAdvancedSearchedCharacters;
  search: string;
}) => {
  const data = api.post(
    `/${search}/search?amount=${params.amount}&page=${params.page}`,
    {
      ...params,
    }
  );

  return data;
};

export const createCharacter = async (body: ICreateCharacter) => {
  const data = api.post(`/characters`, {
    ...body,
  });

  return data;
};

export const editCharacter = async ({
  body,
  id,
}: {
  body: IEditCharacter;
  id: string;
}) => {
  const newToken = localStorage.getItem("token");
  const data = api.patch(
    `/characters/${id}`,
    {
      ...body,
    },
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};

export const addStoriesToCharacter = async ({
  body,
  id,
}: {
  body: { storiesIds: string[] };
  id: string;
}) => {
  const newToken = localStorage.getItem("token");
  const data = api.patch(
    `/characters/stories/${id}`,
    {
      ...body,
    },
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};

export const approveCharacter = async (id: string) => {
  const newToken = localStorage.getItem("token");
  const data = api.patch(
    `/characters/status/${id}`,
    {},
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};

export const getAdminCharacters = async ({
  status,
  search,
}: {
  status: boolean;
  search: string | undefined;
}) => {
  const newToken = localStorage.getItem("token");
  const { data } = await api.get(
    `/characters/admin/${status}?${search && `search=${search}`}`,
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};
