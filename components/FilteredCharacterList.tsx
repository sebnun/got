"use client";

import { NO_FILTER_VALUE } from "@/utils";
import { Character } from "@/utils/types";
import { useState } from "react";
import CharacterList from "./CharactersList";

export default function FilteredCharacterList({ characters }: { characters: Character[] }) {
  const [selectedFamily, setSelectedFamily] = useState(NO_FILTER_VALUE);

  // We could memoize this, but react compiler in react 19 should optimize it under the hood, KISS
  const uniqueFamilies = Array.from(new Set(characters.map((c) => c.family).filter((c) => c.startsWith("House "))));
  const charactersToShow = characters.filter((c) => {
    if (selectedFamily === NO_FILTER_VALUE) {
      return true;
    }

    return c.family === selectedFamily;
  });

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
      <CharacterList characters={charactersToShow} />
    </>
  );
}
