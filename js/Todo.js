// 추가 버튼
document.createElementById("add").addEventListener("click", () => {
  let value = document.getElementById("content").value;
  if (value) {
    addTodo(value);
    value = "";
  }
});

const addTodo = (text) => {
  let list = document.getElementById("todo");

  let item = document.createElement("li");
  item.innerText = text;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  // let complete = document.createElement("button");
  // add.classList.add("complete");

  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerText = "삭제";

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
};
