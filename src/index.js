import "./styles.css";
import { Todo } from "./todos";
import { Set } from "./sets.js";
import { displaySets } from "./domManipulation.js";

const setArr = [];
const addSetButton = document.querySelector("#add-set-button");
addSetButton.addEventListener("click", () => console.log("XD"));

const todoes1 = new Todo("1", "2", "3", "4");
const set1 = new Set(1, "Fitness", "⚽️", "red");
const set2 = new Set(2, "Study", "📖", "blue");
set1.addSetToArray(setArr);
set2.addSetToArray(setArr);
displaySets(setArr);
console.log(setArr);
