document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
  const contentInput = document.getElementById("content");
  const todoList = document.getElementById("todo");
  const completedTodoList = document.getElementById("completedTodo");

  addButton.addEventListener("click", () => {
    const value = contentInput.value;
    if (value) {
      addTodo(value);
      contentInput.value = "";
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

    complete.addEventListener("click", () => completeTodo(item));

    remove.addEventListener("click", () => {
      list.removeChild(item);
    });

    toggleTodoClass();
  };

  const completeTodo = (item) => {
    let parent = item.parentNode;
    let id = parent.id;

    let target =
      id === "todo"
        ? document.getElementById("completedTodo")
        : document.getElementById("todo");

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

    toggleTodoClass();
  };

  const toggleTodoClass = () => {
    toggleClass(todoList);
    toggleClass(completedTodoList);
  };

  // li 있을 때만 스타일 적용
  const toggleClass = (list) => {
    if (list.children.length > 0) {
      list.classList.add("hasLi");
    } else {
      list.classList.remove("hasLi");
    }
  };

  // todo와 completedTodo 변화 감지
  const observer = new MutationObserver(toggleTodoClass);
  observer.observe(todoList, { childList: true });
  observer.observe(completedTodoList, { childList: true });
});
