import { Character } from "@/utils/types";

export default function CharacterCard({ character }: { character: Character }) {
  return <div>{character.fullName}</div>;
}
