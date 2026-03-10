import FilteredCharacterList from "@/components/FilteredCharacterList";
import TextFeedback from "@/components/TextFeedback";
import { ALL_CHARACTERS_ENDPOINT } from "@/utils";
import { Character } from "@/utils/types";

export default async function Home() {
  const charactersResponse = await fetch(ALL_CHARACTERS_ENDPOINT);

  if (!charactersResponse.ok) {
    // If we can't fetch the data, the whole list is unusable
    return <TextFeedback type="error">There was an error fetching the characters</TextFeedback>;
  }

  const characters = (await charactersResponse.json()) as Character[];

  return <FilteredCharacterList characters={characters} />;
}
