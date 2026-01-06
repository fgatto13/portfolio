import Panel from "./Panel";
import ButtonMetal from "./ButtonMetal";
type Props = {
  onNavigate: (view: "home" | "projects" | "about" | "interests" | "lab") => void;
};

export default function Header({ onNavigate }: Props) {
  return (
    <header style={{ padding: "2%" }}>
      <Panel>
        <div
          className="nav-blade"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <h1>Fgatto13</h1>

          <div style={{ display: "flex", gap: "12px" }}>
            <ButtonMetal onClick={() => onNavigate("home")}>Home</ButtonMetal>
            <ButtonMetal onClick={() => onNavigate("projects")}>Projects</ButtonMetal>
            <ButtonMetal onClick={() => onNavigate("interests")}>Interests</ButtonMetal>
            <ButtonMetal onClick={() => onNavigate("lab")}>Lab</ButtonMetal>
            <ButtonMetal onClick={() => onNavigate("about")}>About</ButtonMetal>
          </div>
        </div>
      </Panel>
    </header>
  );
}
