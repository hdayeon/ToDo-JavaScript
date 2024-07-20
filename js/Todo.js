document.addEventListener("DOMContentLoaded", () => {
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

    complete.addEventListener("click", () => completeTodo(item));

    remove.addEventListener("click", () => {
      list.removeChild(item);
    });
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
  };

  // li 있을 때만 스타일 적용
  const todoStClass = () => {
    let todo = document.getElementById("todo");
    if (todo.children.length > 0) {
      todo.classList.add("hasLi");
    } else {
      todo.classList.remove("hasLi");
    }

    let completedTodo = document.getElementById("completedTodo");
    if (completedTodo.children.length > 0) {
      completedTodo.classList.add("hasLi");
    } else {
      completedTodo.classList.remove("hasLi");
    }
  };

  // todo와 completedTodo 변화 감지
  const observer = new MutationObserver(toggleTodoClass);
  observer.observe(document.getElementById("todo"), { childList: true });
  observer.observe(document.getElementById("completedTodo"), {
    childList: true,
  });
});
