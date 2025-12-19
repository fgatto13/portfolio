import Panel from "../components/Panel";
import ButtonMetal from "../components/ButtonMetal";

export default function Home() {
  return (
    <section>
      <Panel>
        <h1>Welcome!</h1>
        <p>This is the home view.</p>
        <ButtonMetal>Click me</ButtonMetal>
      </Panel>
    </section>
  );
}
