import React from "react";

const platforms = ["twitter", "facebook", "instagram"];

export default function PlatformSelector({ selected, onChange }) {
  return (
    <div className="platform-selector">
      {platforms.map((platform) => (
        <label key={platform}>
          <input
            type="checkbox"
            checked={selected.includes(platform)}
            onChange={() => onChange(platform)}
          />
          {platform.toUpperCase()}
        </label>
      ))}
    </div>
  );
}
