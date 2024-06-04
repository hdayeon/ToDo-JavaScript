// 추가 버튼
document.createElementById("add").addEventListener("click", () => {
  let value = document.getElementById("content").value;
  if (value) addTodo(value);
});

const addTodo = (text) => {
  let item = document.createElement("li");
  item.innerText = text;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let add = document.createElement("div");
  add.classList.add("add");

  let remove = document.createElement("div");
  remove.classList.add("remove");
};
