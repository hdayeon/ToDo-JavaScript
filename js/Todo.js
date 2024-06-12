// 추가 버튼
document.getElementById("add").addEventListener("click", () => {
  let value = document.getElementById("content").value;
  if (value) {
    addTodo(value);
    document.getElementById("content").value = "";
  }
});

const addTodo = (text) => {
  let list = document.getElementById("todo");

  let item = document.createElement("li");
  item.innerText = text;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerText = "완료";

  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerText = "삭제";

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);

  complete.addEventListener("click", completeTodo);

  remove.addEventListener("click", () => {
    list.removeChild(item);
  });
};

const completeTodo = () => {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;

  let target =
    id === "todo"
      ? document.getElementById("completedTodo")
      : document.getElementById("todo");
};
