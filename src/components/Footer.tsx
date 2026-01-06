import Panel from "./Panel";
import ButtonMetal from "./ButtonMetal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
              <FontAwesomeIcon icon={faEnvelope} style={{color: "#008831",}} />
              Contact Me
            </ButtonMetal>
            <ButtonMetal
              onClick={() => {
                window.location.href = "https://github.com/fgatto13";
              }}
            >
              <FontAwesomeIcon icon={faGithub} style={{color: "#008831",}} />
              GitHub
            </ButtonMetal>
          </div>
        </div>
      </Panel>
    </footer>
  );
}
