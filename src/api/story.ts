import { api } from ".";
import { ICreateStory } from "../types";

export const createStory = async (body: ICreateStory) => {
  const data = api.post(`/stories`, {
    ...body,
  });

  return data;
};
