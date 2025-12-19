const hoverAudio = new Audio("assets/sounds/13.mp3");
hoverAudio.preload = "auto";
hoverAudio.volume = 0.3;

const clickAudio = new Audio("assets/sounds/12.mp3");
clickAudio.preload = "auto";
clickAudio.volume = 0.5;

let unlocked = false;

export function unlockAudio() {
  if (unlocked) return;
  // warm up audio on first user gesture
  hoverAudio.play().then(() => hoverAudio.pause()).catch(() => {});
  clickAudio.play().then(() => clickAudio.pause()).catch(() => {});
  unlocked = true;
}

export function playHover() {
  if (!unlocked) return;
  const sound = hoverAudio.cloneNode() as HTMLAudioElement;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

export function playClick() {
  if (!unlocked) return;
  const sound = clickAudio.cloneNode() as HTMLAudioElement;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}
