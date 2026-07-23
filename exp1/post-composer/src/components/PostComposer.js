import React, { useState } from "react";
import PlatformSelector from "./PlatformSelector";
import { platformRules } from "../platformRules";

export default function PostComposer() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [content, setContent] = useState("");

  const togglePlatform = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const feedback = selectedPlatforms.map((platform) => {
    const rule = platformRules[platform];
    const isValid = content.length <= rule.maxChars;
    return {
      platform,
      isValid,
      remaining: rule.maxChars - content.length,
    };
  });

  return (
    <div className="composer">
      <PlatformSelector selected={selectedPlatforms} onChange={togglePlatform} />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
      />

      <div className="feedback">
        {feedback.map((f) => (
          <p key={f.platform} style={{ color: f.isValid ? "green" : "red" }}>
            {f.platform.toUpperCase()}: {f.remaining} characters remaining
          </p>
        ))}
      </div>
    </div>
  );
}
