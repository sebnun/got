import { Character } from "./types";

const ALL_CHARACTERS_ENDPOINT = "https://thronesapi.com/api/v2/Characters";

export const NO_FILTER_VALUE = "ALLHOUSES";
export const IMAGE_SIZE = 250;

export const getCharacters = async () => {
  const charactersResponse = await fetch(ALL_CHARACTERS_ENDPOINT);
  const characters = (await charactersResponse.json()) as Character[];
  return { ok: charactersResponse.ok, characters };
};
