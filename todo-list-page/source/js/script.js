let $ = document;
let inputElem = $.querySelector("#form-input");
let addInputElem = $.querySelector(".add");
let formUlElem = $.querySelector("#ul-elem");
let trashElem = $.querySelectorAll(".delete");

function addNewTodo(addNewValue) {
  let addNewLi = $.createElement("li");
  addNewLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  let addNewSpan = $.createElement("span");
  addNewSpan.innerHTML = addNewValue;
  let addNewTrash = $.createElement("i");
  addNewTrash.className = "fa fa-trash-o delete";

  addNewTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  addNewLi.append(addNewSpan, addNewTrash);
  formUlElem.append(addNewLi);
}

addInputElem.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let addNewValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (addNewValue) {
      inputElem.value = "";
      addNewTodo(addNewValue);
    }
  }
});
