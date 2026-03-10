import FilteredCharacterList from "@/components/FilteredCharacterList";
import { ALL_CHARACTERS_ENDPOINT } from "@/utils";
import { Character } from "@/utils/types";

export default async function Home() {
  const charactersResponsePromise = fetch(ALL_CHARACTERS_ENDPOINT).then((r) => r.json()) as Promise<Character[]>;
  const characters = await charactersResponsePromise;

  // TODO: improve error handling
  if (!characters.length) {
    return (
      <main className="">
        <h1>There was an error fetching the characters</h1>
      </main>
    );
  }

  const uniqueFamilies = Array.from(new Set(characters.map((c) => c.family).filter((c) => c.startsWith("House "))));

  return (
    <main className="">
      <h1>Game of Thrones families</h1>
      <FilteredCharacterList characters={characters} families={uniqueFamilies} />
    </main>
  );
}
