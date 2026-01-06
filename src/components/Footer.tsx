import Panel from "./Panel";
import ButtonMetal from "./ButtonMetal";

export default function Footer() {
  return (
    <footer style={{ padding: "2%" }}>
      <Panel>
        <div
          className="nav-blade"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <div>© 2026 Fgatto13</div>
          <div style={{ display: "flex", gap: "12px" }}>
            <ButtonMetal
              onClick={() => {
                window.location.href = "mailto:francescogatto2001@gmail.com";
              }}
            >
              Contact Me
            </ButtonMetal>
            <ButtonMetal
              onClick={() => {
                window.location.href = "https://github.com/fgatto13";
              }}
            >
              GitHub
            </ButtonMetal>
          </div>
        </div>
      </Panel>
    </footer>
  );
}
