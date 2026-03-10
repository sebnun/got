"use client";

import { NO_FILTER_VALUE } from "@/utils";
import { Character } from "@/utils/types";
import { useState } from "react";

export default function FilteredCharacterList({
  characters,
  families,
}: {
  characters: Character[];
  families: string[];
}) {
  const [selectedFamily, setSelectedFamily] = useState(NO_FILTER_VALUE);

  return (
    <>
      <label>
        Choose a Family:
        <select value={selectedFamily} onChange={(e) => setSelectedFamily(e.target.value)}>
          <option value={NO_FILTER_VALUE}>All</option>
          {families.map((c) => (
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
            <li key={c.id}>{c.fullName}</li>
          ))}
      </ul>
    </>
  );
}
