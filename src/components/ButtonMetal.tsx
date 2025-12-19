import { playHover, playClick } from "../functions/audio";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ButtonMetal({ children, onClick }: Props) {
  return (
    <button
      className="button-metal"
      onMouseEnter={playHover}
      onClick={() => {
        playClick();
        onClick?.();
      }}
    >
      {children}
    </button>
  );
}
