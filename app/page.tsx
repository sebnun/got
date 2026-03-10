import FilteredCharacterList from "@/components/FilteredCharacterList";
import TextFeedback from "@/components/TextFeedback";
import { getCharacters } from "@/utils";

export default async function Home() {
  const { ok, characters } = await getCharacters();

  if (!ok) {
    // If we can't fetch the data, the whole list is unusable
    return <TextFeedback type="error">There was an error fetching the characters</TextFeedback>;
  }

  return <FilteredCharacterList characters={characters} />;
}
