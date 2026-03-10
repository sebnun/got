import CharacterCard from "@/components/CharacterCard";
import CharacterList from "@/components/CharactersList";
import TextFeedback from "@/components/TextFeedback";
import { getCharacters } from "@/utils";
import { notFound } from "next/navigation";

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { ok, characters } = await getCharacters();

  if (!ok) {
    return (
      <TextFeedback type="error">
        There was an error loading the character, try navigating from the home page
      </TextFeedback>
    );
  }

  const character = characters.find((c) => c.id === +id);

  if (!character) {
    notFound();
  }

  const familyCharacters = characters.filter((c) => c.family === character.family && c.id !== character.id);

  return (
    <>
      <CharacterCard character={character} />
      {familyCharacters.length !== 0 && (
        <>
          <h3 className="py-6 text-2xl font-bold">Family - {character.family}</h3>
          <CharacterList characters={familyCharacters} />
        </>
      )}
    </>
  );
}
