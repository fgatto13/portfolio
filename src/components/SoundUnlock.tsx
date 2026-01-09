import { useState, useEffect } from "react";
import { unlockAudio } from "../functions/audio";

export default function AudioUnlockOverlay() {
  const [visible, setVisible] = useState(true);

  const handleUnlock = () => {
    unlockAudio();
    setVisible(false);
  };

  useEffect(() => {
    // Optional: also unlock on any keypress or touch
    const handler = () => handleUnlock();
    document.addEventListener("keydown", handler, { once: true });
    document.addEventListener("touchstart", handler, { once: true });

    return () => {
      document.removeEventListener("keydown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={handleUnlock}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "12px 20px",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#0f0",
        border: "1px solid #0f0",
        borderRadius: "12px",
        boxShadow: "0 0 14px #00ff5a",
        cursor: "pointer",
        zIndex: 9999,
        fontFamily: "'Lucida Console', Monaco, monospace",
        fontSize: "14px",
      }}
    >
      Click or press any key to enable sounds
    </div>
  );
}
