let button = document.getElementById("add");
let inputElement = document.getElementById("task");

button.addEventListener("click", () => {
  let input = inputElement.value;
  if (input !== "" && input !== null) {
    console.log(input);
    addNewElement(input);
  } else {
    console.log("Please enter something");
  }
});

function addNewElement(input) {
  let list = document.createElement("li");
  let del = document.createElement("button");
  let edit = document.createElement("button");
  let right = document.createElement("span");
  let checkbox = document.createElement("input");
  let inputSpan = document.createElement("span");

  checkbox.type = "checkbox";
  checkbox.classList = "task-checkbox";

  inputSpan.innerHTML = input;
  inputSpan.classList = "task-input";

  edit.innerHTML = "✏️";
  edit.classList = "edited";
  del.innerHTML = "❌";
  del.classList = "delete";
  right.classList = "button-container";
  right.appendChild(edit);
  right.appendChild(del);

  list.appendChild(checkbox);
  list.appendChild(inputSpan);
  list.appendChild(right);

  del.addEventListener("click", function () {
    list.remove();
  });

  edit.addEventListener("click", function () {
    edit.style.display = "none";
    del.style.display = "none";
    let prevIn = input;

    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = input;
    editInput.classList = "edit-input";
    list.innerHTML = "";
    list.appendChild(checkbox);
    list.appendChild(editInput);
    list.appendChild(right);

    let confirm = document.createElement("button");
    confirm.innerHTML = "✅";
    confirm.classList = "confirmed";
    right.appendChild(confirm);

    confirm.addEventListener("click", function () {
      if (editInput.value !== "") {
        inputSpan.innerHTML = editInput.value;
        input = editInput.value;
        list.innerHTML = "";
        list.appendChild(checkbox);
        list.appendChild(inputSpan);
        list.appendChild(right);
        right.removeChild(confirm);
        right.removeChild(back);
        edit.style.display = "inline";
        del.style.display = "inline";
      }
    });

    let back = document.createElement("button");
    back.innerHTML = "✖";
    back.classList = "backed";
    right.appendChild(back);

    back.addEventListener("click", function () {
      inputSpan.innerHTML = prevIn;
      list.innerHTML = "";
      list.appendChild(checkbox);
      list.appendChild(inputSpan);
      list.appendChild(right);
      right.removeChild(confirm);
      right.removeChild(back);
      edit.style.display = "inline";
      del.style.display = "inline";
    });
  });

  list.classList = "mylist";
  let ul = document.getElementById("ul");
  ul.appendChild(list);
  inputElement.value = "";
}
