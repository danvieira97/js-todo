const selectors = {
  input: document.getElementById("inputTodo"),
  btnAdd: document.getElementById("btn-add"),
  main: document.getElementById("areaLista"),
};
let count = 0;

function addTask() {
  let inputValue = selectors.input.value;

  if (inputValue !== null && inputValue !== "" && inputValue !== undefined) {
    count++;
    let newItem = `
        <div id="${count}" class="item">
            <div onclick="checkTask(${count})" class="item-icon">
            <i id="icon_${count}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="checkTask(${count})" class="item-name">${inputValue}</div>
            <div class="item-button">
            <button onclick="deleteTask(${count})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`;
    selectors.main.innerHTML += newItem;

    selectors.input.value = "";
    selectors.input.focus();
  }
}

function deleteTask(id) {
  let task = document.getElementById(id);
  task.remove();
}

function checkTask(id) {
  let task = document.getElementById(id);
  let taskClass = task.getAttribute("class");

  if (taskClass == "item") {
    task.classList.add("check");

    let icon = document.getElementById("icon_" + id);
    icon.classList.remove("mdi-circle-outline");
    icon.classList.add("mdi-check-circle");

    task.parentNode.appendChild(task);
  } else {
    task.classList.remove("check");

    let icon = document.getElementById("icon_" + id);
    icon.classList.remove("mdi-check-circle");
    icon.classList.add("mdi-circle-outline");
  }
}
