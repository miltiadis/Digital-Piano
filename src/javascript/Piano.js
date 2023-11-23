import { keyboardMap } from "./keybinds";

//Module Pattern
export const Piano = () => {
  const playNote = (note) => {
    const audio = new Audio(`assets/audio/${note}.mp3`);
    audio.play();
  };

  const playNoteByKey = (key) => {
    const dataKey = keyboardMap[key];
    if (datakey) {
      playNote(dataKey);
    }
  };

  return {
    playNote,
    playNoteByKey,
  };
};
