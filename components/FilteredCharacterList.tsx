"use client";

import { IMAGE_SIZE, NO_FILTER_VALUE } from "@/utils";
import Link from "next/link";
import { Character } from "@/utils/types";
import { useState } from "react";
import Image from "next/image";

export default function FilteredCharacterList({ characters }: { characters: Character[] }) {
  const [selectedFamily, setSelectedFamily] = useState(NO_FILTER_VALUE);

  // We could memoize this, but react compiler in react 19 should optimize it under the hood, KISS
  const uniqueFamilies = Array.from(new Set(characters.map((c) => c.family).filter((c) => c.startsWith("House "))));

  return (
    <>
      <div className="flex justify-center md:justify-end pb-6">
        <label>
          Choose a Family:
          <select value={selectedFamily} onChange={(e) => setSelectedFamily(e.target.value)}>
            <option value={NO_FILTER_VALUE}>All</option>
            {uniqueFamilies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2">
        {characters
          .filter((c) => {
            if (selectedFamily === NO_FILTER_VALUE) {
              return true;
            }

            return c.family === selectedFamily;
          })
          .map((c) => (
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
    </>
  );
}
