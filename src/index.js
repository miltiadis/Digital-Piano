import "./styles/main.scss";
import { Piano } from "./javascript/Piano";
import { keyboardMap } from "./javascript/keybinds";

const DigitalPiano = Piano();

const pianoKeys = document.querySelectorAll(".key-white, .key-black");

const uiNoteKeybindMap = [...pianoKeys].reduce((acc, item) => {
  const key = item.dataset.key;
  acc[key] = item;
  return acc;
}, {});

const handleMouseDown = (event) => {
  const note = event.currentTarget.dataset.key.toLowerCase();
  event.currentTarget.classList.add("is-pressed");
  DigitalPiano.playNote(note);
};

const handleMouseUp = (event) => {
  event.currentTarget.classList.remove("is-pressed");
};

const handleDocumentMouseUp = () => {
  pianoKeys.forEach((el) => {
    el.classList.remove("is-pressed");
  });
};

const findNoteAndNodeFromKeyPress = (event) => {
  const keyboardInput = event.key.toLowerCase();
  const note = keyboardMap[keyboardInput];
  const node = uiNoteKeybindMap[note];
  return { note, node };
};

const handleDocumentKeyDown = (event) => {
  const { note, node } = findNoteAndNodeFromKeyPress(event);
  if (note) {
    node.classList.add("is-pressed");
    DigitalPiano.playNote(note);
  }
};

const handleDocumentKeyUp = (event) => {
  const { note, node } = findNoteAndNodeFromKeyPress(event);
  if (note) {
    node.classList.remove("is-pressed");
  }
};

document.addEventListener("mouseup", handleDocumentMouseUp);
document.addEventListener("keydown", handleDocumentKeyDown);
document.addEventListener("keyup", handleDocumentKeyUp);

pianoKeys.forEach((node) => {
  node.addEventListener("mousedown", handleMouseDown);
  node.addEventListener("mouseup", handleMouseUp);
});
