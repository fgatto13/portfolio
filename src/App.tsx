import { useState, useEffect } from "react";
import { unlockAudio } from "./functions/audio";
import AudioUnlockOverlay from "./components/SoundUnlock";
import Header from "./components/Header";
import Home from "./views/Home";
import Projects from "./views/Projects";
import About from "./views/About";
import Interests from "./views/Interests";
import Lab from "./views/Lab";
import Footer from "./components/Footer";

export default function App() {
  const [view, setView] = useState<"home" | "projects" | "about" | "interests" | "lab">("home");
  
  useEffect(() => {
    const handler = () => {
      unlockAudio();
    };
    document.addEventListener("click", handler, { once: true });
    return () => document.removeEventListener("click", handler);
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <Header onNavigate={setView} />
        <main style={{ padding: "60px" }}>
          {view === "home" && <Home />}
          {view === "projects" && <Projects />}
          {view === "about" && <About />}
          {view === "interests" && <Interests />}
          {view === "lab" && <Lab />}
        </main>
        <AudioUnlockOverlay />
        <Footer />
      </div>
    </>
  );
}
