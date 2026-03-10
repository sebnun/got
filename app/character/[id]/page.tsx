import CharacterCard from "@/components/CharacterCard";
import TextFeedback from "@/components/TextFeedback";
import { ALL_CHARACTERS_ENDPOINT } from "@/utils";
import { Character } from "@/utils/types";

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const characterResponse = await fetch(`${ALL_CHARACTERS_ENDPOINT}/${id}`);

  if (!characterResponse.ok) {
    return <TextFeedback type="error">There was an error loading the character, try navigating from the home page</TextFeedback>;
  }

  const character = (await characterResponse.json()) as Character;

  return <CharacterCard character={character} />;
}
