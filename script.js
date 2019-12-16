var notesList = [
  { name: "C4", audio: new Audio("notes/C4.mp3") },
  { name: "Db4", audio: new Audio("notes/Db4.mp3") },
  { name: "D4", audio: new Audio("notes/D4.mp3") },
  { name: "Eb4", audio: new Audio("notes/Eb4.mp3") },
  { name: "E4", audio: new Audio("notes/E4.mp3") },
  { name: "F4", audio: new Audio("notes/F4.mp3") },
  { name: "Gb4", audio: new Audio("notes/Gb4.mp3") },
  { name: "G4", audio: new Audio("notes/G4.mp3") },
  { name: "Ab4", audio: new Audio("notes/Ab4.mp3") },
  { name: "A4", audio: new Audio("notes/A4.mp3") },
  { name: "Bb4", audio: new Audio("notes/Bb4.mp3") },
  { name: "B4", audio: new Audio("notes/B4.mp3") },
  { name: "C5", audio: new Audio("notes/C5.mp3") },
  { name: "Db5", audio: new Audio("notes/Db5.mp3") },
  { name: "D5", audio: new Audio("notes/D5.mp3") },
  { name: "Eb5", audio: new Audio("notes/Eb5.mp3") },
  { name: "E5", audio: new Audio("notes/E5.mp3") }
];

const All_KEYS = [
  "z",
  "s",
  "x",
  "d",
  "c",
  "v",
  "g",
  "b",
  "h",
  "n",
  "j",
  "m",
  ",",
  "l",
  ".",
  "'",
  "/ "
];

const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
  key.addEventListener("mouseover", () => playNote(key));
});

document.addEventListener("keydown", e => {
  if (e.repeat) return;

  const eKey = e.key;
  const index = All_KEYS.indexOf(eKey);
  if (index > -1) playNote(keys[index]);
});

function playNote(key) {
  const note = notesList.filter(obj => {
    return obj.name === key.dataset.note;
  });
  const noteAudio = note[0].audio;
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  setTimeout(() => key.classList.remove("active"), 200);
}
