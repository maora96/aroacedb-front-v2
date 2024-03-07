import { api } from ".";
import { IGetSearchedCharacters } from "../types";

export const getRandomCharacter = async () => {
  const { data } = await api.get("/characters/random");

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

  return data.content;
};
