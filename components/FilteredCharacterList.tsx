"use client";

import { NO_FILTER_VALUE } from "@/utils";
import Link from "next/link";
import { Character } from "@/utils/types";
import { useState } from "react";

export default function FilteredCharacterList({ characters }: { characters: Character[] }) {
  const [selectedFamily, setSelectedFamily] = useState(NO_FILTER_VALUE);

  // We could memoize this, but react compiler in react 19 should optimize it under the hood, KISS
  const uniqueFamilies = Array.from(new Set(characters.map((c) => c.family).filter((c) => c.startsWith("House "))));

  return (
    <>
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

      <ul>
        {characters
          .filter((c) => {
            if (selectedFamily === NO_FILTER_VALUE) {
              return true;
            }

            return c.family === selectedFamily;
          })
          .map((c) => (
            <li key={c.id}>
              <Link href={`/character/${c.id}`}>{c.fullName}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
