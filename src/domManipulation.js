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
  console.log(gridElements);

  gridElements.forEach((gridElement) => {
    gridElement.addEventListener("click", () => {
      renderSetTodoes(gridElement);
    });
  });
}

function renderSetTodoes(gridElement) {
  const setId = gridElement.dataset.setId;

  todoesArr.forEach((todo) => {
    if (parseInt(setId) === todo.id) {
      containerGrid.innerHTML = todo;
    }
  });
}
