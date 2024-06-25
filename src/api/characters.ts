import { api } from ".";
import {
  ICreateCharacter,
  IGetAdvancedSearchedCharacters,
  IGetAllOrCanonCharacters,
  IGetSearchedCharacters,
} from "../types";

export const getRandomCharacter = async () => {
  const { data } = await api.get("/characters/random");

  return data.result;
};

export const getCharacter = async (id: string) => {
  const { data } = await api.get(`/characters/${id}`);

  return data.result;
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
