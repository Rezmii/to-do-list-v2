import "./styles.css";
import { Todo } from "./todos";
import { Set } from "./sets.js";
import { displaySets } from "./domManipulation.js";
import { setupFormValidation, getDialogValues } from "./dialogValues.js";

const setArr = [];
const dialog = document.querySelector("dialog");
const showDialogButton = document.querySelector("#show-dialog-button");
const closeButton = document.querySelector("#close-button");
const addSetButton = document.querySelector("#add-set-button");

const form = document.getElementById("add-set-form");
setupFormValidation();

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});
closeButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", function (event) {
  addNewSet();
});

function addNewSet() {
  const setValues = getDialogValues();
  const newSet = new Set(setValues[0], setValues[1], setValues[2]);
  newSet.addSetToArray(setArr);
  displaySets(setArr);
}

export let todoesArr = [];
const todoes1 = new Todo(1, "Workout", "Go to the gym", "28.04", "Important");
const todoes2 = new Todo(
  0,
  "Study",
  "Study to math exam",
  "17.04",
  "Very important"
);
const todoes3 = new Todo(
  1,
  "Yoga",
  "Do some yoga to relax muscles",
  "22.04",
  "Not that important"
);
todoesArr = [...todoesArr, todoes1, todoes2, todoes3];

const set1 = new Set("Fitness", "⚽️", "red");
const set2 = new Set("Study", "📖", "blue");

setArr.push(set1);
setArr.push(set2);

displaySets(setArr);
console.log(setArr);
