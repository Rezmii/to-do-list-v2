import { todoesArr } from ".";
const containerGrid = document.querySelector("#container-grid");

export function displaySets(setArr) {
  containerGrid.innerHTML = "";
  setArr.forEach((set, i) => {
    const gridElement = document.createElement("div");

    const topSection = document.createElement("div");
    const bottomSection = document.createElement("div");
    const pTitle = document.createElement("p");
    const pEmoji = document.createElement("p");
    pTitle.textContent = set.title;
    pEmoji.textContent = set.emoji;

    pEmoji.style.backgroundColor = set.bgc;
    bottomSection.appendChild(pTitle);
    topSection.appendChild(pEmoji);
    gridElement.appendChild(topSection);
    gridElement.appendChild(bottomSection);

    topSection.classList.add("top-section");
    bottomSection.classList.add("bottom-section");
    gridElement.classList.add("grid-element");
    gridElement.setAttribute("data-set-id", i);
    containerGrid.appendChild(gridElement);
  });
  getGridElements();
}

function getGridElements() {
  const gridElements = document.querySelectorAll(".grid-element");

  gridElements.forEach((gridElement) => {
    gridElement.addEventListener("click", () => {
      renderSetTodoes(gridElement);
    });
  });
}

function renderSetTodoes(gridElement) {
  containerGrid.innerHTML = "";

  const todoesDiv = addTodoesGrid();
  const todoesElements = addTodoesToGrid(gridElement);
  todoesDiv.appendChild(todoesElements);
  containerGrid.appendChild(todoesDiv);
}

function addTodoesGrid() {
  const divElement = document.createElement("div");
  const h1Element = document.createElement("h1");
  h1Element.textContent = "Tasks";
  divElement.appendChild(h1Element);
  return divElement;
}

function addTodoesToGrid(gridElement) {
  const setId = gridElement.dataset.setId;
  const divElement = document.createElement("div");
  todoesArr.forEach((todo) => {
    if (parseInt(setId) === todo.id) {
      const pElement = document.createElement("p");
      pElement.textContent = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority}`;
      divElement.appendChild(pElement);
    }
  });
  return divElement;
}
