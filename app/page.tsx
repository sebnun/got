import FilteredCharacterList from "@/components/FilteredCharacterList";
import { ALL_CHARACTERS_ENDPOINT } from "@/utils";
import { Character } from "@/utils/types";

export default async function Home() {
  const charactersResponse = await fetch(ALL_CHARACTERS_ENDPOINT);

  if (!charactersResponse.ok) {
    // If we can't fetch the data, the whole list is unusable
    return <h1>There was an error fetching the characters</h1>;
  }

  const characters = (await charactersResponse.json()) as Character[];

  return (
    <>
      <h1>Game of Thrones families</h1>
      <FilteredCharacterList characters={characters} />
    </>
  );
}
