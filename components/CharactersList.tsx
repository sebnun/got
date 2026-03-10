import { IMAGE_SIZE } from "@/utils";
import Link from "next/link";
import { Character } from "@/utils/types";
import Image from "next/image";

export default function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2">
      {characters.map((c) => (
        <li key={c.id}>
          <Link href={`/character/${c.id}`}>
            <Image
              src={c.imageUrl}
              alt={c.fullName}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
