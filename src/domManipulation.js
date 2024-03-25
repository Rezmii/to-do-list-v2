export function displaySets(setArr) {
  const containerGrid = document.querySelector("#container-grid");
  containerGrid.innerHTML = "";
  setArr.forEach((set) => {
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
    containerGrid.appendChild(gridElement);
  });
}
