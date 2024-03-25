const titleInput = document.querySelector("#title");
const emojiInput = document.querySelector("#emoji");
const bgcInput = document.querySelector("#bgc");

export function setupFormValidation() {
  document.addEventListener("DOMContentLoaded", function () {
    titleInput.pattern = "[A-Za-z0-9]{3,20}";
  });
}

export function getDialogValues() {
  let title = titleInput.value;
  let emoji = emojiInput.value;
  let bgc = bgcInput.value;

  let setValues = [title, emoji, bgc];

  return setValues;
}
