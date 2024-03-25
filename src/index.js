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
addSetButton.addEventListener("click", () => {});

form.addEventListener("submit", function (event) {
  addNewSet();
});

function addNewSet() {
  const setValues = getDialogValues();
  const newSet = new Set(setValues[0], setValues[1], setValues[2], 1);
  newSet.addSetToArray(setArr);
  displaySets(setArr);
}

export const todoesArr = [];
const todoes1 = new Todo(1, "Workout", "3", "4", "5");
todoesArr.push(todoes1);

const set1 = new Set("Fitness", "⚽️", "red", 1);
const set2 = new Set("Study", "📖", "blue", 2);

set1.addSetToArray(setArr);
set2.addSetToArray(setArr);

displaySets(setArr);
console.log(setArr);
