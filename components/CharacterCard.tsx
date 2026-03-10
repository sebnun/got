import { IMAGE_SIZE } from "@/utils";
import { Character } from "@/utils/types";
import Image from "next/image";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="md:flex space-x-6 justify-center items-center">
      <Image
        src={character.imageUrl}
        alt={character.fullName}
        style={{
          aspectRatio: "1 / 1",
          objectFit: "cover",
        }}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        className="mr-auto ml-auto md:ml-0 md:mr-6"
      />
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-4xl font-bold">{character.fullName}</h2>
        <p>First Name: {character.firstName}</p>
        <p>Last Name: {character.lastName}</p>
        <p>Title: {character.title}</p>
        <p>Family: {character.family}</p>
      </div>
    </div>
  );
}
